'use client'
/*
|-----------------------------------------
| setting up LandingPage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
import { CustomCarousel } from './CustomCarousel'
import GreenBox from './greenBox'
import ImageBox from './ImageBox'
import SummitForm from './UsersForm'
import WhiteBox from './WhiteBox'

const LandingPage = () => {
  return (
    <main className="p-12 flex flex-col gap-2 items-center justify-center">
      <GreenBox>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-yellow-300 pb-4">
            Bangla IT E-Book
          </h2>
          <WhiteBox>
            <p> Bangla LandingPage</p>
          </WhiteBox>
        </div>
      </GreenBox>
      <ImageBox />
      <GreenBox>
        <WhiteBox>
          <p>Bangla LandingPage</p>
        </WhiteBox>
      </GreenBox>
      <div className="py-4">
        <WhiteBox>
          <p>Bangla LandingPage</p>
        </WhiteBox>
      </div>
      <div className="py-4">
        <CustomCarousel />
      </div>
      <GreenBox>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white pb-4">
            Bangla IT E-Book
          </h2>
          <WhiteBox>
            <p> Bangla LandingPage</p>
          </WhiteBox>
        </div>
      </GreenBox>
      <div className="py-4">
        <WhiteBox>
          <p> Bangla LandingPage</p>
        </WhiteBox>
      </div>
      <div className="py-4 pt-12 w-full  max-w-3xl">
        <SummitForm />
      </div>
    </main>
  )
}
export default LandingPage
