import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
    <div className='container-fluid bg-primary p-3 text-light'>
        <Row>
            <Col>
            <h1>Redux Cart</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, fugiat libero illo recusandae veniam ex atque provident quibusdam obcaecati magnam, sed incidunt voluptatem alias asperiores! Eum hic sit voluptates reiciendis.</p>
            </Col>

            <Col>
            <h1>Links</h1>
            <div className='d-flex flex-column justify-content-between'>
                <Link>Home</Link>
                <Link>WishList</Link>
                <Link>Cart</Link>
            </div>
            </Col>

            <Col>
            <h1>Feedback</h1>
            <textarea name="" id="" className="form-control"></textarea>
            <button className='btn btn-success mt-3'>Send</button>
            </Col>

        </Row>
         
    </div>
   </>
  )
}

export default Footer
