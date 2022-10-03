import { NextPage } from "next"
import Image from "next/image"

import footerDesktop from "../../public/images/footer-desktop.jpg"

const Footer: NextPage = () => {
  return (
    <section id="about" className="">
      <Image src={footerDesktop} alt="" />
    </section>
  )
}

export default Footer