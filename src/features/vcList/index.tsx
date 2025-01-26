import { VCListItem, VCListItemSkeleton } from "./VCListItem"
import { Cards } from '../../domain/graphql/index';

interface Props {
  items: Cards[]
}

export const VCList = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
      {
        items.map((data, index) => (
          <VCListItem data={data} key={index} />
        ))
      }
    </div>
  )
}

export const VCListSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
      {
        Array(5).fill(0).map((_, index) => (
          <VCListItemSkeleton key={index} />
        ))
      }
    </div>
  )
}