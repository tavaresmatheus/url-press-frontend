import type { FormLabelProps } from "./FormLabel.types";

export default function FormLabel ({label, htmlFor}: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {label}
    </label>
  )
}
