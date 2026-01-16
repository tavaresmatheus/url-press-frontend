import { useEffect, useState } from 'react';
import { login } from '../services/loginService';
import { useNavigate } from 'react-router';

type LoginResponse = {
  message: string
  token: string
}

type UseAuthReturn = {
  handleLogin: (email: string, password: string) => Promise<LoginResponse | null>
  loading: boolean
  error: string | null
};

export function useAuth (): UseAuthReturn {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null)
      }, 5000) // 5 seconds

      return () => clearTimeout(timer)
    }
  }, [error])

  async function handleLogin(email: string, password: string): Promise<LoginResponse | null> {
    try {
      setLoading(true)
      setError(null)

      const data = await login(email, password)

      if (data) {
        navigate('/panel')
      }

      return data
    } catch {
      setError('Fail to login, verify credentials')

      return null
    } finally {
      setLoading(false)
    }
  }

  return {
    handleLogin,
    loading,
    error
  }
}
