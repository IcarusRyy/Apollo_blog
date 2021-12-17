import { useRef, useEffect } from 'react'

const useMountState = () => {
  const mountRef = useRef<boolean>(false)
  useEffect(() => {
    // 初始或者更新的时候是true
    mountRef.current = true
    // 卸载变成false
    return () => {
      mountRef.current = false
    }
  })
  return mountRef
}

export default useMountState
