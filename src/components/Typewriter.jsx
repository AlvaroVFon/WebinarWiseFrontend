import styles from '@/styles/typewriter.module.css'
function Typewriter() {
  return (
    <div className=''>
      <p className='text-[70px] flex p-3'>
        Learn how to
        <span className={`${styles.typewriter} ${styles.line}`}></span>
      </p>
    </div>
  )
}
export default Typewriter
