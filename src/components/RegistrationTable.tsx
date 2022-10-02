import { NextPage } from "next";
import { trpc } from "../utils/trpc";

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
      <table className="border-collapse">
        <thead className="text-dark-blue font-roboto-regular h-12">
          <tr>
            <th></th>
            <th className="border-x-[1px] border-mid-blue">NOME</th>
            <th className="border-x-[1px] border-mid-blue">E-MAIL</th>
            <th className="border-x-[1px] border-mid-blue">NASCIMENTO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {data?.pages.map(page =>
            page.registrations.map(registration => {
              return (
                <tr key={registration.id} className="h-12 border-t-[1px] border-mid-blue text-light-gray">
                  <td className="w-20 text-dark-blue font-roboto-light">1</td>
                  <td className="border-x-[1px] border-mid-blue w-48 text-left p-2">{registration.name}</td>
                  <td className="border-x-[1px] border-mid-blue w-48">{registration.email}</td>
                  <td className="border-x-[1px] border-mid-blue w-48">{registration.birthDate}</td>
                  <td className="w-48">{registration.phoneNumber}</td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="mt-8 bg-dark-blue text-white p-2 w-48"
      >
        {isFetchingNextPage
          ? "Carregando mais..."
          : hasNextPage
          ? "Carregar mais"
          : "Não há mais cadastros"}
      </button>
    </div>
  )
}

export default RegistrationTable
