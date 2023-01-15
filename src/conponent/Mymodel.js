import React  from 'react'
import { Link } from "react-router-dom";

function Mymodel({ visible,window_Width }) {

   
   
    if (!visible) {
        return null
    }
    return (
        <>
            <div className={`w-full fixed bg-[rgba(255, 255, 255, 0.25)] shadow-xl backdrop-blur-lg flex justify-center    opacity-100 ${window_Width>768 && 'hidden'} `}>


                <div className='buttons  inline-flex mr-3 flex-col justify-center mb-9 mt-9' >
                    <Link className="nav-link active" aria-current="page" to="/sign-in" onClick={visible=true}>  <button className='button-1   cursor-pointer  bg-blue-400  w-40  pt-3 pb-3  rounded-md  text-white m-2 capitalize '  >sign in</button></Link>
                    <Link className="nav-link active" aria-current="page" to="/sign-up" onClick={visible=true}> <button className='button-2   cursor-pointer  bg-blue-400  w-40  pt-3 pb-3  rounded-md    text-white m-2 capitalize '  >sign up</button></Link>

                </div>

            </div>

        </>
    )
}

export default Mymodel
