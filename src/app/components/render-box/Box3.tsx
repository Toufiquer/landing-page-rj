/*
|-----------------------------------------
| setting up Box3 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/

import { CustomCarousel } from '../CustomCarousel'
import { baseData } from '../file'
import WhiteBox from '../WhiteBox'

const Box3 = () => {
  return (
    <div className="py-4">
      {baseData.box3.title1 && (
        <WhiteBox>
          <p>{baseData.box3.title1}</p>
        </WhiteBox>
      )}
      <div className="py-4">
        <CustomCarousel />
      </div>
    </div>
  )
}
export default Box3
