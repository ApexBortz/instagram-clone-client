// display username, and the most recent picture, and profile photo
import React from 'react'
import { MailIcon } from '@heroicons/react/outline'

export default function UserDisplay({ user: { name, pictures, email } }) {
  //change content to caption after wiping DB
  const mostRecentPic = pictures[pictures.length - 1]

  return (
    <div className="static items-center font-sans ease-in-out delay-100 hover:-translate-y-1 hover:text-purple-400 hover:scale-110 duration-300 mt-10">
      <h1 className="text-center font-bold text-xl">{name}</h1>
      <div className="shadow-2xl items-center border bg-gray-300 flex h-full overflow-x-hidden justify-center rounded-3xl p-4 mx-10 ">
        <img className='p-6'
          width="300px"
          src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_310,h_200,c_scale/${mostRecentPic.cloudId}.png`}
          alt="place"
        />
      </div>
    </div>

  )

}
