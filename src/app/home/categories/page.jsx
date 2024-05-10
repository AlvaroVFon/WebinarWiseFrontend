import api from '@/lib/api/WebinarWiseApi'
import CategoryCard from '@/components/CategoryCard'
async function CategoriesPage() {
  const categories = await api.getCategories()
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 4xl:grid-cols-6 gap-y-10  place-items-center min-h-screen p-6'>
      {categories.results.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
}
export default CategoriesPage
