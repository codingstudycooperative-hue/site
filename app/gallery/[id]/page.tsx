import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

interface Image {
  id: string;
  storage_path: string;
  order_num: number;
}

async function getAlbumData(id: string) {
  try {
    const supabase = await createClient();

    const { data: album, error: albumError } = await supabase
      .from("gallery_albums")
      .select("*")
      .eq("id", id)
      .single();

    if (albumError || !album) return null;

    const { data: images } = await supabase
      .from("gallery_images")
      .select("id, storage_path, order_num")
      .eq("album_id", id)
      .order("order_num", { ascending: true });

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl) {
      throw new Error("NEXT_PUBLIC_SUPABASE_URL is not configured");
    }

    const imageUrls = (images || []).map((img) => ({
      id: img.id,
      url: `${supabaseUrl}/storage/v1/object/public/gallery-images/${img.storage_path}`,
    }));

    return { album, imageUrls };
  } catch {
    return null;
  }
}

export default async function GalleryAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getAlbumData(id);

  if (!result) {
    notFound();
  }

  const { album, imageUrls } = result;

  return (
    <main>
      <PageBanner
        title="Gallery"
        subtitle={album.title}
        description={`${album.category} · ${album.year}년`}
        subdescription={album.description ?? undefined}
      />

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 font-medium text-sm transition-colors"
            >
              ← 갤러리 목록으로
            </Link>
          </div>

          <GalleryLightbox images={imageUrls} albumTitle={album.title} />
        </div>
      </section>
    </main>
  );
}
