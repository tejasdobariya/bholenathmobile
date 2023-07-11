import React, { Fragment } from 'react'
import five from '../img/five.webp'
import './MoreInfo.css';

const MoreInfo = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default MoreInfo