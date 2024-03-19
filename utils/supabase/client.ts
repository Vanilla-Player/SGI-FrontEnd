"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function useSupabaseClient() {
  return createClientComponentClient({
    supabaseUrl: process.env.VITE_SUPABASE_URL as string,
    supabaseKey: process.env.VITE_SUPABASE_ANON_KEY as string,
    isSingleton: true,
  });
}
