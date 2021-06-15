import React, { useContext } from 'react'

import Navbar from '../Navbar'

import { Context } from '../data/context'

import { Row, Col } from 'react-grid-system'

const ListingsPage = () => {
    const { users } = useContext(Context)

    function renderSellers() {
        return users.map((seller, index) => {
            return (
                <Col 
                    key={`product-${index}`} 
                    xs={12} sm={6} md={4} lg={3}
                >
                    <div style={{ padding: '24px', border: '1px solid black', margin: '12px' }}>
                        <img
                            alt='textbook' 
                            src={seller.custom_json.photos[0]} 
                            style={{ width: '100%', height: '320px', objectFit: 'cover' }} 
                        />
                        <p>Product: {seller.custom_json.product}</p>
                        <p>Price: {seller.custom_json.price}</p>
                        <p>Seller Name: {seller.first_name} {seller.last_name}</p>
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
