import { useSession } from "next-auth/react"
import Image from "next/image"
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from "react"
import { db, storage } from '../firebase.js'
import { collection, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'


const InputBox = () => {

  const { data: { user: { image, name, email } } } = useSession()

  const dbInstance = collection(db, 'posts')

  const postRef = useRef(null)
  const fileRef = useRef(null)

  const [img, setImg] = useState(null)


  const save = (e) => {
    e.preventDefault()
    if(!postRef.current.value) return
    addDoc(dbInstance, {
      message: postRef.current.value,
      email,
      name,
      image,
      timestamp: serverTimestamp()
    }).then((doc) => {
        if (img) {
          const storageRef = ref(storage, `post/${doc.id}`)
          uploadString(storageRef, img, 'data_url').then(
            async (snap) => {
              getDownloadURL(snap.ref).then(async (url) => {
                removeImg()
                await updateDoc(doc, { postImage: url })         
              })
            }, 
          )          
        }
        postRef.current.value = ''
      })
  }

  const addImageToPost = (e) => {
    e.preventDefault()
    if (!fileRef.current.value) return
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])   
    }
    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result)
    }
  }

  const removeImg = () => {
    setImg(null)
  }

  return (<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">

      <div className="flex space-x-4 p-4 items-center">
        <Image src={image} alt={name} className="rounded-full" width={40} height={40} />
        <form className="flex flex-1">
          <input type="text" ref={postRef} placeholder={`What's on your mind, ${name}?`} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" />
          <button type="submit" hidden onClick={save} >Submit</button>
        </form>
        {
          img && 
          (<div onClick={removeImg} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <Image src={img} className="h-10 object-contain rounded-md" alt="" />
            <p className="text-xs text-red-500 text-center font-semibold">Remove</p>
          </div>)
        }
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => fileRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo / Video</p>
          <input type="file" ref={fileRef} className="hidden" onChange={addImageToPost} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling / Activity</p>
        </div>
      </div>
    </div>)
}

export default InputBox

