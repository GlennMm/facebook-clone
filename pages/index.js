import Head from 'next/head'
import Header from '../components/Header'

import Sidebar from '../components/Sidebar.jsx'
import LoginPage from '../components/LoginPage'
import Feed from '../components/Feed.jsx'
import Widgets from '../components/Widgets.jsx'

import { getSession } from 'next-auth/react'

export default function Home({ session, posts, users, stories }) {

  if (!session) return <LoginPage />;

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'> 
      <Head>
        <title>Glenn - Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='flex'>
        
        {/* Sidebar */}
        <Sidebar />
          
        {/* Feed */}
        <Feed posts={posts} stories={stories} />

        {/* Widgets */}
        <Widgets users={users} />

      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  
  const session = await getSession(context)
  
  const people = await fetch('https://randomuser.me/api/?results=10').then(async res => await res.json())

  const stories = await fetch('https://reqres.in/api/users?per_page=4').then(async res => await res.json())


  return {
    props: {
      session,
      users: people.results.map(p => ({ id: p.id.value, name: `${p.name.first} ${p.name.last}`, src: p.picture.thumbnail })),
      stories: stories.data.map(story => ({ id: story.id, src: story.avatar, profile: story.avatar }))
    }
  }
}

