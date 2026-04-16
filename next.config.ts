import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://aexvbejazgptrlxvfkeh.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleHZiZWphemdwdHJseHZma2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMDIyOTgsImV4cCI6MjA5MTc3ODI5OH0.-pTH5KbDOhWQMKrZPQ6DQBDwc8WUzTFwcusUNq70UDw",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
