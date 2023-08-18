import React from 'react';
import './Footer.css';
import { iglogo } from '../assets';

import { styles } from '../styles';

const Footer = () => {
    return (
        <footer className={`${styles.paddingX} items-center py-5 bottom-0 z-20 bg-primary`} style={{ padding: '30px' }}>

            <div className='flex flex-row gap-10 flex-wrap' style={{ justifyContent: 'space-evenly' }}>
                <div>
                    <p style={{ textAlign: 'center', textDecoration: 'underline' }}><b>The Professional Barber</b></p>
                    <p>Instagram:<a href='https://www.instagram.com/dominic_the_profesional_barber/' target='_blank'><img src={iglogo} style={{ height: '70px', display: 'inline' }} /></a></p>
                </div>

                <div>
                    <p style={{ textAlign: 'center' }}><a href='https://www.fresha.com/a/edge-barbershop-oslo-storgata-10-a-1vbz9v2p/booking?employeeId=716488' target='_blank'><b>Book Haircut Appointment</b></a></p>
                    <p style={{ textAlign: 'center', textDecoration: 'underline' }}><a href='https://www.fresha.com/a/edge-barbershop-oslo-storgata-10-a-1vbz9v2p/booking?employeeId=716488' target='_blank'><b>CLICK HERE</b></a></p>
                </div>

                <div>
                    <p style={{ textAlign: 'center', textDecoration: 'underline' }}><b>Contact</b></p>
                    <p style={{ textAlign: 'center' }}>Phone: 454 86 718</p>
                    <p style={{ textAlign: 'center' }}>
                        <a href="mailto:oforidom1976@gmail.com">Email: oforidom1976@gmail.com</a>
                    </p>
                </div>
            </div>

            <p style={{ fontSize: '12px', padding: '5px', textAlign: 'center', position: 'relative', top: '5px' }}>&copy; Dominic - The Professional Barber. All Rights Reserved.</p>

            

        </footer>
    );
};

export default Footer;

