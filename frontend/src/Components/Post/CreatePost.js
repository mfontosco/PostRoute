import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './Post.module.css'
import { Link, useNavigate} from 'react-router-dom'
import { createPostActions,deletePostActions,getPostsActions } from '../../Redux/Actions/postActions'
import { CREATE_POST_RESET } from '../../Redux/Constants/postConstants'
import Spinner from '../Spinner/Spinner'
import Message from '../Message/Message'
import Modal from '../Modal/Modal'



const CreatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
        if( success){
            dispatch({type:CREATE_POST_RESET})
            navigate("/posts")
        }
           

        
    },[dispatch,navigate,success])
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
     <div className={styles.container}>
       <div className={styles.left}>
            <h4>Contact us <span style={{color:'green'}}>mstrings@12</span></h4>
            <p><b>Address:</b> No 20, maryland</p>
            <p><b>Phone:</b> =23470673535</p>
            <p><b>Address:</b> No 20, maryland</p>
            <p><b>Phone:</b> =23470673535</p>
            <p><b>Address:</b> No 20, maryland</p>
       </div>
       <div className={styles.right}>
            <form className={styles.form}>
                <Input inputProperties={{
                    type:'text',
                    name:'title',
                    placeholder:'Enter title',
                    value:state.name,
                    onChange:changeHandler
                }}/>


                <textarea col={10} row={30} onChange={changeHandler} name='body' placeholder='Enter message'>

                </textarea>

                {error && (<Message message='dangerMessage'>{error}</Message>)}
                 
                 {loading ? (<Spinner />) : (<div>
                    <Button text='Submit' onClick={submitHandler}/>
                    
                 </div>
                    
                 )}
            </form>
       </div>
       </div>
       </div>
    )
    }
export default CreatePost