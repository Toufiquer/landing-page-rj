/*
|-----------------------------------------
| setting up HomeButton for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: landing-page, April, 2025
|-----------------------------------------
*/

import Link from 'next/link'

const HomeButton = () => {
  return (
    <Link href="/" className="mx-auto py-8">
      Home
    </Link>
  )
}
export default HomeButton
