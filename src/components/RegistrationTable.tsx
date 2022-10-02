import { NextPage } from "next";
import { trpc } from "../utils/trpc";

const RegistrationTable: NextPage = () => {
  const infiniteRegistrationsQuery = trpc.registration.infiniteRegistrations.useInfiniteQuery(
    { limit: 1 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  )

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = infiniteRegistrationsQuery

  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className=""
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


// <ul>
// {data?.pages.map(page =>
//   page.registrations.map(registration => {
//     return <li key={registration.id}>{registration.name}</li>
//   })
// )}
// </ul>