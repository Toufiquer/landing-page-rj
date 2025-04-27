import GreenBox from './greenBox'

/*
|-----------------------------------------
| setting up LandingPage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
const LandingPage = () => {
  return (
    <main className="p-12 flex flex-col gap-2 items-center justify-center">
      <GreenBox>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-yellow-300 pb-4">
            Bangla IT E-Book
          </h2>

          <p className="w-full bg-white text-black p-4 py-2 rounded-lg">
            Bangla LandingPage
          </p>
        </div>
      </GreenBox>
      <GreenBox>
        <div className="text-center">
          <p className="w-full bg-white text-black p-4 py-2 rounded-lg">
            Bangla LandingPage
          </p>
        </div>
      </GreenBox>
    </main>
  )
}
export default LandingPage
