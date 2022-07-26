import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact.jsx'

const contacts = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz' },
  { src: 'https://links.papareact.com/kxk', name: 'Elon Mask' },
  { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },
  { src: 'https://links.papareact.com/snf', name: 'Mark Zuckerberg' },
  { src: 'https://links.papareact.com/d0c', name: 'Harry Portter' },
  { src: 'https://links.papareact.com/6gg', name: 'The Queen' },
  { src: 'https://links.papareact.com/r57', name: 'James Bond' }
]


const Widgets = ({ users }) => {

  

  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>
      {users.map((contact, i) => (
      <Contact key={i} contact={contact} />
      ))}
    </div>
  )
}

export default Widgets
