import React from 'react'
import { Link } from "react-router-dom";
const Navbar = (props) => {





    return (

        <>
            <div className="navbar   z-20   text-2xl flex justify-between items-center h-20 w-full border-b-2 bg-gradient-to-r from-white to-blue-200">
                <div className='name_and_icon md:ml-10 '>
                    <Link className="nav-link active" aria-current="page" to="/home">  <h1 className='   ml-1 inline-flex cursor-pointer '><span className=' font-bold capitalize'>coding</span> <span className='text-blue-400 font-bold ml-1'>पाठशाला</span> </h1></Link>

                </div>

                <div className='humburger_and_icon  inline-flex  justify-center items-center md:mr-10 '>



                    <div className={`buttons  inline-flex mr-3 ${props.window_Width < 768 && 'hidden'}`} >
                        <Link className="nav-link active" aria-current="page" to="/sign-in">  <button className='cursor-pointer  bg-blue-400 w-32 pt-2 pb-2  rounded-md  text-white m-2 capitalize ' >sign in</button></Link>
                        <Link className="nav-link active" aria-current="page" to="/sign-up"> <button className='button-2 cursor-pointer  bg-blue-400  w-32 pt-2 pb-2   rounded-md  text-white m-2 capitalize '>sign up</button></Link>

                    </div>


                    <div className={`cross  text-4xl cursor-pointer mr-3 ${props.showMymodel === false && 'hidden'} ${props.window_Width > 768 && 'hidden'}`} onClick={() => props.setshowMymodel(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>

                    <div className={`humburger  inline-flex flex-col  items-end m-2 md:hidden cursor-pointer ${props.showMymodel === true && 'hidden'}`} onClick={() => props.setshowMymodel(true)} >
                        <div className='line h-1 w-12 lg:h-1.5 lg:w-20 bg-black my-0.5 rounded-sm'></div>
                        <div className='line h-1 w-10 lg:h-1.5 lg:w-16 bg-black  my-0.5 rounded-sm  '></div>
                        <div className='line h-1 w-7 lg:h-1.5 lg:w-10 bg-black my-0.5  rounded-sm'></div>
                    </div>



                    <div className='day_night_icon inline-flex justify-center items-center cursor-pointer' >
                        <i className="fa-regular text-3xl md:text-4xl fa-moon lg:text-5xl  text-blue-400 "></i>
                    </div>
                    <div className='day_light text-3xl '>
                        <i className="fa-solid fa-sun text-white"></i>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Navbar
