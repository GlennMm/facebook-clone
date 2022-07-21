import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import Post from './Post.jsx'


const Posts = () => {

  const postRef = collection(db, 'posts')
  const [posts, loading, error] = useCollection(query(postRef, orderBy("timestamp", "desc")))

  return (
    <div>
      { loading && <p>Loading please wait.</p> }
      { error && <p>Something went wrong can you try reloading the page.</p> }
      { posts && posts.docs.map((post, i) => (
        <Post key={post.id} post={post} />
      )) }
    </div>
  )
}

export default Posts 
