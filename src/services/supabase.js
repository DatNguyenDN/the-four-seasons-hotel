import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tlrevlvjqgfanxoiynbt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscmV2bHZqcWdmYW54b2l5bmJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTM5NDgsImV4cCI6MjAyMjA4OTk0OH0.go6MPdtgzg9C9WVWEVr_RGQ9Fbzc-1z7WEHGfYq2mtg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
