import '../styles/globals.css'
import { IGlobalContext, GlobalContext, titleReducer } from '@/context/global'
// import type { AppProps } from 'next/app'
import { PullToRefresh } from 'antd-mobile'
import remConfig from '@/utils/remConfig'
import { safeJsonParse } from '@/utils/json'
import App, { AppProps } from 'next/app'
import BasicLayout from '@/components/BasicLayout'
import React, { createContext, Fragment, useEffect, useReducer, useState } from 'react'

React.useLayoutEffect = useEffect

const MyApp = ({ Component, pageProps, i18n, locales, router, ...contextValue }: AppProps & IGlobalContext) => {

  const [local, setLocal] = useState<string>('')
  const [user, setUser] = useState<IUser | null>(null)

  const [title, titleDispatch] = useReducer(titleReducer, "首页")

  const changeLocale = (key: string) => {
    window.localStorage.setItem('locale', key);
    setLocal(key);
  }

  const stUser = (user: IUser) => {
    window.localStorage.setItem('user', JSON.stringify(user));
    setUser(user)
  }

  const removeUser = () => {
    window.localStorage.setItem('user', '');
    setUser(null)
  }

  const init = () => {
    // rem适配
    remConfig(375, 100)
    // 解决tabBar浮起问题
    const oHeight = document.documentElement.clientHeight
    window.onresize = function(){
      if(document.documentElement.clientHeight < oHeight){
        document.querySelector("#footer")!.style.display = "none"
      }else{
        document.querySelector("#footer")!.style.display = "block"
      }
    } 
  }

  useEffect(() => {init()}, [])

  return <GlobalContext.Provider
            value={{
              ...contextValue,
              i18n,
              locale: local || router.locale,
              locales,
              changeLocale: changeLocale,
              user,
              setUser: stUser,
              removeUser: removeUser,
              title,
              titleDispatch
            }}
          >
            <PullToRefresh>
              <BasicLayout {...pageProps}>
                <Component {...pageProps} />
              </BasicLayout>
            </PullToRefresh>
          </GlobalContext.Provider>
}

export default MyApp
