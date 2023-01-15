import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let navigation = useNavigate();

    const HandelonSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })

        });


        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.Authtoken);
            navigation('/sign-in')
            alert("user successfull signUp ")
        }
        console.log(credentials)
    }


    const onChange = (e) => {

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
            
        });

    }
    return (
        <>
            <div className="container flex   flex-col m-auto mt-10 md:mt-2 ">
                <div className='input  inline-flex flex-col  m-auto border-4   mb-10 border-gray-600 lg:p-8 lg:mt-16  rounded-lg  '>
                    <span className='flex m-auto font-bold text-2xl mt-3 p-1 '><h1>SignUp</h1></span> <br />
                    <span className=' text-2xl ml-3 capitalize '>name</span>
                    <input type="text" placeholder='Name' name='name' id='name' className='h-10 w-80 pl-3 m-3 border-2 rounded-xl' onChange={onChange} />
                    <span className=' text-2xl ml-3 capitalize ' >email</span>
                    <input type="email" placeholder='Email' name='email' id='email' className='h-10 w-80 pl-3 m-3 border-2  rounded-xl' onChange={onChange} />
                    <span className=' text-2xl  ml-3 capitalize' >password</span>
                    <input type="password" placeholder='password' name='password' id='password' className='h-10 w-80 pl-3 m-3 border-2 rounded-xl' onChange={onChange} />


                    {/* creating the submit button */}
                    <div className='submit_btn  flex  justify-center mb-3'>
                        <button className='btn text-white bg-blue-600  pl-5 pr-5 pt-2 pb-2 rounded-xl capitalize text-xl font-bold' onClick={HandelonSubmit}>submit</button>

                    </div>
                    {/* creating the HR  */}
                    <div className='HR_AND_OR inline-flex flex-row '>
                        <div className=' bg-gray-400 h-0.5 w-1/2  mt-3'></div>
                        <div className=' relative border-2 border-gray-600 pl-2 pr-2 rounded-lg font-bold text-sm'>or</div>
                        <div className=' bg-gray-400  h-0.5 w-1/2  mt-3'></div>

                    </div>
                    {/* creating the social media website */}
                    <div className='social_icon flex justify-center space-x-6 mt-3 items-center p-3 mb-3 '>
                        <div className='google mr-1 text-3xl cursor-pointer  text-red-600 border-4 border-red-500 pl-2 pr-2 rounded-full'>G</div>
                        <div className='facebook mr-1 text-3xl  cursor-pointer text-blue-600 border-4 border-blue-500 pl-4 pr-4 rounded-full'>f</div>
                        <div className='linkedin mr-1 text-3xl  cursor-pointer text-blue-600 border-4 border-blue-500 pl-2 pr-2 rounded-full'>ln</div>
                    </div>
                    {/* creating if the Login user already present */}
                    <div className='Already_user flex justify-center '>
                        <h3 className=' capitalize mr-2 text-xl text-gray-600  font-bold'>already a user</h3>
                        <Link to='/sign-in'><p className=' uppercase underline text-xl text-gray-800 hover:text-red-600' >login</p></Link>

                    </div>

                </div>




            </div>
        </>
    )
}

export default SignUp
