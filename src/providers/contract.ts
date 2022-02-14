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
	// 如果useSWR第一个参数方法返回null false类型 那么不会执行此hook
	const { data, error, mutate } = useSWR(() => url, async () => await httpProvider.get(url || '', {}))

	return {
		data,
		mutate,
		isLoading: !error && !data,
		isError: error,
	}
}