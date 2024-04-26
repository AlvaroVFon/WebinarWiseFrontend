'use client'
import Image from 'next/image'
import Link from 'next/link'
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
      <p className='text-xs text-center p-2 text-[#525866]'>
        Page <span className='text-[#707789]'>{currentPage}</span> of{' '}
        <span className='text-[#707789]'>{totalPages}</span>
      </p>
      <div className='flex gap-6 items-center'>
        <Link
          href={`${pathname}?${createQueryString(
            'page',
            totalPages - (totalPages - 1)
          )}`}
          className='hover:scale-110 duration-100'
        >
          <Image src='/firstPage.svg' width={25} height={25} />
        </Link>
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
        <Link
          href={`${pathname}?${createQueryString('page', totalPages)}`}
          className='hover:scale-110 duration-100'
        >
          <Image src='/lastPage.svg' width={25} height={25} />
        </Link>
      </div>
    </div>
  )
}
export default Pagination
