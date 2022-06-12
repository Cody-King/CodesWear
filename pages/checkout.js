import React from 'react'
import Link from 'next/link'
import {  AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs'

const Checkout = ({cart, addToCart, removeFromCart, subTotal}) => {
    return (
        <div>
            <h1 className='text-center text-4xl mt-10 font-semibold text-gray-700'>Checkout</h1>
            <h1 className='absolute left-[16.5rem] text-xl mt-16'>1. Delivery Details</h1>
            <div className="container px-5 pb-[3rem] pt-28 mx-auto">
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative flex-grow w-full">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-[67%]">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Phone</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative flex-grow w-full">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">City</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">State</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative flex-grow w-full">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Pincode</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
            </div>
            <h1 className='relative left-[17%] text-xl mb-5'>2.Review Cart Items and Pay</h1>
            <div className="relative flex flex-row">
                    <div className="relative px-10 py-10 w-[66%] left-[17%] shadow-2xl bg-white lg:items-start items-center">
                    {Object.keys(cart).length == 0 && <div className='mt-5 text-center'>Your cart is empty!</div>}
                    {Object.keys(cart).map((k)=>{return <div key={k} className="flex flex-row">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{cart[k].name}({cart[k].size}/{cart[k].variant})</h2>
                        <a className="relative flex flex-row left-[25rem] text-indigo-500 items-center"><AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}className='cursor-pointer' />&nbsp;{cart[k].qty}&nbsp; <AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer' />
                        </a>
                    </div>})}
                        <span className='font-semibold'>Subtotal: ₹{subTotal}</span>
                    </div>
                    </div>
                    <div className="button flex">
                        <Link href={'/checkout'}><button className="relative left-[18%] flex mt-[20px] text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"><BsFillBagCheckFill className='mt-1' />&nbsp;&nbsp;Pay: ₹{subTotal}</button></Link>
                    </div>
        </div>
    )
}

export default Checkout