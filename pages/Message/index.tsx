import { httpProvider } from '@/providers/http'
import { Input } from 'antd-mobile'
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { FC } from 'react'
import styles from './Message.module.scss'

type Person = {
	name: string,
	age: number
}

const Message = ({data}: InferGetStaticPropsType<typeof getServerSideProps>) => {
	const bgclist = ['red','blue','green','yellow']
	return <>
		<div className={styles.cards}>
			{(data as Array<Person>).map((item: Person , i: number) => (
				<div className={styles.card} key={item.name} style={{backgroundColor: bgclist[i]}}>
					{item.name}
				</div>
			))}
		</div>
	</>
}

export const getServerSideProps: GetServerSideProps = async () => {
	const res = httpProvider.get('/message', {})
	const data = await res
  
	return {
	  props: {
		data
	  }
	}
  }

export default Message