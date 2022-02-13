import React, { FC, useState } from 'react'
import { InfiniteScroll, List } from 'antd-mobile'
import styles from './Home.module.scss'
import { HomeProvider } from '@/providers/home'
import Link from 'next/link'

const Home: FC = () => {
	const [data, setData] = useState<string[]>([])
	const [hasMore, setHasMore] = useState(true)

	const loadMore = async () => {
		const append = await HomeProvider.getList()
		setData(val => [...val, ...append])
		setHasMore(append.length > 0)
	}

	return <>
		<div className="mui-slider">
			<div className="mui-slider-group">
				<div className="mui-slider-item"><a href="#"><img src="/imgs/1.jpg" alt="p1"/></a></div>
				<div className="mui-slider-item"><a href="#"><img src="/imgs/2.jpg" alt="p2"/></a></div>
				<div className="mui-slider-item"><a href="#"><img src="/imgs/3.jpg" alt="p3"/></a></div>
				<div className="mui-slider-item"><a href="#"><img src="/imgs/4.jpg" alt="p4"/></a></div>
			</div>
		</div>
		<div className={styles['function-area']}>
			<div>
				{[1,2,3,4,5,6,7,8].map((item, i) => (i < 4 && <div key={i} className={styles.subDiv}>
					<Link
						href={`/HomeDetail/[id]`}
						as={`/HomeDetail/${item}`}
					>
						<div>{item}</div>
					</Link>
				</div>)).filter(Boolean)}
			</div>
			<div>
				{[1,2,3,4,5,6,7,8].map((item, i) => (i >= 4 && <div key={i} className={styles.subDiv}>
					<div>{item}</div>
				</div>)).filter(Boolean)}
			</div>
		</div>
		<div>
			<List>
				{data.map((item, index) => (
				<List.Item key={index}>{item}</List.Item>
				))}
			</List>
			<InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
		</div>
	</>
}

export default Home