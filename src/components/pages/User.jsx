// displays a user's profile to a logged in user

// if it is somehow currentUser and the profile id is the same, redirect to their own profile page

import { useState, useEffect } from 'react'
import axios from 'axios'
import { PhotographIcon } from '@heroicons/react/outline'
import { Link, useParams } from 'react-router-dom'
import avatarIcon from '../../images/avataricon.png'
import PictureDetails from '../PictureDetails'

export default function User() {
  // state for the secret message for user priv data
  const [userProfile, setUserProfile] = useState({
    pictures: [],
  })
  const { id } = useParams()

  const serverUrl = process.env.REACT_APP_SERVER_URL

  // useEffect for getting the user data and checking auth
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api-v1/users/${id}`)
        setUserProfile(res.data)
        // setPictures(res.data.pictures)
        console.log(res.data)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchUser()
    // eslint-disable-next-line
  }, [id])

  const allUserPictures = userProfile.pictures.map(picture => {
    return (
      <Link to='/picture/:id' key={picture._id}>
        <PictureDetails picture={picture} />
      </Link>
    )
  })

  return (
    <div>
      <div className='h-fit mt-10 bg-white flex flex-col justify-center items-center'>
        <div className='bg-gray-100 rounded-xl mb-5 border-gray-300 w-200 p-10 flex flex-col items-center shadow-lg'>
          <h1 className='font-bold'>{userProfile.name}</h1>
          <img
            className='h-40 w-40 object-cover rounded-full'
            src={avatarIcon}
            alt='profileplacholder'
          />

          {/* <div className='mt-10 flex flex-col justify-center items-center'>
            <h2 className='font-bold underline underline-offset-4'>
              {' '}
              User bio{' '}
            </h2>
            <h3>{msg}</h3>
          </div> */}
        </div>
      </div>

      {/* <div className='bg-gray-100 rounded-xl mb-3 mx-5 p-5 flex flex-col items-center shadow-lg'>
        <h1 className='font-bold text-center underline underline-offset-8 mb-3'>
          {' '}
          Your Posts{' '}
        </h1>
      </div> */}

      {allUserPictures}

      <div className='grid grid-cols-3'>
        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>
      </div>
    </div>
  )
}