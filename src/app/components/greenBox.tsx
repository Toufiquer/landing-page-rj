/*
|-----------------------------------------
| setting up GreenBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
const GreenBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-center justify-center rounded-lg bg-blue-500 max-w-3xl w-full min-h-[50px] p-4">
      {children}
    </main>
  )
}
export default GreenBox
