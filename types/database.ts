// Supabase 데이터베이스 타입 정의
// 연동 후: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > types/database.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      inquiries: {
        Row: {
          id: string;
          org_name: string;
          manager: string;
          phone: string;
          email: string;
          grade: string | null;
          program: string | null;
          headcount: number | null;
          desired_date: string | null;
          message: string;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          org_name: string;
          manager: string;
          phone: string;
          email: string;
          grade?: string | null;
          program?: string | null;
          headcount?: number | null;
          desired_date?: string | null;
          message: string;
          is_read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          org_name?: string;
          manager?: string;
          phone?: string;
          email?: string;
          grade?: string | null;
          program?: string | null;
          headcount?: number | null;
          desired_date?: string | null;
          message?: string;
          is_read?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      gallery_albums: {
        Row: {
          id: string;
          title: string;
          category: string;
          year: number;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          category: string;
          year: number;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          category?: string;
          year?: number;
          description?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      gallery_images: {
        Row: {
          id: string;
          album_id: string;
          storage_path: string;
          order_num: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          album_id: string;
          storage_path: string;
          order_num?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          album_id?: string;
          storage_path?: string;
          order_num?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "gallery_images_album_id_fkey";
            columns: ["album_id"];
            isOneToOne: false;
            referencedRelation: "gallery_albums";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<never, never>;
    Functions: Record<never, never>;
    Enums: Record<never, never>;
    CompositeTypes: Record<never, never>;
  };
}
