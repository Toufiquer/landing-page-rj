import { Button } from '@/components/ui/button'
import { baseData } from '../file'
import GreenBox from '../greenBox'
import WhiteBox from '../WhiteBox'
import Link from 'next/link'

/*
|-----------------------------------------
| setting up Box6 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
const Box6 = () => {
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
    <main>
      <GreenBox>
        <div className="text-center gap-4 flex flex-col items-center justify-center">
          <WhiteBox>
            <p>{baseData.box6.description1}</p>
          </WhiteBox>

          <Link href={'/#payment-form'} passHref onClick={handleClick}>
            <Button
              type="button"
              className="font-bold max-w-[180px] cursor-pointer"
              variant={'outline'}
            >
              {baseData.box6.priceText}
            </Button>
          </Link>
        </div>
      </GreenBox>
    </main>
  )
}
export default Box6
