/*
|-----------------------------------------
| setting up ImageBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/

import Image from 'next/image'

const ImageBox = () => {
  return (
    <main className="py-12">
      <div className="h-[280px] w-full max-w-3xl relative mx-auto mb-2">
        <Image
          src="https://i.ibb.co.com/PGXYXwTq/img.jpg"
          alt="Nagad logo"
          height={280}
          width={960}
          objectFit="cover"
        />
      </div>
    </main>
  )
}
export default ImageBox
