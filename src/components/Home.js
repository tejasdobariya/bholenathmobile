import React, { Fragment } from 'react'
import './Home.css';
import video from '../img/video1.mp4';
import GroupExample from './CardGroup';
import MoreInfo from './MoreInfo';
import Contact from './Contact';
const Home = () => {
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

            {/*  */}
            <Contact />


            <div className='copy'>
                ©2023 by Bholenath Mobile.
            </div>


        </Fragment>
    )
}

export default Home;