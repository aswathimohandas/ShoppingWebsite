import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchWithKey } from '../Redux/slice/productSlice';


function Header() {
  const {items}=useSelector((state)=>state.wishReducer)
  console.log(items);
  const {cart}=useSelector((state)=>state.cartReducer)
  console.log(cart);

  const [key,setKey]=useState([])
  const dispatch=useDispatch()
  
  
  
  return (
    <>
     <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-cart-shopping fa-2xl" style={{color: "#63E6BE",}} />
            {' '}
            <Link className='text-info' style={{textDecoration:'none'}} to={'/'}>Ekart</Link>
          </Navbar.Brand>
          <div className='d-flex'>
            <div className='d-flex'>
              <input type="text" className="form-control" onChange={(e)=>{setKey(e.target.value)}} placeholder='Enter your product key' />
              <button className='btn btn-success' onClick={()=>{dispatch(searchWithKey(key))}}>Search</button>
            </div>
            <Link className='btn border border-1 border-dark me-3' to={'/wish'}><i className="fa-solid fa-heart fa-xl" style={{color: "#cd0a13",}} />Wish List
            {''}
            <span className='badge bg-dark ms-2'>{items?.length}</span>
            
            </Link>
            <Link className='btn border border-1 border-dark me-3' to={'/cart'}><i className="fa-solid fa-cart-shopping" size="xl" style={{color: "#63E6BE",}} />Cart
            <span className='badge bg-dark ms-2'>{cart?.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
