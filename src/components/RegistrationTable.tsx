import { NextPage } from "next";
import Image from "next/image";
import { trpc } from "../utils/trpc";

import scrollToTop from "../../public/icons/scroll-to-top.svg"

const RegistrationTable: NextPage = () => {
  const infiniteRegistrationsQuery = trpc.registration.infiniteRegistrations.useInfiniteQuery(
    { limit: 4 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  )

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = infiniteRegistrationsQuery

  return (
    <div className="flex flex-col items-center text-center w-full">
      <div className="flex flex-row items-end">
        <table className="border-collapse">
          <thead className="text-dark-blue font-roboto-regular h-12">
            <tr>
              <th></th>
              <th className="border-x-[0.5px] border-mid-blue">NOME</th>
              <th className="border-x-[0.5px] border-mid-blue">E-MAIL</th>
              <th className="border-x-[0.5px] border-mid-blue">NASCIMENTO</th>
              <th>TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {data?.pages.map((page) =>
              page.registrations.map(registration => {
                return (
                  <tr key={registration.id} className="h-12 border-t-[1px] border-mid-blue text-light-gray">
                    <td className="w-20 text-dark-blue font-roboto-light">1</td>
                    <td className="border-x-[0.5px] border-mid-blue w-48 text-left p-2">{registration.name}</td>
                    <td className="border-x-[0.5px] border-mid-blue w-48">{registration.email}</td>
                    <td className="border-x-[0.5px] border-mid-blue w-48">{registration.birthDate}</td>
                    <td className="w-48">{registration.phoneNumber}</td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
        <button
            onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            className="ml-20"
          >
            <Image src={scrollToTop} alt="" />
        </button>
      </div>

      <div className="">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="my-16 bg-dark-blue text-white p-2 w-48"
        >
          {isFetchingNextPage
            ? "Carregando registros..."
            : hasNextPage
            ? "Carregar mais"
            : "Não há mais cadastros"}
        </button>
      </div>

    </div>
  )
}

export default RegistrationTable
