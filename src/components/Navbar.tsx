import { Link } from "react-router";

type NavItem = {
  label: string
  to: string
}

type NavbarProps = {
  items: NavItem[]
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <nav className="flex gap-6 p-6 bg-[color:var(--color-default)] rounded-md text-white">
      {
        items.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))
      }
    </nav>
  )
}
