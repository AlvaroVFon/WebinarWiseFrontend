'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
function Pagination({ currentPage = 1, totalPages = 12, className }) {
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
    <div className={`${className} flex flex-col gap-1 pb-3`}>
      <p className='text-xs text-center p-2 text-muted'>
        Page <span className='text-accentDarker'>{currentPage}</span> of{' '}
        <span className='text-accentDarker'>{totalPages}</span>
      </p>
      <div className='flex gap-6 items-center'>
        <Link
          href={`${pathname}?${createQueryString(
            'page',
            totalPages - (totalPages - 1)
          )}`}
          className='hover:scale-110 duration-100'
        >
          <Image
            src='/firstPage.svg'
            width={25}
            height={25}
            alt='first page'
          />
        </Link>
        <button
          onClick={() =>
            router.push(
              `${pathname}?${createQueryString('page', Number(page) - 1)}`
            )
          }
          className='p-2 border border-accentDarker rounded-lg text-sm text-accentDarker hover:text-accent hover:border-accent duration-300'
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
          className='p-2 border border-accentDarker rounded-lg text-sm text-accentDarker hover:text-accent hover:border-accent duration-300'
          disabled={page >= totalPages}
        >
          Siguiente
        </button>
        <Link
          href={`${pathname}?${createQueryString('page', totalPages)}`}
          className='hover:scale-110 duration-100'
        >
          <Image
            src='/lastPage.svg'
            width={25}
            height={25}
            alt='last page'
          />
        </Link>
      </div>
    </div>
  )
}
export default Pagination
