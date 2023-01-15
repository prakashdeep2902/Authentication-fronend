import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const history = useNavigate()

    const [user, setUser] = useState({})

    const getUserDetails = async () => {

        const response = await fetch("http://localhost:5000/api/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authtoken": localStorage.getItem('token')
            }
        });
        const data = await response.json();
        if (!data) {
            history("*")
        } else {

            setUser(data);
            history("/dashboard")
        }
    }


    const { name } = user;

    useEffect(() => {
        getUserDetails();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className='profile  flex justify-center'>
                <div className='profile_details inline-flex flex-col border-2 border-gray-600 mt-20 mb-10 '>
                    <h1 className='flex text-3xl capitalize justify-center font-bold text-red-400'>user details</h1>
                    <div className='profile_pic w-20 h-20 rounded-full border-2 border-gray-600 flex justify-center items-center  m-auto mt-4 '>
                        <i className=" capitalize text-yellow-400 text-6xl">{String(name).charAt(0)}</i>
                    </div>

                    <span className='flex mt-3 ml-3 justify-center   text-3xl capitalize'>{user.name}</span>
                    <span className='flex mt-1 ml-3 mb-10 font-bold text-blue-500  text-xl capitalize p-3'>
                        {user.email}</span>
                </div>

            </div>
        </>
    )
}

export default Dashboard
