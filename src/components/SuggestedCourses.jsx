import CourseCard from './CourseCard'
import GridWrapper from './GridWrapper'
function SuggestedCourses({ courses }) {
  const randomCourses = courses.sort(() => Math.random() - 0.5).slice(0, 5)
  return (
    <GridWrapper>
      {randomCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </GridWrapper>
  )
}
export default SuggestedCourses
