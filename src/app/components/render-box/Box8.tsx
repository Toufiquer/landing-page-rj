/*
|-----------------------------------------
| setting up Box8 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/
import { useGetDataQuery } from '@/zustand/useBoxStore'
const Box8 = () => {
  const { data: baseData } = useGetDataQuery({ page: 1, limit: 20 })
  console.log('Box10', baseData)
  return <main>Box8</main>
}
export default Box8
