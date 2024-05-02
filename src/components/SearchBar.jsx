async function SearchBar() {
  return (
    <form action='' className=''>
      <input
        type='search'
        placeholder='Search...'
        className='rounded-lg p-2 placeholder:p-2 bg-bgPrimary border border-muted text-accent placeholder-muted hover:border-accent hover:bg-bgTertiary focus:bg-bgTertiary w-full duration-300'
      />
    </form>
  )
}
export default SearchBar
