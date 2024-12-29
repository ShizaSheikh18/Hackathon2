import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Comparisonts, Dimension1, Dimension2, Dimension3, General, General2, product1, product2, product3, warranty1 } from "../constant/comparison"
import Link from "next/link"
import IconFooter from "../component/iconfooter"
import React from "react"


export default function Comparison(){
    return(
        <div>
              <div className="relative h-64 flex items-center justify-center bg-cover bg-center">
                        <Image src={"/pagesheader.png"} alt="checkout" objectFit="cover" layout="fill"></Image>
                    {/* Blurred Overlay */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
              
                    {/* Content */}
                    <div className="relative z-10 leading-[24px] text-center items-center">
                        <Image src="/logo.png" alt="logo" width={77} height={77} className="ml-[180px]"></Image>
                      <h1 className="text-[48px] font-semibold text-black font-[Poppins]">Product Comparison</h1>
                      <div className="text-black mt-2">
                        <span className="font-semibold">Home</span>
                        <span className="mx-1 font-semibold text-black">›</span>
                        <span className="font-[Poppins]">Comparison</span>
                      </div>
                    </div>
                    </div>

                    {/* GO TO PRODUCT PAGE */}
                    <div className="w-[1250px] h-[2735px] pt-[34px] ml-[54px] mr-[54px]">
                            <div className="w-[1250px] h-[370px] flex sm:flex-col lg:flex-row border-b-[1px] border-[#E8E8E8] px-12">
                                    <div className="w-[223px] h-[386px] pt-16 pr-5">
                                        <h1 className="text-black text-left font-[Poppins] text-[28px] font-black">Go to Product page for more 
                                        Products</h1>
                                        <p className="text-[#727272] text-left font-[Poppins] text-[20px] mt-3 underline decoration-[#727272]">View More</p>
                                    </div>
                                    
                                    <div className="w-[280px] h-[386px] ml-10">
                                    <Link href="/singal_product"><div className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-lg items-center px-4">
                                        <Image src={"/asgaardsofa.png"} alt={"Sofa Comparison"} width={239} height={142}></Image>
                                        </div>
                                        </Link>
                                        <h1 className="text-black text-left font-[Poppins] text-[24px] font-black mt-[18px]">Asgaard Sofa</h1>
                                        <p className="text-black text-left font-[Poppins] text-[18px] mt-1">Rs. 250,000.00</p>
                                        <div className="h-[20px] mt-2 flex items-center">
                                        <p className="text-black text-left font-[Poppins] text-[18px] mr-2">4.7</p>
                                        <Image src={"/stars.png"} alt={"Reviews"} width={124} height={20}></Image>
                                        <div className="w-[0.1px] h-[30px] bg-[#9F9F9F]"></div>
                                        <p className="text-[#727272] font-[Poppins] text-[13px] ml-4">204 Review</p>
                                        </div>
                                    </div>
                                
                                    <div className="w-[283px] h-[386px] ml-10">
                                    <Link href="/singal_product"><div className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-lg items-center px-4 place-items-center">
                                        <Image src={"/outdoorsofa.png"} alt={"Sofa Comparison1"} width={285} height={205} className="mb-5"></Image>
                                        </div></Link>
                                        <h1 className="text-black text-left font-[Poppins] text-[24px] font-black mt-[18px]">Outdoor Sofa Set</h1>
                                        <p className="text-black text-left font-[Poppins] text-[18px] mt-1">Rs. 224,000.00</p>
                                        <div className="h-[20px] mt-2 flex items-center">
                                        <p className="text-black text-left font-[Poppins] text-[18px] mr-2">4.2</p>
                                        <Image src={"/stars.png"} alt={"Reviews"} width={124} height={20}></Image>
                                        <div className="w-[0.1px] h-[30px] bg-[#9F9F9F]"></div>
                                        <p className="text-[#727272] font-[Poppins] text-[13px] ml-4">145 Review</p>
                                        </div>
                                    </div>

                                    <div className="w-[242px] h-[386px] ml-10 pt-10">
                                    <h1 className="text-black text-left font-[Poppins] text-[24px] font-black mt-[40px]">Add A Product</h1> 
                                    <Link href="/shop" ><div className="w-[242px] h-[39px] bg-[#B88E2F] text-white  rounded-sm flex text-[14px] px-2 py-2 font-[Poppins] mt-2">
                                    Choose a Product <ChevronDown className="ml-24"/>
                                    </div></Link>
                                    </div>
                            </div>


                            {/* GENERAL */}

                            <div className="flex sm:flex-col lg:flex-row pl-[42px]">
                                <div className="border-r-[1px] border-[#E8E8E8] h-[460px] w-[301px]">
                                    <h1 className="text-[28px] text-black font-[Poppins] pt-[42px] font-black">General </h1>
                                    <div>
                                        {
                                                    Comparisonts.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins]">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                </div>


                                <div className="border-r-[1px] border-[#E8E8E8] h-[460px] w-[301px] pt-[82px] pl-[42px]">
                                    <div>
                                        {
                                                    General.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins]">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                    </div>
                                

                                    <div className="border-r-[1px] border-[#E8E8E8] h-[460px] w-[301px] pt-[82px] pl-[42px] ">
                                    <div>
                                        {
                                                    General2.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins] mr-2">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                    </div>

                            </div>


                            {/* Product */}

                            <div className="flex sm:flex-col lg:flex-row pl-[42px]">
                                <div className="border-r-[1px] border-[#E8E8E8] h-[460px] w-[301px]">
                                    <h1 className="text-[28px] text-black font-[Poppins] pt-[80px] font-black">Product </h1>
                                    <div>
                                        {
                                                    product1.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins]">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                </div>


                                <div className="border-r-[1px] border-[#E8E8E8] h-[460px] w-[301px] pt-[122px] pl-[42px]">
                                    <div>
                                        {
                                                    product2.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins]">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                    </div>
                                

                                    <div className="border-r-[1px] border-[#E8E8E8] h-[460px] w-[301px] pt-[122px] pl-[42px] ">
                                    <div>
                                        {
                                                    product3.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins] mr-2">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                    </div>
                                    </div>
                            

                              {/* Dimensions */}

                              <div className="flex sm:flex-col lg:flex-row pl-[42px]">
                                <div className="border-r-[1px] border-[#E8E8E8] h-[490px] w-[301px]">
                                    <h1 className="text-[28px] text-black font-[Poppins] pt-[80px] font-black">Dimensions</h1>
                                    <div>
                                        {
                                                    Dimension1.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins]">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                </div>


                                <div className="border-r-[1px] border-[#E8E8E8] h-[490px] w-[301px] pt-[122px] pl-[42px]">
                                    <div>
                                        {
                                                    Dimension2.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins]">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                    </div>
                                

                                    <div className="border-r-[1px] border-[#E8E8E8] h-[490px] w-[301px] pt-[122px] pl-[42px] ">
                                    <div>
                                        {
                                                    Dimension3.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[30px] font-[Poppins] mr-2">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                    </div>
</div>

                                        {/* Warranty */}

 <div className="flex sm:flex-col lg:flex-row pl-[42px]">
                                <div className="border-r-[1px] border-[#E8E8E8] h-[920px] w-[301px]">
                                    <h1 className="text-[28px] text-black font-[Poppins] pt-[78px] font-black">Warranty</h1>
                                    <div>
                                        {
                                                    warranty1.map((lines) => {
                                        return(
                                            
                                                <div>
                                                    <p className="text-[20px] text-black mt-[80px] font-[Poppins]">{lines.items}</p>
                                                 </div>
                                            )
                                        })}
                                    </div>
                                    <p className="text-[20px] mt-[109px] text-black font-[Poppins] mr-2">Covered in Warranty</p>
                                    <p className="text-[20px] mt-[109px] text-black font-[Poppins] mr-2">Not Covered in Warranty</p>
                                    <p className="text-[20px] mt-[159px] text-black font-[Poppins] mr-2">Domestic Warranty</p>
                                </div>
                                    
                                <div className="border-r-[1px] border-[#E8E8E8] h-[920px] w-[301px] pl-[42px]">

                                    <div className="w-[226px] h-[50px] text-left mt-[195px]">
                                <p className="text-[20px] text-black font-[Poppins] mr-2">1 Year Manufacturing Warranty</p>
                                 </div>

                                 <div className="w-[241px] h-[125px] mt-[66px]">
                                <p className="text-[18px] text-black font-[Poppins] mr-2">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
                                 </div>

                                 <div className="w-[241px] h-[125px] mt-[12px]">
                                <p className="text-[18px] text-black font-[Poppins] mr-2">Warranty Against Manufacturing Defect</p>
                                 </div>

                                 <div className="w-[241px] h-[125px] mt-[12px]">
                                <p className="text-[18px] text-black font-[Poppins] mr-2">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                                 </div>
                                   
                                 <div className="w-[241px] h-[25px] mt-[70px]">
                                <p className="text-[18px] text-black font-[Poppins] mr-2">1 Year</p>
                                 </div>

                                 <div className="w-[215px] h-[64px] mt-[50px] bg-[#B88E2F] py-4 px-10  text-white text-[20px]">
                                Add To Cart
                                 </div>
                               </div>


                               <div className="border-r-[1px] border-[#E8E8E8] h-[920px] w-[301px] pl-[42px]">

<div className="w-[226px] h-[50px] text-left mt-[195px]">
<p className="text-[20px] text-black font-[Poppins] mr-2">1 Year Manufacturing Warranty</p>
</div>

<div className="w-[241px] h-[125px] mt-[66px]">
<p className="text-[18px] text-black font-[Poppins] mr-2">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
</div>

<div className="w-[241px] h-[125px] mt-[12px]">
<p className="text-[18px] text-black font-[Poppins] mr-2">Warranty of the product is limited to manufacturing defects only.</p>
</div>

<div className="w-[241px] h-[125px] mt-[12px]">
<p className="text-[18px] text-black font-[Poppins] mr-2">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
</div>

<div className="w-[241px] h-[25px] mt-[70px]">
<p className="text-[18px] text-black font-[Poppins] mr-2">3 Months</p>
</div>

<div className="w-[215px] h-[64px] mt-[50px] bg-[#B88E2F] py-4 px-10  text-white text-[20px]">
Add To Cart
</div>
</div>
                                    </div>
                                    
                    </div>
                <IconFooter />    
        </div>
    )
}