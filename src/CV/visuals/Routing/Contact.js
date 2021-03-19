import React from 'react';
import BulletList from '../reusable/BulletList';

import photo from '../../../images/hassan.jpg'

import './Contact.css'

const Contact = () => {
    return (
        <div class="row">

            <div class="column">
                <img src={photo} alt="A picture of me" width="360px" />
            </div>
            <div class="column">
                <BulletList
                    data={'Phone: +2011******** (I prefer contact by email), Email: bedairhassan1@gmail.com, Full Name: Hassan Hossam Fathy Labib Mohammed Hassan Moussa Bedair'.split(',')}
                />
            </div>
        </div>
    );
};

export default Contact;