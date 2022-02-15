import React, { FC } from 'react'

const Setting: FC = () => {

	type AAA = number | string

	interface AllCodes {
		aaa: AAA,
		bbb: number,
		ccc: number,
		ddd: number
	}

	const allCodes: AllCodes = {
		aaa: '设置',
		bbb: 2,
		ccc: 3,
		ddd: 4
	}

	function func<T>(t: T): T[]{
		return [t]
	}

	const getValue: Function = <T extends Object, K extends keyof T>(t: T, k: K): T[K]  => {
		return t[k]
	}

	return <div>
		{getValue(allCodes, 'aaa')}&nbsp;&nbsp;
		{(func('666') as Array<string>)!.map(x => x)}
	</div>
}

export default Setting