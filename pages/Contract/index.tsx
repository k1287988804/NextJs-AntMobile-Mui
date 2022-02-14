import { useGetContractById, useGetId } from '@/providers/contract'
import { httpProvider } from '@/providers/http'
import { Button, Space } from 'antd-mobile'
import React, { useEffect } from 'react'

const Contract = () => {

	const spanStyle = { height: '40px', width: '100vw', textAlign: 'center', lineHeight: '40px' }

	const { data: user } = useGetId()
	// 在拿到user.id之后再进行请求
	const { data: contract, mutate } = useGetContractById(user.id)

	// 修改数据并重新获取
	const dianwo = async () => {
		await httpProvider.put('/contract/put')  
		mutate()
	}

	return <div>
		<div style={spanStyle}>{contract}</div>
		<Button onClick={() => dianwo()} style={{position: 'relative', transform: 'translateX(-50%)', left: '50%'}}>点我</Button>
	</div>
}

export default Contract