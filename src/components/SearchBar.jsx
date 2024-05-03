'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const page = searchParams.get('page') || 1

  const handleChange = (e) => {
    const title = e.target.value
    router.push(`${pathname}?page=${page}&title=${title}`)
  }
  return (
    <input
      type='search'
      placeholder='Search...'
      name='search'
      onChange={handleChange}
      className='rounded-lg p-2 placeholder:p-2 bg-bgPrimary border border-muted text-accent placeholder-muted hover:border-accent hover:bg-bgTertiary focus:bg-bgTertiary w-full duration-300'
    />
  )
}
export default SearchBar
