import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, FlagIcon, HomeIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
import HeaderIcon from '../components/HeaderIcon'
import { signOut, useSession } from 'next-auth/react'

export default function Header() {

  const { data: { user } } = useSession()

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>

      <div className='flex items-center'>
        <Image src='https://links.papareact.com/5me' alt="logo" width={50} height={50} layout="fixed" />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 aspect-square text-gray-600' />
          <input type="text" placeholder='Search facebook' className='hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' />
        </div>
      </div>
      {/* center */}
      <div className='flex justify-center flex-grow'>
        <div className="flex justify-center space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active={true} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />

        </div>
      </div>
     
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image src={user.image} className="rounded-full cursor-pointer shadow-md" width={40} height={40} layout="fixed" alt="" onClick={() => signOut()} />
        <p className="font-semibold pr-3 whitespace-nowrap">{user.name}</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>

    </div>

      )
}

