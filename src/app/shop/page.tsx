"use client"
import Image from "next/image"
import React from "react"
import { LayoutGrid, SlidersHorizontal, ArrowRightLeft, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import IconFooter from "../component/iconfooter"


export default function Shop(){
    return(
        <div>
        <div className="relative w-[full] h-64 flex  items-center justify-center bg-cover bg-center">
            <Image src={"/pagesheader.png"} alt="checkout" objectFit="cover" layout="fill"></Image>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
  
        {/* Content */}
        <div className="relative z-10 leading-[24px] text-center items-center">
          <h1 className="text-3xl font-bold text-black font-[Poppins]">Shop</h1>
          <div className="text-black mt-2">
            <span className="font-semibold">Home</span>
            <span className="mx-1 font-semibold text-black">›</span>
            <span className="font-[Poppins]">Shop</span>
          </div>
        </div>
        </div>

        {/* 2nd head */}
          <div className="h-[100px] w-[full] bg-[#F9F1E7] flex pt-2 pb-2 pr-5 pl-10 items-center">
            <SlidersHorizontal size={25} />
<p className="text-[20px] text-black font-[Poppins] ml-2 mr-10">Filter</p>
<LayoutGrid size={20} strokeWidth={3} absoluteStrokeWidth />
<Image src={"/bi_view-list.png"} alt="viewlist" height={19.5} width={21} className="ml-10 mr-10"></Image>
<div className="w-[1px] h-[37px] bg-[#9F9F9F] mr-8"></div>
<p className="text-[18px] text-black font-[Poppins] mr-[240px]">Showing 1–16 of 32 results</p>
<p className="text-[20px] text-black font-[Poppins] mr-3 ml-16">Show</p>
<div className="bg-white h-[55px] w-[55px] pt-3 pb-2 pl-3 text-[#9F9F9F] font-[Poppins] text-[20px] mr-8">16</div>
<p className="text-[20px] text-black font-[Poppins] mr-2">Short by</p>
<div className="bg-white h-[55px] w-[188px] pt-3 pb-2 pl-4 text-[#9F9F9F] font-[Poppins] text-[20px] mr-10">Default</div>
          </div>

          {/* Cards */}
         <Link href="/singal_product"><div className="w-[full] h-[2051px] mt-[46px] pl-[80px] pt-[17px] pr-[100px]">
            
 {/* 1st row */}
 <div className="mt-6 w-[1229px] h-[446px] sm: flex-col lg:flex-row flex items-center">

{/* Image 1 */}
<div className="w-[285px] h-[446px] bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic1.png"} alt={"Pic1"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Syltherine</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 2.500.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 3.500.000</p>
</div>
</div>
</div>

{/* image 2 */}
<Link href={'/singal_product'}>
<div className="w-[285px] h-[446px] bg-black inset-0 bg-opacity-50 overflow-hidden shadow-lg ml-7">
<div className="  absolute">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic2.png"} alt={"Pic2"} objectFit="cover" layout="fill"></Image>
<div className=" bg-black inset-0 bg-opacity-50 overflow-hidden shadow-lg absolute items-center">
<div className="w-[252px] h-[96px] items-center ml-3 mt-[160px]">
<button className="w-[202px] h-[48px] ml-5 text-center bg-white font-semibold font-[Poppins] text-[#B88E2F]"><Link href={"/cart"} className="">Add To Cart</Link></button>
<div className="w-[252px] h-[24px] p-2 flex items-center mt-6">
    <div className="font-[Poppins] text-[16px] text-white"><Share2 width={12} height={13.33} /></div>
    <div className="font-[Poppins] text-[16px] text-white ml-1">Share</div>
    <div className="font-[Poppins] text-[16px] text-white ml-5"><ArrowRightLeft width={12} height={13.33} /></div>
    <Link href={'/product-comparison'}><div className="font-[Poppins] text-[16px] text-white ml-1">Compare</div></Link>
    <div className="font-[Poppins] text-[16px] text-white ml-5"><Heart width={12} height={13.33} /></div>
    <div className="font-[Poppins] text-[16px] text-white ml-1"> Like</div>
</div>
</div>
</div>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Leviosa</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 2.500.000</p>
</div>

</div>
</div>
</Link>
{/* image 3 */}
<div className="w-[285px] h-[446px] ml-7 bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic3.png"} alt={"Pic3"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Lolito</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Luxury big sofa</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 7.000.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 14.000.000</p>
</div>
</div>
</div>

{/* image 4 */}
<div className="w-[285px] bg-[#F4F5F7] h-[446px] ml-8">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic4.png"} alt={"Pic4"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Respira</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Outdoor bar table and stool</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 500.000</p>
</div>
</div>
</div>

{/* SECOND row */}
<div className="mt-6 w-[1229px] h-[446px] sm: flex-col lg:flex-row flex items-center">

{/* Image 1 */}
<div className="w-[285px] h-[446px] bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic1.png"} alt={"Pic1"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Syltherine</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 2.500.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 3.500.000</p>
</div>
</div>
</div>

{/* image 2 */}
<div className="w-[285px] h-[446px] bg-[#F4F5F7] ml-7">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic2.png"} alt={"Pic2"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Leviosa</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 2.500.000</p>

</div>
</div>

{/* image 3 */}
<div className="w-[285px] h-[446px] ml-7 bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic3.png"} alt={"Pic3"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Lolito</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Luxury big sofa</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 7.000.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 14.000.000</p>
</div>
</div>
</div>

{/* image 4 */}
<div className="w-[285px] bg-[#F4F5F7] h-[446px] ml-8">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic4.png"} alt={"Pic4"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Respira</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Outdoor bar table and stool</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 500.000</p>
</div>
</div>
</div>

{/* THIRD row */}
<div className="mt-6 w-[1229px] h-[446px] sm: flex-col lg:flex-row flex items-center">

{/* Image 1 */}
<div className="w-[285px] h-[446px] bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic1.png"} alt={"Pic1"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Syltherine</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 2.500.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 3.500.000</p>
</div>
</div>
</div>

{/* image 2 */}
<div className="w-[285px] h-[446px] bg-[#F4F5F7] ml-7">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic2.png"} alt={"Pic2"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Leviosa</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 2.500.000</p>

</div>
</div>

{/* image 3 */}
<div className="w-[285px] h-[446px] ml-7 bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic3.png"} alt={"Pic3"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Lolito</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Luxury big sofa</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 7.000.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 14.000.000</p>
</div>
</div>
</div>

{/* image 4 */}
<div className="w-[285px] bg-[#F4F5F7] h-[446px] ml-8">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic4.png"} alt={"Pic4"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Respira</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Outdoor bar table and stool</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 500.000</p>
</div>
</div>
</div>

{/* FORTH row */}
<div className="mt-6 w-[1229px] h-[446px] sm: flex-col lg:flex-row flex items-center">

{/* Image 1 */}
<div className="w-[285px] h-[446px] bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic1.png"} alt={"Pic1"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Syltherine</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 2.500.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 3.500.000</p>
</div>
</div>
</div>

{/* image 2 */}
<div className="w-[285px] h-[446px] bg-[#F4F5F7] ml-7">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic2.png"} alt={"Pic2"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Leviosa</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Stylish cafe chair</p>
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 2.500.000</p>

</div>
</div>

{/* image 3 */}
<div className="w-[285px] h-[446px] ml-7 bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic3.png"} alt={"Pic3"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Lolito</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Luxury big sofa</p>
<div className="flex items-center">
<p className="text-black text-[20px] font-[Poppins] mr-8">Rp 7.000.000</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Rp 14.000.000</p>
</div>
</div>
</div>

{/* image 4 */}
<div className="w-[285px] bg-[#F4F5F7] h-[446px] ml-8">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic4.png"} alt={"Pic4"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Respira</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Outdoor bar table and stool</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 500.000</p>
</div>
</div>
</div>


        {/* Number Div */}
        <div className="h-[90px] w-[392px] mt-[60px] ml-[450px] flex sm:flex-col lg:flex-row pt-7">
          <div className="bg-[#B88E2F] h-[60px] w-[60px] rounded-md text-center text-white text-[20px] pt-4">1</div>
          <div className="bg-[#F9F1E7] h-[60px] w-[60px] rounded-md text-center ml-[38px] text-black text-[20px] pt-4">2</div>
          <div className="bg-[#F9F1E7] h-[60px] w-[60px] rounded-md text-center ml-[38px] text-black text-[20px] pt-4">3</div>
          <Link href="/singal_product"> <div className="bg-[#F9F1E7] h-[60px] w-[98px] rounded-md text-center ml-[38px] text-black text-[20px] pt-4">Next</div></Link>
        </div>
            </div>
            </Link>
            <IconFooter />
      </div>
    )
}