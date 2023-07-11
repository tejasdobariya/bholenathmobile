import React, { Fragment } from 'react'
import './NavBar.css';
import logo from '../img/one.jpg'
import { AiOutlineInstagram } from "react-icons/ai";
const NavBar = () => {
    const url = 'https://instagram.com/bholenathmobilecare?igshid=MTIzZWMxMTBkOA==';

    return (
        <Fragment>
            {/* main */}
            <div className='main1'>
                <div className='main2'>
                    <div className='main3'>
                        {/* logo */}
                        <div className='logo'>
                            <img src={logo} alt="hey" />
                        </div>
                        {/* text */}
                        <div className='txt'>
                            {/* name */}
                            <div className='txt1'>
                                BHOLENATH MOBILE
                            </div>
                            {/* sub text */}
                            <div className='txt2'>
                                The Mobile Repair Shop
                            </div>
                        </div>
                    </div>
                    <div className='social'>
                        <a href='mailto:bholenathmobilecare@gmail.com' >bholenathmobilecare@gmail.com</a>
                        <a target='_blank' rel="noreferrer" href={url}>
                            <AiOutlineInstagram className='insta' />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar;