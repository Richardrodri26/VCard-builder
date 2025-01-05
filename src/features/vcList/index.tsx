import { VCListItem } from "./VCListItem"

interface Props {
  items: any[]
}

export const VCList = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {
        items.map((_, index) => (
          <VCListItem key={index} />
        ))
      }
    </div>
  )
}
