async function SearchBar() {
  return (
    <form action='' className=''>
      <input
        type='search'
        placeholder='Search...'
        className='rounded-lg p-2 placeholder:p-2 bg-bgPrimary border border-muted text-white placeholder-muted hover:border-accent w-full'
      />
    </form>
  )
}
export default SearchBar
