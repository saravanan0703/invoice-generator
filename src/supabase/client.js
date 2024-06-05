import { createClient } from "@supabase/supabase-js";

const projectURL = 'https://arjymhzsjzaofatcxenj.supabase.co';
const projectKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyanltaHpzanphb2ZhdGN4ZW5qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzQxMjIxMywiZXhwIjoyMDMyOTg4MjEzfQ.7yyuUPz1GYNLlaEQqbVQGeJ4fqJLfpgg_PO6y4SKhH8'

export const supabase = createClient(projectURL, projectKey);
