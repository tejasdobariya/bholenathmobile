import React, { Fragment } from 'react'
import './Home.css';
import video from '../img/video1.mp4';
import GroupExample from './CardGroup';
import { AiOutlineInstagram } from 'react-icons/ai';
import MoreInfo from './MoreInfo';
const Home = () => {
    const url = 'https://instagram.com/bholenathmobilecare?igshid=MTIzZWMxMTBkOA==';
    return (
        <Fragment>
            <div className='vid'>
                <video muted autoPlay loop controls >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='content'>
                <div className='big'>
                    BHOLENATH MOBILE
                </div>
                <div className='mid'>
                    We Can Fix That
                </div>
                <div className='small'>
                    Locally owned and operating in the Rajkot area, Bholenath Mobile has been repairing and servicing a variety of brands and models. Reliable and affordable repair service is our specialty, so we’re sure we can find the solution for your specific needs.
                </div>
            </div>

            {/* 3 column */}
            <div className='info'>
                <div className='info1'>
                    <div className='info2'> REPAIR SERVICES</div>
                    <div className='info3'>Trust the Process</div>
                </div>
                <div>
                    {/* cards */}
                    <GroupExample />
                </div>
            </div>

            {/*  */}
            <MoreInfo />

            <div className='contact'>
                <div className='contact1'>Contact Us</div>
                <div className='contact2'>
                    Near PatelChowk, Rajkot-360002

                    <div className='contact3'>
                        <a href='mailto:bholenathmobilecare@gmail.com' >bholenathmobilecare@gmail.com</a>
                    </div>
                    <div className='icons'>
                        <a target='_blank' rel="noreferrer" href={url}>
                            <AiOutlineInstagram className='insta' />
                        </a>
                    </div>
                </div>
            </div>

            <div className='copy'>
                ©2023 by Bholenath Mobile.
            </div>


        </Fragment>
    )
}

export default Home;