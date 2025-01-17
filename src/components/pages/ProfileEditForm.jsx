import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SaveIcon } from '@heroicons/react/outline'

// displays all of the user's detail to be edited via form
// controlled form in that the user can choose what to edit

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function ProfileEditForm({
  currentUser: { name, email, password, id },
  setCurrentUser,
}) {
  const [form, setForm] = useState({
    name,
    email,
    password,
  })
  const navigate = useNavigate()
  const editFormSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.put(`${serverUrl}/api-v1/users/${id}`, form)
      const { token } = res.data
      localStorage.setItem('jwt', token)
      const decoded = jwt_decode(token)
      setCurrentUser(decoded)
      navigate('/profile')
      console.log('DID IT WORK? IDK')
    } catch (err) {
      console.warn('watch out its an error for edit form', err)
    }
  }
  return (

    <div className='h-screen bg-gray-100 flex flex-col justify-center items-center'>
      <div className='mb-6 relative rounded-xl shadow-lg border-gray-300 w-80 pt-6 pb-5 flex flex-col items-center bg-gray-200'>
        <h2 className='font-bold underline underline-offset-8 text-sky-900'>

          Edit Your Profile
        </h2>
        <form
          onSubmit={editFormSubmit}
          className="w-64 flex flex-col gap-2 mt-5 mb-5 bg-gray-200"
        >
          <label
            htmlFor="name"
            className="text-center text-sky-900 font-semi-bold"
          >
            Name:{' '}
          </label>
          <input
            className="w-full rounded border bg-gray-100 p-2 text-xs font-bold text-center"
            type="text"
            id="name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <label
            htmlFor="email"
            className="text-center text-sky-900 font-semi-bold"
          >
            Email:{' '}
          </label>
          <input
            className="w-full rounded border bg-gray-100 p-2 text-xs font-bold text-center"
            type="text"
            id="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })} />

          <label
            htmlFor="password"
            className="text-center text-sky-900 font-semi-bold"
          >
            Password:{' '}
          </label>
          <input
            className="w-full rounded border bg-gray-100 p-2 text-xs font-bold text-center"
            type="password"
            id="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })} />

          <div className='flex justify-center'>
          <button

            type='submit'
            className='shadow-lg transition ease-in-out delay-150 bg-purple-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 flex gap-x-3 row-reverse rounded-lg text-base text-white font-bold p-2 mt-2'>
            Submit Changes <SaveIcon className='h-5 w-5 text-white'/>

          </button>
          </div>
        </form>


        <div className='flex justify-center'>
          <a href='/profile'>
            <button className='shadow-lg transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 flex row-reverse rounded-lg text-base text-white font-bold p-2'>
              Cancel
            </button>
          </a>
        </div>

      </div>


    </div>
  )
}
