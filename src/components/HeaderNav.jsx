import UserPofile from './UserProfile'

function HeaderNav() {
  return (
    <nav className='flex gap-3'>
      <a href='' className='p-3'>
        Cursos
      </a>
      <a href='' className='p-3'>
        Categorías
      </a>
      <a href='' className='p-3'>
        Iniciar sesión
      </a>
      <a href='' className='p-3'>
        Registrarse
      </a>
      <a href=''>
        <UserPofile />
      </a>
    </nav>
  )
}
export default HeaderNav
