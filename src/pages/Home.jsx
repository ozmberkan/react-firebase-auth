import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full mt-12 flex justify-center items-center gap-x-5'>
        <Link to="/register" className='bg-orange-500 p-2 rounded-md text-orange-100'>Kayıt Ol</Link>
        <Link to="/login" className='bg-orange-500 p-2 rounded-md text-orange-100'>Giriş Yap</Link>
    </div>
  )
}
