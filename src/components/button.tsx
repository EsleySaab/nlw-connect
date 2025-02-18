interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="text-white bg-violet-500 px-5 py-2 rounded-sm">
      {text}
    </button>
  )
}
