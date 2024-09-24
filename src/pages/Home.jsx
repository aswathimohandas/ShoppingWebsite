import { useEffect,useState } from 'react';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductThunk } from '../Redux/slice/productSlice';
import { useSelector } from 'react-redux';
import { prevPage,nextPage } from '../Redux/slice/productSlice';


function Home() {


  const dispatch=useDispatch()
  const {products,error,loading,productsPerPage,currentPage}=useSelector((state)=>
    state.productReducer
  )

  useEffect(()=>{
      dispatch(fetchProductThunk())
  },[])


  const totalPages=Math.ceil(products?.length/productsPerPage)
  const lastProductIndex=currentPage*productsPerPage
  const firstProductIndex=lastProductIndex-productsPerPage
  const visibleProducts=products?.slice(firstProductIndex,lastProductIndex)


  const handleNext=()=>{
    if(currentPage<totalPages){
      dispatch(nextPage())
      console.log(next);
      
    }
  }

  const handlePrev=()=>{
    if(currentPage>1){
      dispatch(prevPage())
      console.log(prev);
      
    }
  }

  return (
    <>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <Carousel>
              <Carousel.Item>
                <img src="https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-
                stock-photo-e-commerce-shopping-cart-with.jpg" width={'80%'} height={'400px'} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PWk-
                0gXGdWKYi8UTgeabIPgMzSsFtDHzGg&s" width={'80%'} height={'400px'} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_640.jpg"
                 width={'80%'} height={'400px'} alt="" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

          {
            loading?
            <h3>
               <Spinner animation="border" role="status">
      
    </Spinner>
    <span className="visually-hidden">Loading...</span>
            </h3>:
            (
              error?
              <h3>{error}</h3>
              :
              <>
              {
                  visibleProducts?.map(
                    item=>(
                      (
                        <div className="col mb-5">
                        <div className="card h-100">
          
                          <img className="card-img-top" src={item?.thumbnail} alt="..." />
          
                          <div className="card-body p-4">
                            <div className="text-center">
          
                              <h5 className="fw-bolder">{item?.title}</h5>
          
                              ${item?.price}
                            </div>
                          </div>
          
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><Link to={`/view/${item?.id}`} className='btn btn-success'>View More</Link></div>
                          </div>
                        </div>
                      </div>
                   
          
                      
                    )
                    )
                  )
              }
              </>
              

                

            )
            
           
          }
           </div>
            </div>
    
          </section>
          <div className='mt-4 d-flex justify-content-center'>
            <button className='btn' onClick={handlePrev}>
            <i className="fa-solid fa-angles-left" />
            </button>
            {''}
            {currentPage}/{totalPages}
            {''}
            <button className='btn' onClick={handleNext}>
            <i className="fa-solid fa-angles-right" />
            </button>

          </div>


            
    </>
  )
}

export default Home
