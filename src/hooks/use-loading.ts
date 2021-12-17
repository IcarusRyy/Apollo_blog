import { useState, useCallback } from 'react'
import useMountState from './use-mount-state'

const useLoading = <P extends (...args: any[]) => Promise<any>>(
  returnPromiseFunc: P,
): [boolean, P] => {
  const [loading, setLoading] = useState<boolean>(false)
  const componentRef = useMountState()
  // 返回的是卸载变成false,初始或更新是true的值
  const execute = useCallback(
    (...args: any[]) => {
      setLoading(true)
      return returnPromiseFunc(...args).finally(() => {
        componentRef.current && setLoading(false)
      })
    },
    [returnPromiseFunc, componentRef],
  )
  // loading一开始是false,请求的时候true,请求完成false
  // execute执行的话，走过finally,还能把返回的内容传给then吗？
  // componentRef的作用是什么？
  return [loading, execute as P]
}

export default useLoading
