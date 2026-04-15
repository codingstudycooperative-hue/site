import PageBanner from "@/components/ui/PageBanner";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";

export const metadata = {
  title: "갤러리 | 코딩스터디 협동조합",
  description: "코딩스터디 협동조합의 수업 현장과 행사 사진을 둘러보세요.",
};

interface Album {
  id: string;
  title: string;
  category: string;
  year: number;
  thumbnailUrl?: string;
  imageCount: number;
}

type GalleryAlbum = Database["public"]["Tables"]["gallery_albums"]["Row"];

async function getGalleryData() {
  try {
    const supabase = await createClient();

    // 갤러리 앨범 조회
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: albums, error: albumsError } = (await (supabase as any)
      .from("gallery_albums")
      .select("*")
      .order("year", { ascending: false })
      .order("created_at", { ascending: false })) as {
      data: GalleryAlbum[] | null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error: any;
    };

    if (albumsError) {
      console.error("앨범 조회 오류:", albumsError);
      return { albums: [], categories: [], years: [] };
    }

    if (!albums || albums.length === 0) {
      return { albums: [], categories: [], years: [] };
    }

    // 각 앨범별 이미지 수 및 썸네일 조회
    const albumsWithDetails: Album[] = await Promise.all(
      albums.map(async (album) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data: images } = (await (supabase as any)
          .from("gallery_images")
          .select("id, storage_path", { count: "exact" })
          .eq("album_id", album.id)
          .order("order_num", { ascending: true })) as {
          data: Array<{ id: string; storage_path: string }> | null;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: any;
        };

        const imageCount = images?.length || 0;

        // 첫 번째 이미지를 썸네일로 사용
        let thumbnailUrl: string | undefined = undefined;
        if (images && images.length > 0) {
          const firstImage = images[0];
          const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
          if (supabaseUrl) {
            thumbnailUrl = `${supabaseUrl}/storage/v1/object/public/gallery-images/${firstImage.storage_path}`;
          }
        }

        return {
          id: album.id,
          title: album.title,
          category: album.category,
          year: album.year,
          thumbnailUrl,
          imageCount,
        };
      }),
    );

    // 고유한 카테고리와 연도 추출
    const categories = Array.from(
      new Set(albumsWithDetails.map((a) => a.category)),
    ).sort();

    const years = Array.from(
      new Set(albumsWithDetails.map((a) => a.year)),
    ).sort((a, b) => b - a);

    return {
      albums: albumsWithDetails,
      categories,
      years,
    };
  } catch (error) {
    console.error("갤러리 데이터 조회 중 오류:", error);
    return { albums: [], categories: [], years: [] };
  }
}

export default async function GalleryPage() {
  const { albums, categories, years } = await getGalleryData();

  return (
    <main>
      <PageBanner
        title="Gallery"
        subtitle="갤러리"
        description="실제 수업현장과 조합 행사 사진"
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryFilter
            albums={albums}
            categories={categories}
            years={years}
          />
        </div>
      </section>
    </main>
  );
}
