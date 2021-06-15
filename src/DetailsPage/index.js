import React, { useState, useContext } from 'react'

import { Row, Col } from 'react-grid-system'

import { Context } from '../data/context'

import Navbar from '../Navbar'
import Chat from './Chat'

const DetailsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { currentUser, users } = useContext(Context)
    const sellerID = parseInt(window.location.pathname.split('/product/')[1])
    const seller = users.find(seller => seller.id === sellerID)

    function renderPhotos(photos) {
        return photos.map((photo, index) => {
            return (
                <div key={`photo-${index}`}>
                    <img 
                        src={photo} 
                        alt='textbook' 
                        style={{ width: '275px', height: '320px', objectFit: 'cover' }} 
                    />
                </div>
            )
        })
    }

    return (
        <div>
            <Navbar />

            { 
                seller && 
                <Row style={{ width: '100%' }}>
                    <Col xs={12} md={6}>
                        <div style={{ margin: '12px' }}>
                            <div style={{ width: '100%', overflowX: 'scroll' }}>
                                <div style={{ display: 'flex' }}>
                                    { renderPhotos(seller.custom_json.photos) }
                                </div>
                            </div>
                            <h1>{seller.custom_json.product}</h1>
                            <h5>Price: {seller.custom_json.price}</h5>
                            <h5>Seller Name: {seller.first_name} {seller.last_name}</h5>
                            <p style={{ maxWidth: '325px' }}>{seller.custom_json.description}</p>
                            <a href='/'>
                                <button style={{ padding: '11px' }}>
                                    Back
                                </button>
                            </a>
                            {' '}
                            {
                                seller.username !== currentUser.username &&
                                <button 
                                    onClick={() => setIsOpen(!isOpen)} 
                                    style={{ color: 'white', backgroundColor: '#1890ff', padding: '12px', border: '1px solid rgb(24, 144, 255)', borderRadius: '3px' }}
                                >
                                    {isOpen && 'Close'} Chat with Seller
                                </button>
                            }
                        </div>
                    </Col>
                    {
                        isOpen && 
                        <Col xs={12} md={6} style={{ height: 'calc(100vh - 104px)', border: '1px solid #bae7ff', overflowY: 'hidden' }}>
                            <Chat seller={seller}/>
                        </Col>
                    }
                </Row>
            }
        </div>
    );
}

export default DetailsPage;
