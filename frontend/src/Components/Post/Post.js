import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './Post.module.css'
import { Link } from 'react-router-dom'
import { createPostActions,deletePostActions,getPostsActions } from '../../Redux/Actions/postActions'
import { CREATE_POST_RESET, UPDATE_POST_RESET } from '../../Redux/Constants/postConstants'
import Spinner from '../Spinner/Spinner'
import Message from '../Message/Message'
import Modal from '../Modal/Modal'
import { DELETE_POST_RESET } from '../../Redux/Constants/postConstants'


const Post = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        title:'',
        body:'',
    })

    const {loading, error, success, post} = useSelector((state)=> state.createPost)
    const {success:successDelete} = useSelector((state)=>state.deletePost)
    
    const { success:postsSuccess, posts} = useSelector((state)=>state.getPosts)
    
    const changeHandler= (e)=>{
        const {name, value} = e.target;

        setState({
            ...state,
            [name]:value
        })
    }

    useEffect(()=>{
        if(successDelete){
            dispatch({type:DELETE_POST_RESET})
            dispatch(getPostsActions())
        }else{
            dispatch(getPostsActions())
        }
           

        
    },[dispatch,successDelete])
    console.log(posts)
   
    const submitHandler= (e)=>{
        e.preventDefault()
        if(!state.title || !state.body){
            alert('Provide title and body')
            return
        }
       const {title,body} = state
        console.log(title,body)
       
        dispatch(createPostActions(title,body))


        setState({
            title:"",
            body:'',
        })
    }
    const deleteHandler =(id)=>{
        
        dispatch(deletePostActions(id))

    }
  return (
   <div>
    <div className={styles.posts}>
    {
    posts && posts.length > 0 ? 
    posts.map(post=>
    <div key={post._id} className={styles.post}>
    <p className={styles.title}>{post.title}</p>
    <p className={styles.body}>{post.body}</p>
    <Link to={`/posts/${post._id}/edit`}> <Button text='edit' /></Link>
    <Button text='delete' onClick={()=>deleteHandler(post._id)} />
    <Link to={`/posts/${post._id}`}> <Button text='view' /></Link>
    </div>):<h3>no post found</h3>
    
    }
    </div>
   </div>
    
  )
}

export default Post
