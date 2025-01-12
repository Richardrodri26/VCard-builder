import { VCard } from "@/components/VCard"
import { vcardDataMock } from "@/mockData"



export const ViewVCardPage = () => {

  const data = vcardDataMock

  return (
    
    <div className="w-full">
      <VCard data={data as any} />
    </div>
  )
}
