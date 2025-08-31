import { createClient } from '@supabase/supabase-js'

// These will be replaced with actual credentials when connected
const SUPABASE_URL = 'https://demo-project.supabase.co'
const SUPABASE_ANON_KEY = 'demo-anon-key'

// For demo purposes, create a mock client that won't break the build
const mockSupabase = {
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: { message: 'Demo mode - please connect Supabase' } }),
    delete: () => Promise.resolve({ data: null, error: null }),
    eq: () => ({ data: null, error: null }),
    order: () => ({ data: [], error: null })
  }),
  auth: {
    getSession: () => Promise.resolve({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Demo mode - please connect Supabase' } }),
    signOut: () => Promise.resolve({ error: null })
  }
}

// Use mock client for demo, replace with real client when Supabase is connected
export const supabase = mockSupabase

export default supabase