"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export default function register() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  } 

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('http://localhost:4444/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
    const data = await res.json()

    if (data.success === false) {
      setError(data.message)
      setLoading(false)
      return
    }
    setLoading(false)

    console.log('User Success', formData);

  }
  

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'loading...' : 'Register' }
        </button>
      </form>
      <div className='flex justify-center gap-3 mt-5'>Have an account?
        <Link href='/login'>
        <span className='text-blue-700'>Login</span>
        </Link>
      </div>
    </div>
  )
}
