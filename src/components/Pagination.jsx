'use client'
import { useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
function Pagination({ currentPage = 1, totalPages = 12 }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )
  const page = searchParams.get('page')

  return (
    <div className='flex flex-col gap-1 pb-3'>
      <div className='flex gap-6'>
        <button
          onClick={() =>
            router.push(
              `${pathname}?${createQueryString('page', Number(page) - 1)}`
            )
          }
          className='p-2 border border-[#a8b3cf] rounded-lg text-sm text-[#a8b3cf] hover:text-[#525866]'
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            router.push(
              `${pathname}?${createQueryString('page', Number(page) + 1)}`
            )
          }}
          className='p-2 border border-[#a8b3cf] rounded-lg text-sm text-[#a8b3cf] hover:text-[#525866]'
          disabled={page >= totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
export default Pagination
