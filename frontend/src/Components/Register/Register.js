import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Input from '../Input/Input'
import InputLabel from '../Input/InputLabel'
import styles from './Register.module.css'
import Button from '../Button/Button'
import {   createuserActions} from '../../Redux/Actions/UserActions'
import { useNavigate,Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Message from '../Message/Message'
import Spinner from '../Spinner/Spinner'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [state, setState] = useState({
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]:value
        })
         
    }

    const {loading,success,error,user} = useSelector((state)=>state.createUser)
    const submitHandler = (e)=>{
        console.log('hit')
            e.preventDefault();

            if(!state.email || ! state.password){
                alert('Provide email and password')
                return
            }

            dispatch(createuserActions(state.email, state.password))

            setState({
                email:'',
                password:''
            })
            navigate('/login')

    }
  return (
    <div  className= {styles.formWrapper}>
        <form className= {styles.form}>
            <div className= {styles.inputGroup}>
                <InputLabel title='Email'/>
                <Input 
                inputProperties={{
                        type:'email',
                        name:'email',
                        placeholder:'example@gmail.com',
                        value:state.email,
                        onChange: changeHandler 
                }}
            />
            </div>

            <div className= {styles.inputGroup}>
                <InputLabel title='Password'/>
                <Input 
                inputProperties={{
                        type:'password',
                        name:'password',
                        placeholder:'Password',
                        value:state.password,
                        onChange: changeHandler 
                }}
            />
            </div>

            <div className="action">
                {loading ? (<Spinner />) : (<Button text='Submit' style={{
                    backgroundColor:'black',
                    color:'white',
                }}
                onClick={submitHandler}
                />)}
            </div>
            </form>
            <p><Link to='/login'>Login</Link></p>
                {error && <Message Message="dangerMessage">{error}</Message>}
                {success && (<Modal title='Registration successful'>
                <div className="successfulReg">
                    <p>Thank you for registering <b><Link to='/login'>Login</Link></b></p>
                </div>
        </Modal>)}
            </div>
  )
}

export default Register