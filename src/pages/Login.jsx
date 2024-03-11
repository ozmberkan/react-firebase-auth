import React from 'react'
import { useState } from 'react'
import { login } from '../firebase'

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async e => {
        e.preventDefault()
        const user = await login(email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='max-w-xl mx-auto flex flex-col gap-y-5 mt-6'>
                <div>
                    <label>E-Posta</label>
                    <input type="text" placeholder='you@example.com' className="block w-full rounded-md border-0 py-1.5 px-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none " value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Parola</label>
                    <input type="password" placeholder='***' className="block w-full rounded-md border-0 py-1.5 px-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none " value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button disabled={!email || !password} className='p-3 bg-indigo-700 text-indigo-100 w-1/3 rounded-md cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-default' type='submit'>Giriş Yap</button>
            </form>
        </div>
    )
}
