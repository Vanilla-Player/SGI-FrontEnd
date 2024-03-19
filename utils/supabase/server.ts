import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export function useSupabaseServer() {
  const cookieStore = cookies();
  return createServerComponentClient(
    {
      cookies: () => cookieStore,
    },
    {
      supabaseKey: process.env.VITE_SUPABASE_ANON_KEY as string,
      supabaseUrl: process.env.VITE_SUPABASE_URL as string,
    }
  );
}
