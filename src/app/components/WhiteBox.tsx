/*
|-----------------------------------------
| setting up WhiteBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
const WhiteBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-200 text-black p-4 py-2 rounded-lg font-bold px-8 text-center">
      {children}
    </div>
  )
}
export default WhiteBox
