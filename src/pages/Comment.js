import React, { useState } from 'react'
import '../styles/comments.css'
import { db } from '../configs/firebase';
import {collection, addDoc} from 'firebase/firestore'

const Comment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitComment = async (e) => {
    e.preventDefault();
    const commentRef = collection(db, "comments");
    try{
      const postComment = await addDoc(commentRef, {name: name, email: email, message: message});
      setName("");
      setEmail("");
      setMessage("");
      console.log(postComment);
    }catch(err){
      console.error(err);
    }
  }
  return (
    <div className='commentscontainer'>
      <section>
        <h4>Customer Comments</h4>
      </section>
      <section className='leavecomment'>
        <h3><strong>Leave a comment</strong></h3>
        <div className='nameemail'>
          <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <textarea rows='8' style={{width: '50%', paddingLeft: '20px'}} placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button style={{width: '15%', height: '40px', borderRadius: '20px'}} onClick={(e)=>submitComment(e)}>Post Comment</button>
      </section>
    </div>
  )
}

export default Comment