"use client"
import React from "react"
import { ChevronDown, Circle,} from "lucide-react"
import { Detail } from "../constant/checkout"
import Image from "next/image"
import Checkout from "../component/checkhead"
import IconFooter from "../component/iconfooter"


export default function Billing(){
    return(
        <div>
            <div>
            <Checkout />
        <div  className="pt-[63px] pl-[100px] pr-[98px] pb-[52px] flex sm:flex-col lg:flex-row">

            {/* billing Detail div */}
            <div className="w-[608px] h-[1500px] pl-[74px] pt-[35px] pr-[289px] pb-[35px] mr-5">
                <div className="text-[40px] p-1 text-black h-[54px] leading-[24px] w-[240px] font-[Poppins]">
                      Billing details
                </div>


                <div className="flex sm: flex-col lg:flex-row p-5 w-[480px] h-[150px]">
                    <div className="h-[112px] w-[212px] leading-[24px] text-16px font-[Poppins]"> First Name
                        <div className="w-[211px] h-[75px] mt-[22px] border-2 rounded-sm  border-gray-400 mr-2"></div>
                    </div>

                    <div className="h-[112px] w-[212px] ml-2 text-16px font-[Poppins] leading-[24px]"> Last Name
                    <div className="w-[211px] h-[75px] mt-[22px] border-2 rounded-sm  border-gray-400 mr-2"></div>
                    </div>
                    </div>
                
                <div>
    {
                Detail.map((billing) => {
    return(
        <div>
            <div>
                <h1 className="text-[16px] leading-[24px] text-black mt-5 font-[Poppins] mb-7">{billing.name}</h1>
                <div className="border-2 rounded-sm border-gray-400 w-[453px] p-2 h-[70px] mt-[15px]">
                {billing.icon == true  && <ChevronDown/>}
                </div>
          
        </div>
        </div>
    )
})}

<div className="border-2 rounded-sm text-center font-[Poppins] text-gray-400 border-gray-400 w-[453px] p-3  pt-5 h-[70px] mt-[50px] leading-[24px]">Addittional Information</div>
  </div>  
                    </div>
                {/* product Detail */}
          <div className=" ml-5 w-[608px] h-[789px] pt-[87px] pl-[37px] pr-[36px]">
<div className=" w-[533px] flex p-1 pt-6 leading-[24px]">
    <h1 className="text-black font-[Poppins] text-[24px]"> Product</h1>
    <h1 className="text-black font-[Poppins] text-[24px] ml-[370px]"> Subtotal</h1>
</div>

<div className="w-[533px] p-1 pt-6 flex leading-[24px]">
    <h1 className="text-gray-400 font-[Poppins] text-[18px]">Asgaard sofa <span className="font-semibold"> x 1</span></h1>
    <h1 className="text-black font-[Poppins] text-[18px] ml-[280px]">Rs. 250,000.00</h1>
    </div>

    <div className="w-[533px] pt-6 p-1 flex leading-[24px]">
    <h1 className="text-black font-[Poppins] text-[18px]">Subtotal</h1>
    <h1 className="text-black font-[Poppins] text-[18px] ml-[350px]">Rs. 250,000.00</h1>
    </div>

    <div className=" w-[533px] pt-6 p-1 flex leading-[24px]">
    <h1 className="text-black` font-[Poppins] text-[18px]">Total</h1>
    <h1 className="text-[#B88E2F] font-[Poppins] text-[24px] ml-[340px] font-semibold">Rs. 250,000.00</h1>
    </div>

    <div className='h-[1px] bg-black w-[527.01px] mt-[35px]'></div>

    <div className=" w-[533px] pt-2 p-1 flex leading-[24px]">
        <Image src="/Ellipse 1.png" alt="dot" width={30} height={0}></Image>
      <span className="text-black font-[Poppins] text-[18px] pt-2 p-1  ml-[15px] text-center"> Direct Bank Transfer </span>
    </div>

    <p className="text-[#9F9F9F] font-[Poppins] text-[18px] align-[justify] mt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account</p>
          
          <div className="flex w-[191px] h-[24px] items-center mt-2">
          <Circle strokeWidth={1.75} className="text-[#9F9F9F]" size={14}/> 
          <p className="text-[#9F9F9F] font-[Poppins] text-[18px] ml-5" >Direct Bank Transfer</p>
          </div>

          <div className="flex w-[191px] h-[24px] items-center mt-2">
          <Circle strokeWidth={1.75} className="text-[#9F9F9F]" size={14}/> 
          <p className="text-[#9F9F9F] font-[Poppins] text-[18px] ml-5" >Cash On Delivery</p>
          </div>

<p className="text-black font-[Poppins] text-[18px] text-justify mt-6">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-black font-[Poppins] text-[16px] text-justify font-semibold" >privacy policy.</span></p>

<div className="text-black font-[Poppins] ml-[120px] p-3 text-[22px] text-center border-2 border-black items-center w-[318px] h-[64px] rounded-lg mt-9"> Place Order</div>
          </div>
        </div>
        </div>
        <IconFooter />
        </div>
    )
}