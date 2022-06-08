import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsBackspaceFill, BsFillBagCheckFill } from 'react-icons/bs'
import { useRef } from 'react';

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    const toggleCart = ()=>{
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef();
    return (
        <>
            <header className="text-gray-600 body-font shadow-md sticky top-0 bg-white z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={'/'}>
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">CodesWear</span>
                </a>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <Link href={'/tshirts'}><a className="mr-5 hover:text-gray-900">Tshirts</a></Link>
                <Link href={'/hoodies'}><a className="mr-5 hover:text-gray-900">Hoodies</a></Link>
                <Link href={'/stickers'}><a className="mr-5 hover:text-gray-900">Stickers</a></Link>
                <Link href={'/mugs'}><a className="mr-5 hover:text-gray-900">Mugs</a></Link>
                </nav>
                <button onClick={toggleCart} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><AiOutlineShoppingCart/>&nbsp;Cart
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
            </div>
            </header>
            <div ref={ref} className="absolute top-0 right-0 transform transition-transform translate-x-full z-20">
                    <div className="relative px-10 pb-10 w-[300px] shadow-2xl bg-white lg:items-start items-center">
                    <h1 className='top-0 text-2xl m-5 text-black'>Shopping Cart</h1>
                    <span onClick={toggleCart} className='absolute cursor-pointer right-3 top-2 text-2xl'><BsBackspaceFill/></span>
                    {Object.keys(cart).length == 0 && <div className='mt-5 text-center'>Your cart is empty!</div>}
                    {Object.keys(cart).map((k)=>{return <div key={k} className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{cart[k].name}</h2>
                        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        <a className="mt-3 text-indigo-500 inline-flex items-center"><AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}className='cursor-pointer' />&nbsp;{cart[k].qty}&nbsp; <AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer' />
                        </a>
                    </div>})}
                    <span className='font-semibold'>Subtotal: ₹{subTotal}</span>
                    <div className="buttons flex">
                            <Link href={'/checkout'}><button className="flex mt-8 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"><BsFillBagCheckFill className='mt-1' />&nbsp;&nbsp;Checkout</button></Link>
                            <button onClick={clearCart} className="flex ml-2 mt-8 w-24 text-white bg-indigo-500 border-0 py-2 px-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Clear Cart</button>
                        </div>
                    </div>
                    </div>
            </>
    )
}

export default Navbar