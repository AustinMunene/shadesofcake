import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mwtcvmxlxtvjpulwlxyy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13dGN2bXhseHR2anB1bHdseHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NjYxOTUsImV4cCI6MjA2MzI0MjE5NX0.pSYb9VN54JQAWRVufK6FeNkbBOk79oOUdiChDuXg7V8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);