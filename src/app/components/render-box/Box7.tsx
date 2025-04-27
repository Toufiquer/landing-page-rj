/*
|-----------------------------------------
| setting up Box7 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
import { baseData } from '../file'
import WhiteBox from '../WhiteBox'

const Box7 = () => {
  return (
    <div className="py-4 max-w-3xl">
      <WhiteBox>
        <p>{baseData.box7.description1}</p>
      </WhiteBox>
    </div>
  )
}
export default Box7
