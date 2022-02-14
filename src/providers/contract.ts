import useSWR, { SWRResponse } from "swr";
import { httpProvider } from "./http";

export const useGetId = () => {
	const url = `/id`
	const { data, error, mutate } = useSWR(url, async () => await httpProvider.get(url), {
		fallbackData: {
			id: ''
		}
	})

	return {
		data,
		mutate,
		isLoading: !error && !data,
		isError: error
	}
}

export const useGetContractById = (id: string) => {
	const url = id ? `/contract/${id}` : null
	const { data, error, mutate } = useSWR(() => url, async () => await httpProvider.get(url || '', {}))

	return {
		data,
		mutate,
		isLoading: !error && !data,
		isError: error,
	}
}