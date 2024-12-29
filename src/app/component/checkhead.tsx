"use client"
import Image from "next/image"
import React from "react"



export default function Checkout(){
    return(
        <div>
        <div className="relative h-64 w-[full] flex items-center justify-center bg-cover bg-center">
            <Image src={"/pagesheader.png"} alt="checkout" objectFit="cover" layout="fill"></Image>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
  
        {/* Content */}
        <div className="relative w-[full] z-10 leading-[24px] text-center items-center">
            <Image src="/logo.png" alt="logo" width={77} height={77} className="ml-[25px]"></Image>
          <h1 className="text-3xl font-bold text-black font-[Poppins]">Checkout</h1>
          <div className="text-black mt-2">
            <span className="font-semibold">Home</span>
            <span className="mx-1 font-semibold text-black">›</span>
            <span className="font-[Poppins]">Checkout</span>
          </div>
        </div>
        </div>
      </div>
    )
}
