'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useRef } from 'react'
function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const category = searchParams.get('category') || ''

  const debounceSearch = useRef()
  const onQueryChange = (e) => {
    if (debounceSearch.current) clearTimeout(debounceSearch.current)
    debounceSearch.current = setTimeout(() => {
      router.push(
        `${pathname}?page=1&search=${e.target.value}&category=${category}`
      )
    }, 500)
  }

  return (
    <input
      type='search'
      placeholder='Search...'
      name='search'
      onChange={onQueryChange}
      className=' hidden sm:flex max-w-lg rounded-lg p-2 placeholder:p-2 bg-bgPrimary border border-muted text-accent placeholder-muted hover:border-accent hover:bg-bgTertiary focus:bg-bgTertiary w-full duration-300'
    />
  )
}
export default SearchBar
