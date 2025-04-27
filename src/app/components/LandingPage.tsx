/*
|-----------------------------------------
| setting up LandingPage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/

'use client'

import ImageBox from './ImageBox'

import Box1 from './render-box/Box1'
import Box2 from './render-box/Box2'
import Box3 from './render-box/Box3'
import Box4 from './render-box/Box4'
import Box5 from './render-box/Box5'
import Box6 from './render-box/Box6'
import Box7 from './render-box/Box7'

import UsersForm from './UsersForm'

const LandingPage = () => {
  return (
    <main className="p-12 flex flex-col gap-2 items-center justify-center">
      <Box1 />
      <ImageBox />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Box6 />
      <Box7 />

      <div className="py-4 pt-12 w-full  max-w-3xl">
        <UsersForm />
      </div>
    </main>
  )
}
export default LandingPage
