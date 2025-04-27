/*
|-----------------------------------------
| setting up Box2 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/

import Link from 'next/link'
import { baseData } from '../file'
import GreenBox from '../greenBox'
import WhiteBox from '../WhiteBox'

const Box2 = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()

    // Get the target element
    const targetElement = document.getElementById('payment-form')

    if (targetElement) {
      // Scroll smoothly to the element
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <GreenBox>
      <Link href={'/#payment-form'} onClick={handleClick} passHref>
        <WhiteBox>
          <p>{baseData.box2.description1}</p>
        </WhiteBox>
      </Link>
    </GreenBox>
  )
}
export default Box2
