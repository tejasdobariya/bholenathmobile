import React, { Fragment } from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import './Contact.css';

const Contact = () => {
    const url = 'https://instagram.com/bholenathmobilecare?igshid=MTIzZWMxMTBkOA==';

    return (
        <Fragment>
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

        </Fragment>
    )
}

export default Contact