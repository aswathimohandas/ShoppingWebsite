import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/slice/cartSlice'
import { useDispatch } from 'react-redux'
import { increaseQuantity } from '../Redux/slice/cartSlice'
import { decreaseQuantity } from '../Redux/slice/cartSlice'
import { checkOut } from '../Redux/slice/cartSlice'


function Cart() {
  const {cart}=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  return (
    <>
    <div className='container-fluid p-4'>
      <Row>
        <Col sm={12} md={8}>
        {
          cart?.length>0 ?
          <table className='table table-bordered border shadow border-4 border-dark  '>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            {
              cart.map(item=>(
                <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td><img src={item.thumbnail} height={'200'} width={'150'} alt="" /></td>
              <td>${item.price}</td>
              <td>
                <button className='btn' onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
                <input type="text" className='form-control w-25' value={item?.quantity} />
                <button className='btn' onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button>
              </td>
              <td><button className='btn' onClick={()=>{dispatch(removeFromCart(item.id))}}><i className="fa-solid fa-trash" style={{color: "#ce0930",}} /></button></td>
            </tr>

              ))
            }
            
          </table>
          :
          <h3>No Items Available Yet</h3>

        

          
        }
          
        </Col>

        <Col sm={12} md={4}>
        <div className='border shadow p-5'>
          <h4>Total Items:{cart.length}</h4>
          <h4>Total Amount:{cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0).toFixed(2) }</h4>
          <div className='d-grid mt-3'>
            <button className='btn btn-success' onClick={()=>dispatch(checkOut())} >Check Out</button>
          </div>
          
        </div>
        <Link className='btn btn-outline-info mt-3' to={'/'} >Shop more</Link>

        </Col>
      </Row>

    </div>
    </>
  )
}

export default Cart
