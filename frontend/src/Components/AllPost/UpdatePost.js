import React, { useEffect, useState } from 'react'
import styles from './UpdatePost.module.css'
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Input from '../Input/Input'
import { getSinglePostActions,updatePostActions } from '../../Redux/Actions/postActions'
import { UPDATE_POST_RESET } from '../../Redux/Constants/postConstants'
const AllPost = () => {
  const[title,setTitle] =useState("")
  const [body,setBody]= useState("")
  const {id} =useParams()
  const navigate =useNavigate()

const dispatch =useDispatch()
const {post} = useSelector((state)=>state.getPost)
const {success,error,loading} =useSelector((state)=>state.updatePost)
console.log(id)
console.log(post)
useEffect(()=>{
  if(id){
    
dispatch(getSinglePostActions(id))
  }
  if(success){
    dispatch({type:UPDATE_POST_RESET})
navigate('/posts')
  }
},[navigate,success,id,dispatch])
useEffect(()=>{
  if(post){
    console.log(post.title)
    setTitle(post ? post.title :"")
    setBody(post ? post.body:"")
  }
  
},[post])

const submitHandler = (e)=>{
e.preventDefault()
dispatch(updatePostActions(id,title,body))
}
  return (
    <div>

<form className={styles.form}>
                <Input inputProperties={{
                    type:'text',
                    placeholder:'Enter title',
                    value:title,
                    onChange:(e)=>setTitle(e.target.value)
                }}/>
                <Input inputProperties={{
                    type:'text',
                    placeholder:'Enter body',
                    value:body,
                    onChange:(e)=>setBody(e.target.value)
                }}/>

               
                <button onClick={submitHandler}>{loading?"loading":"Update"}</button>

</form>
    </div>
  )
}

export default AllPost