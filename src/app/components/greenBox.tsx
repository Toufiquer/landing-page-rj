/*
|-----------------------------------------
| setting up GreenBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
const GreenBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="py-12 flex items-center justify-center rounded-lg bg-blue-400 max-w-3xl w-full min-h-[150px]">
      {children}
    </main>
  )
}
export default GreenBox
