/*
|-----------------------------------------
| setting up Box4 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/

import CountDown from '../CountDown'
import GreenBox from '../greenBox'
import WhiteBox from '../WhiteBox'

import Link from 'next/link'
import { useGetDataQuery } from '@/zustand/useBoxStore'

const Box4 = () => {
  const { data: baseData } = useGetDataQuery({ page: 1, limit: 20 })
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
    <div className="py-4">
      <div className="pb-8">
        <CountDown />
      </div>
      <GreenBox>
        <Link href={'/#payment-form'} onClick={handleClick} passHref>
          <WhiteBox>
            <p>{baseData.box4.description1}</p>
          </WhiteBox>
        </Link>
      </GreenBox>
    </div>
  )
}
export default Box4
