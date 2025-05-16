import { type Header } from "../../types/Header"

export const simpleTitle = (props: Header) => {
    const { title } = props

  return (
    <div className="flex justify-center">
        <h1 className="text-6xl font-bold">{title}</h1>
    </div>
  )
}
