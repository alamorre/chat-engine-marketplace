import React, { useState } from 'react'

import { Row, Col } from 'react-grid-system'

import { sellers } from '../data'

import Navbar from '../Navbar'
import Chat from './Chat'

const DetailsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const sellerID = parseInt(window.location.pathname.split('/product/')[1])
    const seller = sellers.find(seller => seller.id === sellerID)

    return (
        <Row>
            <Navbar />

            <Col xs={12} md={6}>
                <div style={{ padding: '12px' }}>
                    <img alt='textbook' src={seller.photo} style={{ width: '275px', height: '320px', objectFit: 'cover' }} />
                    <h1>{seller.product}</h1>
                    <h5>Price: {seller.price}</h5>
                    <h5>Seller Name: {seller.name}</h5>
                    <p style={{ maxWidth: '325px' }}>{seller.description}</p>
                    <a href='/'>
                        <button style={{ padding: '11px' }}>
                            Back
                        </button>
                    </a>
                    {' '}
                    <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'white', backgroundColor: '#1890ff', padding: '12px', border: '1px solid rgb(24, 144, 255)', borderRadius: '3px' }}>
                        {isOpen && 'Close'} Chat with Seller
                    </button>
                </div>
            </Col>
            {
                isOpen && 
                <Col xs={12} md={6} style={{ height: 'calc(100vh - 104px)', border: '1px solid #bae7ff', overflowY: 'hidden' }}>
                    <Chat seller={seller}/>
                </Col>
            }
        </Row>
    );
}

export default DetailsPage;
