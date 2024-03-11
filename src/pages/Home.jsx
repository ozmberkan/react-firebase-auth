import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../firebase'
import { logout as logoutHandle } from '../store/auth';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)


  const handleLogout = async () => {
    await logout()
    dispatch(logoutHandle());
    navigate('/login', {
      replace: true
    })
  }

  if (user) {
    return (
      <div className='max-w-xl mx-auto py-5'>
        <div className='flex gap-x-4 items-center'>
          <h1>Oturumun Açık, <p className='font-mono font-bold'>({user.email})</p></h1>
          <button onClick={handleLogout} className='h-8 rounded px-4 text-sm text-white bg-indigo-700'>Çıkış Yap</button>
        </div>
      </div>
    )
  }


  return (
    <div className='w-full mt-12 flex justify-center items-center gap-x-5'>
      <Link to="/register" className='bg-orange-500 p-2 rounded-md text-orange-100'>Kayıt Ol</Link>
      <Link to="/login" className='bg-orange-500 p-2 rounded-md text-orange-100'>Giriş Yap</Link>
    </div>
  )
}
