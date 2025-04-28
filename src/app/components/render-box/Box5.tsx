/*
|-----------------------------------------
| setting up Box5 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
import { useGetDataQuery } from '@/zustand/useBoxStore'
import { CustomCarousel } from '../CustomCarousel' 
import WhiteBox from '../WhiteBox'

const Box5 = () => {
  const { data: baseData } = useGetDataQuery({ page: 1, limit: 20 })
  return (
    <div>
      <WhiteBox>
        <p>{baseData.box5.description1}</p>
      </WhiteBox>
      <div className="py-4">
        <CustomCarousel />
      </div>
    </div>
  )
}
export default Box5
