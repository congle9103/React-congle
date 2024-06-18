import { Link, Outlet } from 'react-router-dom'
import { useCount } from '../stories/Count'

const DefaultLayout = () => {
  const {count} = useCount()
  return (
    <>
    <header className='flex justify-around'>
        <div><Link to={'/'}>Home</Link></div>
        <div><Link to={'/Categories'}>Categories</Link></div>
        <div><Link to={'/Blog'}>Blog</Link></div>
        <div className='text-white bg-blue-800 rounded-3xl mt-1 px-2'>{count}</div>
    </header>

    <main className='my-8'>
        <Outlet />
    </main>

    <footer>
        Footer
    </footer>
    </>
  )
}

export default DefaultLayout