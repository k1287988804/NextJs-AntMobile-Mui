import { useGetContractById, useGetId } from '@/providers/contract'
import React, { useEffect } from 'react'

const Contract = () => {

	const { data: user } = useGetId()
	const { data: contract } = useGetContractById(user.id)

	return <div>
		<span>{contract}</span>
	</div>
}

export default Contract