import Card from 'react-bootstrap/Card';
import second from '../img/two.webp'
import three from '../img/three.webp'
import four from '../img/four.webp'
import { Fragment } from 'react';
import './card.css';

function GroupExample() {
    return (
        <Fragment>
            <div className='cards'>
                <Card className='cards3' >
                    <Card.Img className='cardimg' variant="top" src={second} />
                    <Card.Body className='cardbody'>
                        <Card.Title className='cardtitle'>CLEANING</Card.Title>
                        <Card.Text>
                            <div className='cardtxt1'>All-In-One</div>
                            <div className='cardtxt2'>Our Cleaning services are designed to make your life easier, with convenient and comprehensive support when you need it most. Get in touch today to learn more about this service and how it suits your needs.</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='cards3' >
                    <Card.Img className='cardimg' variant="top" src={three} />
                    <Card.Body className='cardbody'>
                        <Card.Title className='cardtitle'>REPAIR</Card.Title>
                        <Card.Text>
                            <div className='cardtxt1'>Parts & Labor Guarantee</div>
                            <div className='cardtxt2'>We specialize in Repair services, offering only top quality and efficient results. When you book this service, like all of our others, we guarantee you’ll be satisfied with the process and result.</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='cards3' >
                    <Card.Img className='cardimg' variant="top" src={four} />
                    <Card.Body className='cardbody'>
                        <Card.Title className='cardtitle'>CUSTOMIZATION</Card.Title>
                        <Card.Text>
                            <div className='cardtxt1'>Service You Can Trust</div>
                            <div className='cardtxt2'>This is one of our most popular services, offered for a variety of models and brands. Feel free to reach out with any questions for our team, and make sure to book this service ahead of time.</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    );
}

export default GroupExample;