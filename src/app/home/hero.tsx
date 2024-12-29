"use client"
import React from "react"
import { ArrowRightLeft, ChevronRight, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function Hero(){
    return(
        <div>
            {/* Hero section */}
            <div className="w-[full] h-[850.90px] relative ">
                <Image src="/hero.png" alt="hero" objectFit="cover" layout="fill"></Image>
                <div className="w-[643px] h-[443px] bg-[#FFF3E3] pt-[62px] pr-[43px] text-justify pl-[39px] pb-[37px] absolute mt-[250px] ml-[650px] mb-[37px]">
                    <div className="bg-[#FFF3E3] w-[561px] h-[344px] p-2 pr-10">
                        <p className="font-[Poppins] text-black text-[18px]">New Arrival</p>
                        <div className="w-[559px] h-[127px] text-[52px] font-[Poppins] text-[#B88E2F] font-bold">Discover Our <br/> New Collection</div>
                        <p className="text-[16px] font-[Poppins] mt-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                        <div className="w-[222px] bg-[#B88E2F] text-white text-[16px] font-[Poppins] mt-[25px] text-center pt-[25px] pb-[25px] pr-[70px] pl-[70px]"> Buy Now</div>
                    </div>
                </div>
            </div>

            {/* Browse the rang */}
            <div className="pl-[102px] pr-[102px] pt-[69px] pb-[69px]">
                <div className="w-[1183px] h-[700px] text-black text-[34px] font-[Poppins] font-bold text-center pt-2">Browse The Range 
                   <p className=" text-black text-[22px] ml-8 font-[Poppins] font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                   <div className=" h-[500px] w-[1183px] mt-10 flex items-center sm: flex-col lg:flex-row"> 
                    <div className="w-[381px] h-[480px] ml-2 mr-2 relative"><Image src={"/dining.png"} alt={"Dining"} objectFit="cover" layout="fill"></Image></div>
                    <div className="w-[381px] h-[480px] ml-2 mr-2 relative"><Image src={"/living.png"} alt={"Living"} objectFit="cover" layout="fill"></Image></div>
                    <div className="w-[381px] h-[480px] ml-2 mr-2 relative"><Image src={"/bedroom.png"} alt={"Bedroom"} objectFit="cover" layout="fill"></Image></div>
                   </div>
                   <div className="pt-6 pb-6 w-[1183px] flex items-center sm: flex-col lg:flex-row">
                    <p className="text-black text-[24px] ml-[158px] mr-[151px] text-center">Dining</p>
                    <p className="text-black text-[24px] ml-[166px] mr-[151px] text-center">Living</p>
                    <p className="text-black text-[24px] ml-[176px] mr-[151px] text-center">Bedroom</p>
                   </div>
                </div>

                        {/* Product */}
               <div className="w-[1229px] h-[1090px]">
                 <p className="text-black text-[34px] font-[Poppins] font-bold text-center pt-2"> Our Products</p>
                {/* 1st row */}
                <div className="mt-6 w-[1229px] h-[446px] sm: flex-col lg:flex-row flex items-center">

                    {/* Image 1 */}
                    <Link href={"/singal_product"}>
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
                </Link>
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
                    <Link href={"/singal_product"}>
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
                </Link>
                  {/* image 4 */}
                  <Link href={"/singal_product"}>
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
                </Link>
               </div>

           {/* 2nd row */}
               <div className="mt-8 w-[1229px] h-[446px] flex items-center sm: flex-col lg:flex-row">

{/* Image 5 */}
<Link href={"/singal_product"}>
<div className="w-[285px] h-[446px] bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic5.png"} alt={"Pic5"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Grifo</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Night lamp</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 1.500.000</p>
</div>
</div>
</Link>


{/* image 6 */}
<Link href={"/singal_product"}>
<div className="w-[285px] h-[446px] ml-7 bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic6.png"} alt={"Pic6"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Muggo</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Small mug</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 150.000</p>
</div>
</div>
</Link>

{/* image 7 */}
<Link href={"/singal_product"}>
<div className="w-[285px] h-[446px] ml-7 bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic7.png"} alt={"Pic7"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className=" mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Pingky</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Cute bed set</p>
<div className="flex items-center">
          <p className="text-black text-[20px] font-[Poppins] mr-8">Rp 7.000.000</p>
          <p className="text-[#898989] text-[16px] font-[Poppins]">Rp 14.000.000</p>
                </div>
</div>
</div>
</Link>

{/* image 8 */}
<Link href={"/singal_product"}>
<div className="w-[285px] h-[446px] ml-8 bg-[#F4F5F7]">
<div className="w-[285px] h-[301px] relative"><Image src={"/pic8.png"} alt={"Pic8"} objectFit="cover" layout="fill"></Image>
</div>
{/* detail */}
<div className="mt-5 w-[249px] h-[99px] ml-4 mr-3 mb-10">
<p className="text-black text-[24px] font-[Poppins] font-semibold">Potty</p>
<p className="text-[#898989] text-[16px] font-[Poppins]">Minimalist flower pot</p>
<p className="text-black text-[20px] font-[Poppins]">Rp 500.000</p>
</div>
</div>
</Link>
</div>

<button className="text-[#B88E2F] text-[18px]  font-semibold font-[Poppins] mt-10 ml-[480px] border-[#B88E2F] border-[1px] bg-white h-[48px] w-[245px] items-center">
    <Link href={"/shop"}> Show More</Link></button>
 </div>
</div>

       {/* Beautifull Room Inspiration */}
       <div className="bg-[#FCF8F3] mt-[60px] w-[1080px] h-[680px] flex sm:flex-row lg:flex-row">
            <div className="mt-[150px] h-[200px] w-[400px] ml-5 mr-5 mb-[50px]">
                <p className="text-black text-[40px] font-[Poppins] font-semibold">50+ Beautiful <br />rooms 
                <br />inspiration</p>
                <p className="text-black text-[16px] font-[Poppins]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <div className="bg-[#B88E2F] pt-3 pb-3 pl-5 pr-8 text-[16px] font-[Poppins] text-white">Explore More</div>
            </div>
            <div className=" w-[972.43px] h-[582px] ml-[140px] flex mt-16">
            <div className="w-[328.48px] h-[582px] mb-[15px] mr-5 relative">
                <Image src={"/room1.png"} alt={"Room1"} objectFit="cover" layout="fill"></Image>
            </div>
            <div className="w-[302.46px] h-[486px] relative mr-5">
                <Image src={"/image1.png"} alt={"Room2"} objectFit="cover" layout="fill"></Image>
                <div className="bg-white w-[39.03px] h-[48px] absolute ml-[270px] mt-[270px] rounded-full text-[#B88E2F] pt-3 pb-2 pr-2 pl-3 "> <ChevronRight/> </div>
            </div>
            <div className="w-[302.46px] h-[486px] relative">
                <Image src={"/image2.png"} alt={"Room3"} objectFit="cover" layout="fill"></Image>
            </div>
            </div>
        </div>

        {/* FuniroFurniture */}
        <div className="w-[1350px] h-[900px] text-center sm:flex-col lg:flex-row text-black text-[20px] font-[Poppins]" >
        Share your setup with
        <h1 className=" text-[40px] font-[Poppins] font-semibold">#FuniroFurniture</h1>

                    <div className="flex sm:flex-col lg:flex-row">

            {/* set 1 */}
            <div className=" mr-5 sm:flex-col lg:flex-row">
                <div className="flex sm:flex-col lg:flex-row ">
                    {/* img1 */}
                <div className=" w-[200px] h-[382px] mr-5 relative">
                    <Image src={"/bookshelf.png"} alt={"IMG1"} objectFit="cover" layout="fill"></Image> 
                    </div>

                {/* img2 */}
                <div className=" w-[370px] h-[312px] mt-[70px] relative">
                <Image src={"/laptop.png"} alt={"IMG2"} objectFit="cover" layout="fill"></Image> 
                </div>
                </div>

                <div className="flex sm:flex-col lg:flex-row mt-2">

                    {/* img6 */}
                <div className=" w-[270px] h-[323px] mr-5 relative">
                <Image src={"/brownchair.png"} alt={"IMG6"} objectFit="cover" layout="fill"></Image> 
                 </div>

                {/* img7 */}
                <div className=" w-[300px] h-[242px] mb-14 relative">
                <Image src={"/camera.png"} alt={"IMG7"} objectFit="cover" layout="fill"></Image> 
                </div>
                </div>
            </div>

                   {/* set 2 img3 */}
                   <div className="w-[295px] mr-5 h-[392px] mt-[190px] relative">
                   <Image src={"/dininghall.png"} alt={"IMG3"} objectFit="cover" layout="fill"></Image> 
                   </div>

            {/* set 3 */}
         <div className="sm:flex-col lg:flex-row">

         <div className="flex sm:flex-col lg:flex-row"> 

                    {/* img4 */}
                <div className=" w-[250px] h-[348px] mr-5 mt-[40px] relative"> 
                <Image src={"/bed.png"} alt={"IMG4"} objectFit="cover" layout="fill"></Image> 
                </div>

                {/* img5 */}
                <div className=" w-[200px] h-[375px] mt-[10px] relative">
                <Image src={"/dininghall.png"} alt={"IMG5"} objectFit="cover" layout="fill"></Image> 
                </div>
                </div>

                <div className="flex mt-5 sm:flex-col lg:flex-row">

                    {/* img8 */}
                <div className=" w-[188px] h-[323px] mr-5 relative">
                <Image src={"/frame.png"} alt="IMG8" objectFit="cover" layout="fill"></Image> 
                     </div>

                {/* img9 */}
                <div className=" w-[258px] h-[196px] mb-14 relative">
                <Image src={"/kitchen.png"} alt="IMG9" objectFit="cover" layout="fill"></Image> 
                </div>
                </div>
            </div>
          </div>
            </div>

        </div>
    )
}