import { Link, useLocation } from "react-router";

type NavItem = {
  label: string
  to: string
}

type NavbarProps = {
  items: NavItem[]
}

export default function Navbar({ items }: NavbarProps) {
  const location = useLocation()

  return (
    <nav className="flex gap-6 p-6 bg-[color:var(--color-default)] rounded-md text-white">
      {items.map((item) => {
        const isActive = location.pathname === item.to

        return isActive ? (
          <span
            key={item.to}
            className="underline font-semibold opacity-70 cursor-default"
          >
            {item.label}
          </span>
        ) : (
          <Link
            key={item.to}
            to={item.to}
            className="hover:underline"
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
