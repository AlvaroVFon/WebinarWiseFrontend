import CourseCard from './CourseCard'
function SuggestedCourses({ courses }) {
  const randomCourses = courses.sort(() => Math.random() - 0.5).slice(0, 5)

  return (
    <div className='col-span-full grid md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-10'>
      {randomCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  )
}
export default SuggestedCourses
