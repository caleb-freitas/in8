import { NextPage } from "next"
import Image from "next/image"

import footerDesktop from "../../public/images/footer-desktop.jpg"

const Footer: NextPage = () => {
  return (
    <div className="w-full h-full mt-8">
      <Image src={footerDesktop} alt="" />
    </div>
  )
}

export default Footer