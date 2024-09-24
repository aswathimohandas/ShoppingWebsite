import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../Redux/slice/wishSlice';
import { addToCart } from '../Redux/slice/cartSlice';

function View() {

    const {id}=useParams()
    console.log(id);

    
    const dispatch=useDispatch()
    const {products,loading,error}=useSelector((state)=>state.productReducer)

    const [data,setData]=useState({})

    useEffect(()=>{
        const products=JSON.parse(localStorage.getItem('products')).products
        const pro=products.find(item=>item.id==id)
        setData(pro)
    },[])

    console.log(data);

    const handleWish=()=>{
        dispatch(addToWishList(data))
    }
    

    

  return (
   <>
   <section className="py-5">
    {
        data &&

        <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data?.thumbnail} alt="..." /></div>
            <div className="col-md-6">
                <div className="small mb-1">ID:{data?.id}</div>
                <h1 className="display-5 fw-bolder">{data?.title}</h1>
                <div className="fs-5 mb-5">
                    {/* <span className="text-decoration-line-through"></span> */}
                    <span>${data?.price}</span>
                </div>
                <p className="lead">{data?.description}</p>
                <div className="d-flex justify-content-around">
                    {/* <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{maxWidth:"3rem"}} /> */}
                    <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={()=>dispatch(addToCart(data))}>
                        <i className="bi-cart-fill me-1"></i><i className="fa-solid fa-cart-shopping" style={{color: "#81abf3",}} />
                        Add to cart
                    </button>
                    <button onClick={handleWish} className='btn btn-outline-dark'><i className="fa-solid fa-heart-circle-plus" style={{color: "#eb1e0f",}} />Add to Wishlist</button>
                </div>
            </div>
        </div>
    </div>
    }
           
        </section>
   </>
  )
}

export default View
