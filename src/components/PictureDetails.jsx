// *user looking at the picture that isnt the current user*

// display the details of a single picture (picture, caption)
// edit inline caption of picture // MAKE SURE THAT THE PICTURE BELONGS TO CURRENTUSER

// display all of the comments on the picture

// needs a comment form
// inline edit input for editing the comment

import { useState } from 'react'
import PictureModal from './PictureModal'
import { ChatAltIcon } from '@heroicons/react/outline'

export default function PictureDetails({
  picture: { cloudId, caption },
  userProfile,
  picture,
  userId,
  setUserProfile,
  currentUser,
  blurToggle,
  setBlurToggle,
}) {
  const [modalToggle, setModalToggle] = useState(false)

  return (

    <div>
      <div className="mt-10 mx-10 mb-6">

        <div className={blurToggle ? 'blur ' : null}>
          <img
            className='bg-black shadow-2xl rounded-xl'
            src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_450,h_250,c_scale/${cloudId}.png`}
            alt='cloudId'
          />
          <p className='pt-4 font-bold text-center'>{caption}</p>
        <div className='flex flex-row-reverse'>
          <button onClick={() => {
              setModalToggle(!modalToggle)
              setBlurToggle(!blurToggle)
            }} className='shadow-lg bg-orange-300 rounded-lg p-2 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'> 
               <ChatAltIcon className='justify-center h-8 w-8 text-white ease-in-out delay-100 hover:text-purple-400 hover:scale-110 duration-300' />
            </button>
        </div>
        </div>

        {modalToggle ? (
          <PictureModal
            blurToggle={blurToggle}
            setBlurToggle={setBlurToggle}
            setModalToggle={setModalToggle}
            modalToggle={modalToggle}
            name={userProfile.name}
            picture={picture}
            currentUser={currentUser}
            userId={userId}
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        ) : null}
      </div>
    </div>
  )
}
