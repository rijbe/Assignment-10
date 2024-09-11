import React, { useContext, useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../Firebase/FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
        const navigate = useNavigate()
        const provider = new GoogleAuthProvider()
        const gitProvider = new GithubAuthProvider()

        const handleGithub = () =>{
            signInWithPopup(auth, gitProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
        }
        const handleGoogle = () =>{
            signInWithPopup(auth, provider)
             .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
        }
        const { userLogin} = useContext(AuthContext)
        const [show, setShow] = useState(false)
        const [success, setSuccess] = useState('')
        const [loginError, setLoginError] = useState('')
        const handleLogin = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        setLoginError('')
        setSuccess('')

        if(password.length < 6){
            setLoginError('Password should be at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('Your password must contain at least one uppercase letter');
            return;
        }

        
        userLogin(email, password)
        .then(result => {
            navigate('/')
            console.log(result.user)
            setSuccess('your register is successfully')
            return;
           
        })
        .catch(error => {
            console.log(error.message)
            setLoginError("Your email is valid")
            return;
        })

        

        e.target.reset();
       

    }
    return (
            <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col ">
                        <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text":"password"} placeholder="password" name='password' className="input input-bordered" required /> <span className='text-2xl ml-72 -mt-9' onClick={()=>setShow(!show)}>
                                {
                                show ?
                                    <FaEyeSlash />:<FaEye /> } 
                                    
                                </span>
        
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p>Do not have a Account please?<Link className='text-blue-500' to='/register'>Register</Link></p>
                            </div>
                            <h1 className='text-3xl text-center text-white'>Login With</h1>
                          
                        </form>
                        <div className='grid grid-cols-2 gap-3 mb-4'>
                            <div className="form-control ">
                                <button onClick={handleGoogle} className="btn btn-primary text-white">Google</button>
                            </div>
                           
                            <div className="form-control ">
                                <button className="btn btn-outline btn-accent" onClick={handleGithub}>Github</button>
                            </div>
                                
                        </div>
                           <div className='mb-4'>
                           {
                                success && <p className='text-green-400 text-center'>{success}</p>
                            }
                            {
                                loginError && <p className='text-red-500 text-center'>{loginError}</p>
                            }
                           </div>
                        </div>

                    </div>
            </div>
    );
};

export default Login;



 