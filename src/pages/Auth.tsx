import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient' // Adjust path if needed
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // Listen for auth state changes (e.g., successful login)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/') // Redirect to home once logged in
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  return (
    <div style={{ 
      maxWidth: '420px', 
      margin: '100px auto', 
      padding: '2rem', 
      backgroundColor: '#1a1a1a', // Matches typical dark portfolio vibes
      borderRadius: '8px' 
    }}>
      <h2 style={{ textAlign: 'center', color: 'white' }}>Welcome Back</h2>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'github']}
        theme="dark"
      />
    </div>
  )
}