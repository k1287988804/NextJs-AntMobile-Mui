import React, { FC, useContext } from 'react'
import { GlobalContext } from '@/context/global'
import { NavBar, Toast } from 'antd-mobile'

import styles from '../../styles/Main.module.scss'
import Bottom from '@/components/Bottom'

const back = () => {
	const paths = ["/Home", "/Message", "/Contract", "/Setting"]
	const Index = paths.findIndex(x => location.pathname === x)
	// 不知道为啥有警告
	Index === -1 ? (window.history.back(-1)) : null
	// Toast.show({
	// 	content: '点击了返回区域',
	// 	duration: 1000,
	// })
}

const BasicLayout: FC = ({children}) => {

	const { title } = useContext(GlobalContext)

	return <>
		<div className={styles.app}>
			<div className={styles.top}>
				<NavBar onBack={back} >{title}</NavBar>
			</div>
			<div className={styles.body}>
				{children}
			</div>
			<div id="footer" className={styles.bottom}>
				<Bottom />
			</div>
		</div>
	</>
}

export default BasicLayout