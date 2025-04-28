/*
|-----------------------------------------
| setting up Box9 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
import { useGetDataQuery } from '@/zustand/useBoxStore'
const Box9 = () => {
  const { data: baseData } = useGetDataQuery({ page: 1, limit: 20 })
  console.log('Box10', baseData)
  return <main>Box9</main>
}
export default Box9
