export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        method="post"
        className="grid gap-5 p-8 bg-white rounded-lg shadow-md w-fit border border-zinc-300"
      >
        <img src="/url-press-logo.png" alt="Logo Url Press" className="h-24 w-auto mx-auto"/>
        <label htmlFor="email" className="text-sm font-medium">
          Enter your e-mail
        </label>

        <input
          type="email"
          name="email"
          placeholder="E-mail"
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
          className="
            mt-2
            bg-[color:var(--color-default)]
            text-white
            py-2
            rounded
            hover:bg-[color:var(--color-default-hover)]
          "
        >
          Login
        </button>
      </form>
    </div>
  )
}
