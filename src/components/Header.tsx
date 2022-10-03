import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Circle } from "phosphor-react"

import headerDesktop from "../../public/images/header-desktop.jpg"
import in8Logo from "../../public/logos/resized-in8.svg"

const Header: NextPage = () => {
  return (
    <>
    <Head>
      <title>IN8 Estágio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="relative h-screen">
      <Image src={headerDesktop} alt=""  />
      <div className="absolute left-0 top-0 px-44 pt-8">
        <div className="flex flex-row justify-between">
          <Image src={in8Logo} alt="" />
          <nav className="font-roboto-regular text-white text-end ml-[700px]">
            <div className="flex flex-row items-center gap-2">
              <a href="#registration-form" className="hover:underline">Cadastro</a>
              <Circle weight="fill" size={8}/>
              <a href="#registration-list" className="hover:underline">Lista</a>
              <Circle weight="fill"size={8}/>
              <a href="#about" className="hover:underline">Sobre mim</a>
            </div>

          </nav>
        </div>
      </div>
      <div className="absolute left-0 top-44 text-white pl-44">
        <h1 className="text-8xl font-helvetica">ESTÁGIO</h1>
        <h2 className="text-4xl font-helvetica">PROVA DE SELEÇÃO</h2>
      </div>
    </div>
    </>
  )
}

export default Header