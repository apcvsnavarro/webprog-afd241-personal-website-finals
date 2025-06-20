import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://repsceheqeqakgocwgfz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcHNjZWhlcWVxYWtnb2N3Z2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTQ5NjYsImV4cCI6MjA2NTk3MDk2Nn0.A6gSCD1fbH36H5In8P-QndAbCvE6yxM8K5L2NuJMm5U'

export const supabase = createClient(supabaseUrl, supabaseKey)