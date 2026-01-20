import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import FormLabel from '../components/FormLabel/FormLabel'
import FormInput from '../components/FormInput/FormInput'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin, loading, error } = useAuth()

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
        className="
          grid
          gap-5
          p-8
          bg-white
          rounded-lg
          shadow-md
          w-fit
          border
          border-zinc-300
        "
        onSubmit={handleSubmit}
      >
        <img
          src="/url-press-logo.png"
          alt="Logo Url Press"
          className="h-24 w-auto mx-auto"
        />
        <FormLabel htmlFor="email" label="Enter your e-mail" />
        <FormInput
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <FormLabel htmlFor="password" label="Enter your password"/>
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
          {loading ? "Getting in..." : "Login"}
        </button>

        {error && <p className="text-red-900 text-center">{error}</p>}
      </form>
    </div>
  )
}
