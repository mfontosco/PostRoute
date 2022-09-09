import React, { useEffect, useState } from 'react'
import styles from './UpdatePost.module.css'
import { useParams,Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Button from '../Button/Button'
import { getSinglePostActions } from '../../Redux/Actions/postActions'



const SinglePost = ()=>{
    const dispatch = useDispatch()
     const {id} =useParams()

     const {loading,success,error,post} =useSelector((state)=>state.getPost)

     useEffect(()=>{

   dispatch(getSinglePostActions(id))

     },[dispatch])

    return(
<div>
    {
    loading? (<h3>loading</h3>):success &&(<div>
        <p className={styles.title}>{post.title}</p>
    <p className={styles.body}>{post.body}</p>
    <Link to={`/posts/${post._id}/edit`}> <Button text='edit' /></Link>
    <Button text='delete' />
    <Link to={`/posts/${post._id}`}> <Button text='view' /></Link>
    </div>)
    }
</div>
    )
}

export default SinglePost