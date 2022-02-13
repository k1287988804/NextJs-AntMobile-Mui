import { GlobalContext, UPDATE_TITLE } from "@/context/global"
import { useRouter } from "next/router"
import { FC, useContext, useEffect, useState } from "react"

const Bottom: FC = (props: any) => {
	const [key, setKey] = useState<number>(0)
	const texts = ["首页", "消息", "通讯录", "设置"]
	const paths = ["/Home", "/Message", "/Contract", "/Setting"]
	const router = useRouter()

	const { titleDispatch } = useContext(GlobalContext)

	useEffect(() => {
		const Index = paths.findIndex(x => location.pathname.includes(x.replace('/','')))
		setKey(Index === -1 ? 0 : Index)
	}, [])
	
	const redirectTo = (e: any) => {
		const path = e.target.getAttribute('id').replaceAll('+', '') || "/Home"
		titleDispatch({type: UPDATE_TITLE ,title: texts[paths.findIndex(x => x === path)]})
		router.push(path)
	}

	return (
		<nav className="mui-bar mui-bar-tab" onClick={redirectTo}>
			<a className={["mui-tab-item", key === 0 ? "mui-active" : null].join(" ")} id={paths[0]}>
				<span className="mui-icon mui-icon-home" id={paths[0] + '+'}></span>
				<span className="mui-tab-label" id={paths[0] + '++'}>{texts[0]}</span>
			</a>
			<a className={["mui-tab-item", key === 1 ? "mui-active" : null].join(" ")} id={paths[1]}>
				<span className="mui-icon mui-icon-email" id={paths[1] + '+'}></span>
				<span className="mui-tab-label" id={paths[1] + '++'}>{texts[1]}</span>
			</a>
			<a className={["mui-tab-item", key === 2 ? "mui-active" : null].join(" ")} id={paths[2]}>
				<span className="mui-icon mui-icon-contact" id={paths[2] + '+'}></span>
				<span className="mui-tab-label" id={paths[2] + '++'}>{texts[2]}</span>
			</a>
			<a className={["mui-tab-item", key === 3 ? "mui-active" : null].join(" ")} id={paths[3]}>
				<span className="mui-icon mui-icon-gear" id={paths[3] + '+'}></span>
				<span className="mui-tab-label" id={paths[3] + '++'}>{texts[3]}</span>
			</a>
		</nav>
	)
}

export default Bottom