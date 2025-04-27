/*
|-----------------------------------------
| setting up Box5 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
import { CustomCarousel } from '../CustomCarousel'
import { baseData } from '../file'
import WhiteBox from '../WhiteBox'

const Box5 = () => {
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
