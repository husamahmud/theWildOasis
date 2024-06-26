import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jypetjaadblrxnxsuxoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cGV0amFhZGJscnhueHN1eG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMDk1NzgsImV4cCI6MjAzMzc4NTU3OH0.zr_Wh3jd9vYZTmy4TiW2C-2QpA4dE1T78CgWGLN9krM'
const supabaseImagesBucket = 'theWildOasis-cabin_images'

const supabase = createClient(supabaseUrl, supabaseKey)

export const generateImageUrl = async (fileName: string): Promise<string> => {
  const { data, error } = await supabase
    .storage
    .from(supabaseImagesBucket)
    .createSignedUrl(fileName, 60)

  if (error) {
    throw new Error(error.message)
  }

  if (data && data.signedUrl) {
    return data.signedUrl
  }

  throw new Error('Failed to generate image URL')
}
