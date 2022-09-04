import { Box, styled } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Slide from './Slide'
import MidSlide from './midSlide'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'; // hooks
import MidSection from './MidSection'



const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const NavComponent = styled(Box)`
border-bottom: 1px solid rgb(0,0,0, 0.2);  
`
const Home = () => {

  const { products } = useSelector(state => state.getProducts);
  console.log(products)
  // const { products } = getProducts;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <NavComponent>
        <Navbar />
      </NavComponent>
      <Component>
        <Banner />
        <MidSlide product={products} />
        <MidSection />
        <Slide product={products} title='Discounts for You' timer={false}
          multi={true} />
        <Slide product={products} title='Suggested Items' timer={false}
          multi={true} />
        <Slide product={products} title='Top Selection' timer={false}
          multi={true} />
        <Slide product={products} title='Recommended Items' timer={false}
          multi={true} />
        <Slide product={products} title='Pick Your Styles' timer={false}
          multi={true} />
      </Component>
    </>
  )
}

export default Home
