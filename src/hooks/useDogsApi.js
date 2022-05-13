import useSWR from "swr";

function useDogsApi(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const URL = "https://api.thedogapi.com/v1/images/search?limit=1&page=";

  const { data, error } = useSWR(`${URL}${id}`, fetcher, { revalidateOnFocus: false });

  return {
      data: data,
      isLoading: !error && !data,
      isError: error
  };
}

export default useDogsApi;
