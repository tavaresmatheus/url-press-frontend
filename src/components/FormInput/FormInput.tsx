import type { FormInputProps } from "./FormInput.types";

export default function FormInput({ type, name, placeholder, value, onChange }: FormInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
  )
}
