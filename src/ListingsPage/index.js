import React from 'react'

import Navbar from '../Navbar'

import { sellers } from '../data'

import { Row, Col } from 'react-grid-system'

const ListingsPage = () => {
    function renderSellers() {
        return sellers.map((seller, index) => {
            return (
                <Col 
                    key={`product-${index}`} 
                    xs={12} sm={6} md={4} lg={3}
                >
                    <div style={{ padding: '24px', border: '1px solid black', margin: '12px' }}>
                        <img
                            alt='textbook' 
                            src={seller.photo} 
                            style={{ width: '100%', height: '320px', objectFit: 'cover' }} 
                        />
                        <p>Product: {seller.product}</p>
                        <p>Price: {seller.price}</p>
                        <p>Seller Name: {seller.name}</p>
                        <a href={`/product/${seller.id}`}>
                            <button style={{ padding: '12px' }}>Details</button>
                        </a>
                    </div>
                </Col>
            )
        })
    }

    return (
        <Row>
            <Navbar />

            { renderSellers() }    
        </Row>
    );
}

export default ListingsPage;
