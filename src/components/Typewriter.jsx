import styles from '@/styles/typewriter.module.css'
function Typewriter() {
  return (
    <p className='text-3xl md:text-[50px] text-accent'>
      Learn how to
      <span
        className={`${styles.typewriter} ${styles.line} text-accent`}
      ></span>
    </p>
  )
}
export default Typewriter
