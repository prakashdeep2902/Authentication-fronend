import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';

function SignIn() {



    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
       
        
        if (json.success) {

            localStorage.setItem('token', json.Authtoken);
            navigate("/dashboard");

        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container flex   flex-col m-auto mt-10 md:mt-2 ">
                <div className='input  inline-flex flex-col  m-auto border-4 mt-5  mb-10 border-gray-600 lg:p-8 lg:mt-16  rounded-lg  '>
                    <span className='flex m-auto font-bold text-3xl mt-3 uppercase'><h1>SignIn</h1></span> <br />
                    <span className=' text-2xl ml-3 capitalize '>Email</span>
                    <input type="text" placeholder='Email' name='email' className='h-10 w-80 pl-3 m-3 border-2 rounded-xl' value={credentials.email} onChange={onChange} />
                    <span className=' text-2xl ml-3 capitalize ' >password</span>
                    <input type="password" placeholder='Password' name='password' className='h-10 w-80 pl-3 m-3 border-2  rounded-xl' value={credentials.password} onChange={onChange} />
                    <div className="signin_btn  flex justify-center ">

                        <button className=' bg-blue-600 pl-6 pr-6 pt-2 pb-2 text-white text-xl capitalize rounded-lg hover:bg-gradient-to-r from-gray-600 to-red-600' onClick={handleSubmit} >signin</button>
                    </div>
                    <div className="forgetpassword flex justify-center mt-2">
                        <Link to='/forgot-password' >
                            <span className='capitalize text-xl text-gray-600 hover:text-red-500 hover:underline'>forgot password ?</span>
                        </Link>

                    </div>

                </div>




            </div>
        </>
    )
}

export default SignIn
