import { useGetContractById, useGetId } from '@/providers/contract'
import { httpProvider } from '@/providers/http'
import React, { useEffect } from 'react'

const Contract = () => {

	const { data: user } = useGetId()
	// 在拿到user.id之后再进行请求
	const { data: contract, mutate } = useGetContractById(user.id)

	// 修改数据并重新获取
	const dianwo = async () => {
		await httpProvider.put('/contract/put')  
		mutate()
	}

	return <div>
		<span>{contract}</span>
		<button onClick={() => dianwo()}>点我</button>
	</div>
}

export default Contract