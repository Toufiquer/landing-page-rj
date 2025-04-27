/*
|-----------------------------------------
| setting up Box1 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/

import { baseData } from '../file'
import GreenBox from '../greenBox'
import WhiteBox from '../WhiteBox'

const Box1 = () => {
  return (
    <GreenBox>
      <div className="text-center">
        {baseData.box1.title1 && (
          <h2 className="text-2xl font-semibold text-yellow-300 pb-4">
            {baseData.box1.title1}
          </h2>
        )}
        {baseData.box1.description1 && (
          <WhiteBox>
            <p>{baseData.box1.description1}</p>
          </WhiteBox>
        )}
      </div>
    </GreenBox>
  )
}
export default Box1
