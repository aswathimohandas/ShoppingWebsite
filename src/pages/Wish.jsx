import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromWishList } from '../Redux/slice/wishSlice'
import { addToCart } from '../Redux/slice/cartSlice'

function Wish() {
  const {items}=useSelector((state)=>state.wishReducer)
  console.log(items);

  const dispatch=useDispatch()

  const handleAddToCart=(data)=>{
    console.log(data);
    dispatch(addToCart({...data}))
    dispatch(removeFromWishList(data.id))
    
  }

  
  return (
    <>
    <h2>WishList</h2>
      <div className='row container-fluid p-3 '>
        {
          items?.length>0 ?
          items.map(wish=>(
            <div className='col-3'>
          <div className="card h-100">
  
            <img className="card-img-top" src={wish?.thumbnail} alt="..." />
  
            <div className="card-body p-4">
              <div className="text-center">
  
                <h5 className="fw-bolder">{wish?.title}</h5>
  
                ${wish?.price}
              </div>
            </div>
  
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <button className='btn' onClick={()=>{dispatch(removeFromWishList(wish.id))}}>
            <i className="fa-solid fa-heart-circle-xmark" style={{color: "#d11023",}} />
            </button>
            <button className='btn' onClick={()=>handleAddToCart(wish)}>
            <i className="fa-solid fa-cart-shopping" style={{color: "#63E6BE",}} />
            </button>

            </div>
          </div>
        </div>

          ))
          :
          <h3>No items Added Yet</h3>
        }

        
      </div>

    </>
  )
}

export default Wish
