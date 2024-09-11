import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Register = () => {
    const {creteRegister} = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('')
    const [show, setShow] = useState(false)
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
       
        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password must contain at least one uppercase letter');
            return;
        }
        
        creteRegister(email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('your register is successfully')
            return;
           
        })
        .catch(error => {
            console.log(error.message)
            setRegisterError("Your email all ready is use")
            return;
        })
       
        e.target.reset();

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>
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
                    { show ?
                        <FaEyeSlash />:<FaEye /> }
                    </span>
                   
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    {
                        success && <p className='text-green-400 text-center'>{success}</p>
                    }
                    {
                        registerError && <p className='text-red-500 text-center'>{registerError}</p>
                    }

                    <p>All ready have a Account please?<Link className='text-blue-500' to='/login'>Login</Link></p>
                </form>
                
                </div>
            </div>
        </div>
    );
};

export default Register;