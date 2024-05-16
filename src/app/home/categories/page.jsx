import api from '@/lib/api/WebinarWiseApi'
import CategoryCard from '@/components/CategoryCard'
import GridWrapper from '@/components/GridWrapper'
async function CategoriesPage() {
  const categories = await api.getCategories()
  return (
    <GridWrapper>
      {categories.results.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </GridWrapper>
  )
}
export default CategoriesPage
