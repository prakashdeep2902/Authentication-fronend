import { React, useState } from 'react'

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(false);
    const setVal = (e) => {
        setEmail(e.target.value)
    }
    const sendLink = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/sendpasswordlink", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })

        const data = await res.json();
        if (data.status === 201) {
            setEmail("");
            setMessage(true);

        }

    }



    return (
        <>
            <div className="containe  flex justify-center ">

                <div className='container_items  inline-flex flex-col mt-20 border-2 border-gray-700 p-3 ' >
                    <h1 className=' text-4xl capitalize flex  justify-center font-bold m-3 mb-10'>forgot password</h1>
                    {console.log(message)}
                    {message ?<p style={{color:"green",fontWeight:"bold"}}> password reset link send sucsessfully</p>:""}
                    <label className=' capitalize text-xl    font-bold ml-1' htmlFor='email'>email address</label>
                    <input type="email" value={email} name="email" id="email" className=' w-80 h-10  border-2 border-green-500 rounded-md pl-2' placeholder='Email' onChange={setVal} />
                    <button className=' btn bg-blue-500 mt-3 w-full m-auto text-xl  capitalize mb-3 pt-1 pb-1 rounded-lg cursor-pointer text-white ' onClick={sendLink} type='submit'>send link</button>

                </div>



            </div>
        </>
)}

export default ForgotPassword
