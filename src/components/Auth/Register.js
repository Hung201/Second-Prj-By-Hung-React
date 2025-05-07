import { useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { postRegister } from '../../services/apiServices';

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hideShowPassword, setHideShowPassword] = useState(false)
    const navigate = useNavigate()


    const handleRegister = async () => {
        //validate

        // submit apis
        let res = await postRegister(username, email, password);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            navigate('/login')
        }
        if (res && +res.EC !== 0) {
            toast.error(res.EM);
        }
    }

    const handleHideShowPassword = () => {
        setHideShowPassword(!hideShowPassword)
    }
    return (
        <div className="register-container">
            <div className='header'>
                <span>Already have an account?

                </span>
                <button onClick={() => navigate('/login')}>Log in</button>
            </div>
            <div className='title col-md-4 mx-auto'>
                EMT
            </div>
            {/* <div className='welcome col-md-4 mx-auto'>
                Get better data with conversational forms, surveys, quizzes & more.
            </div> */}
            <div className='form-content col-md-4 mx-auto'>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <form>
                        <input
                            type={hideShowPassword === false ? 'password' : 'text'}
                            className='form-control'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className='eye-password-register' onClick={() => handleHideShowPassword()}>
                            {hideShowPassword === false ? <FaRegEye className='' /> : <FaRegEyeSlash />}
                        </div>
                    </form>
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Create my free account</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => navigate('/')}>&#60;&#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}

export default Register