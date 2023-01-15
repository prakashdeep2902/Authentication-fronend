import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const AddNewPassword = () => {

    const { id, token } = useParams()
    const history = useNavigate()

    const [passw, setPassw] = useState();

    const [message, setMessage] = useState("");
    const uservalid = async () => {
        const res = await fetch(`http://localhost:5000/api/addnewpassword/${id}/${token}`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (data.status === 201) {
            console.log("user Vaild")
        } else {
            history("/")
        }

    }

    const setval = (e) => {
        setPassw(e.target.value)

    }

    const sendPassword = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:5000/api/${id}/${token}`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ passw })
        });
        const data = await res.json();

        if (data.status === 201) {
            setPassw("");
            setMessage(true);
        } else {
            toast.error("! Token expired generate new link")
        }


    }
    useEffect(() => {
        uservalid();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="containe  flex justify-center ">

                <div className='container_items  inline-flex flex-col mt-20 border-2 border-gray-700 p-3 ' >
                    <h1 className=' text-4xl capitalize flex  justify-center font-bold m-3 mb-10'>add new password</h1>
                   
                    {message ?<p style={{color:"green",fontWeight:"bold"}}>Password successfuly upadate</p>:""}


                    <input type="password" name="password" id="password" className=' w-full h-10  border-2 border-green-500 rounded-md pl-2' placeholder=' New Password' onChange={setval} value={passw} />
                    <button className=' btn bg-blue-500 mt-3 w-full m-auto text-xl  capitalize mb-3 pt-1 pb-1 rounded-lg cursor-pointer text-white ' type='submit' onClick={sendPassword}>reset</button>

                </div>

                <ToastContainer />

            </div>


        </>
    )
}

export default AddNewPassword
