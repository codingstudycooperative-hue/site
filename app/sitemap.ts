import type { MetadataRoute } from "next";
import { equipment } from "@/data/equipment";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const SITE_URL = "https://codingstudy.kr";

async function getGalleryAlbumIds(): Promise<
  { id: string; updatedAt: string }[]
> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("gallery_albums")
      .select("id, created_at")
      .order("year", { ascending: false });

    if (error || !data) return [];

    return data.map((row) => ({
      id: row.id,
      updatedAt: row.created_at ?? new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/programs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/equipment`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/achievements`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const equipmentRoutes: MetadataRoute.Sitemap = equipment.map((item) => ({
    url: `${SITE_URL}/equipment/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const albums = await getGalleryAlbumIds();
  const galleryRoutes: MetadataRoute.Sitemap = albums.map((album) => ({
    url: `${SITE_URL}/gallery/${album.id}`,
    lastModified: new Date(album.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...equipmentRoutes, ...galleryRoutes];
}
