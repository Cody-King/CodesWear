import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  const router = useRouter();
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) { 
        setcart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    }
    catch (error) {
      localStorage.clear()
    }
  }, [])
  

  const saveCart = (myCart)=>{
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setsubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else{
      newCart[itemCode] = {qty: 1, price, name, size, variant}
    }
    setcart(newCart)
    saveCart(newCart)
  }

  const buynow = (itemCode, qty, price, name, size, variant)=>{
    let newCart = {itemCode: {qty: 1, price, name, size, variant}};
    setcart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const clearCart = ()=>{
    setcart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"]<=0) {
      delete newCart[itemCode]
    }
    setcart(newCart)
    saveCart(newCart)
  }

  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} buynow={buynow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} /> 
    <Footer/>
    </>
}

export default MyApp
