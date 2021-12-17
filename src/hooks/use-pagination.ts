import { useState, useCallback } from 'react'
import { PaginationProps } from 'antd/es/pagination'

interface MyPaginationProps extends PaginationProps {
  total: number
  current: number
  pageSize: number
}

export default function usePagination(
  paginationOptions?: PaginationProps,
): [MyPaginationProps, (options: PaginationProps) => void] {
  const [pagination, setPagination] = useState<MyPaginationProps>({
    total: 0,
    current: 1,
    pageSize: 10,
    showSizeChanger: false,
    showQuickJumper: true,
    showTotal(total) {
      return `共${total}条`
    },
    ...paginationOptions,
  })

  // tslint:disable-next-line: react-hooks-nesting
  const handleSetPagination = useCallback(
    (newPaginationOptions?: PaginationProps) => {
      setPagination({ ...pagination, ...newPaginationOptions })
    },
    [pagination],
  )

  return [pagination, handleSetPagination]
}
