import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {handleLogin, loading, error} = useAuth()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const response = await handleLogin(email, password)
    setEmail('')
    setPassword('')

    if (response) {
      localStorage.setItem('token', response.token)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        method="post"
        className="grid gap-5 p-8 bg-white rounded-lg shadow-md w-fit border border-zinc-300"
        onSubmit={handleSubmit}
      >
        <img src="/url-press-logo.png" alt="Logo Url Press" className="h-24 w-auto mx-auto"/>
        <label htmlFor="email" className="text-sm font-medium">
          Enter your e-mail
        </label>

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="
            border
            border-zinc-300
            rounded
            px-3
            py-2
            focus:outline-none
            focus:border-[color:var(--color-default)]
            focus:ring-1
            focus:ring-[color:var(--color-default)]
          "
        />

        <label htmlFor="password" className="text-sm font-medium">
          Enter your password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="
            border
            border-zinc-300
            rounded
            px-3
            py-2
            focus:outline-none
            focus:border-[color:var(--color-default)]
            focus:ring-1
            focus:ring-[color:var(--color-default)]
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            mt-2
            bg-[color:var(--color-default)]
            text-white
            py-2
            rounded
            hover:bg-[color:var(--color-default-hover)]
          "
        >
          {loading ? 'Getting in...' : 'Login'}
        </button>

        {error && <p className="text-red-900 text-center">{error}</p>}
      </form>
    </div>
  )
}
