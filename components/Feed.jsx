import Stories from './Stories.jsx'
import InputBox from './InputBox.jsx'
import Posts from './Posts.jsx'

export default function Feed({ posts, stories }) {
  return (
    <div>
      <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto lg:max-w-2xl scrollbar-hide'>
        {/* stories, input box posts */}
        <Stories stories={stories} />

        <InputBox />

        <Posts posts={posts} />

      </div>
    </div>
  )
}

