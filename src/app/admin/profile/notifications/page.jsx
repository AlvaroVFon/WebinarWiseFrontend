import PreferencesForm from '@/components/PreferencesForm'
import GridWrapper from '@/components/GridWrapper'
import api from '@/lib/api/WebinarWiseApi'
async function NotificationsPage() {
  const categories = await api.getCategories().then((res) => res.results)
  return (
    <GridWrapper>
      <PreferencesForm categories={categories} />
    </GridWrapper>
  )
}
export default NotificationsPage
