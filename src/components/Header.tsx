import { NextPage } from "next"
import Image from "next/image"

import headerDesktop from "../../public/images/header-desktop.jpg"

const Header: NextPage = () => {
  return (
    <div className="">
      <Image src={headerDesktop} alt="" />
    </div>
  )
}

export default Header