import React, { Fragment } from 'react'
import './Home.css';
import video from '../img/video1.mp4';
import GroupExample from './CardGroup';
import five from '../img/five.webp'
import { AiOutlineInstagram } from 'react-icons/ai';
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

            <div className='more'>
                <div className='more1'>
                    {/* text */}
                    <div className='more11'>
                        MORE ABOUT US
                    </div>
                    <div className='more12'>
                        Bholenath Mobile was founded in 2023, and since our first day in business we’ve provided high quality repair services to clients in the Rajkot, Kuvadva, Shapar, Ect. area. With a team of experienced professionals ready to handle your repair needs, we have the parts and labor required to guarantee satisfaction.
                    </div>
                    <div className='workings'>
                        <span>
                            Working Hour :
                        </span>
                        <span>
                            10:00 AM To 8:00 PM
                        </span>
                    </div>
                </div>
                <div className='moreimg'>
                    {/* image */}
                    <img src={five} alt='img' />
                </div>
            </div>

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