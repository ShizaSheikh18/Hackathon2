"use client"
import Image from "next/image"
import React from "react"
import IconFooter from "../component/iconfooter"
import { MapPin, Phone } from "lucide-react"



export default function Contact(){
    return(
        <div>
        <div className="relative h-64 w-[full] flex items-center justify-center bg-cover bg-center">
            <Image src={"/pagesheader.png"} alt="checkout" objectFit="cover" layout="fill"></Image>
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
  
        {/* Content */}
        <div className="relative w-[full] z-10 leading-[24px] text-center items-center">
            <Image src="/logo.png" alt="logo" width={77} height={77} className="ml-[17px]"></Image>
          <h1 className="text-3xl font-bold text-black font-[Poppins]">Contact</h1>
          <div className="text-black mt-2">
            <span className="font-semibold">Home</span>
            <span className="mx-1 font-semibold text-black">›</span>
            <span className="font-[Poppins]">Contact</span>
          </div>
        </div>
        </div>

        {/* Get In Touch With Us */}

           <div className="w-[full] h-[1144px] pt-[98px] text-center text-black font-[Poppins] text-[36px]">
          <h1 className="font-black"> Get In Touch With Us </h1>
           <p className="text-[#9F9F9F] ml-[350px] mr-[350px] font-[Poppins] text-[16px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="h-[923px] w-[1058px] mt-[22px] ml-[190px] flex">
                      <div className="w-[393px] h-[537px] mt-[68px] flex">
                                <div className="w-[25px]  h-[450px] ml-[45px] mt-[46.12px]">
                                <Image src={"/address.png"} alt={"Address"} width={22} height={27.59} />
                                <Phone fill="black" size={30} stroke="0" className="mt-[137.29px]" />
                                <Image src={"/clock.png"} alt={"Clock"} width={23} height={23} className="mt-[99px]"/>
                                </div>

                                <div className="w-[212px]  h-[450px] ml-[30px] mt-[58px] text-left">
                                  <h1 className="text-black font-black font-[Poppins] text-[24px]">Address</h1>
                                  <p className="text-black font-[Poppins] text-[16px] mr-[15px]">236 5th SE Avenue, New York NY10000, United States</p>
                                  <h1 className="text-black font-black font-[Poppins] text-[24px] mt-[42px]">Phone</h1>
                                  <p className="text-black font-[Poppins] text-[16px] mr-[15px]">Mobile: +(84) 546-6789
                                  Hotline: +(84) 456-6789</p>
                                  <h1 className="text-black font-black font-[Poppins] text-[24px] mt-[42px]">Working Time</h1>
                                  <p className="text-black font-[Poppins] text-[16px] mr-[15px]">Monday-Friday: 9:00 - 22:00
                                  <br />Saturday-Sunday: 9:00 - 21:00
                                  </p>
                                </div>
                      </div>
                      <div className="w-[635px] h-[923px] ml-[30px] px-[52px]">
                              <div className="w-[531px] h-[741px] mt-[119px] text-start">
                               <h1  className="text-black font-black font-[Poppins] text-[16px]">Your name</h1>
                               <div className="w-[531px] h-[75px] border-[1px] border-[#9F9F9F] text-[16px] font-[Poppins] rounded-lg mt-[22px] text-[#9F9F9F] py-5 pl-10 ">Abc</div>
                               <h1  className="text-black font-black font-[Poppins] text-[16px] mt-[36px]">Email address</h1>
                               <div className="w-[531px] h-[75px] border-[1px] border-[#9F9F9F] text-[16px] font-[Poppins] rounded-lg mt-[22px] text-[#9F9F9F] py-5 pl-10 ">Abc@def.com</div>
                               <h1  className="text-black font-black font-[Poppins] text-[16px] mt-[36px]">Subject</h1>
                               <div className="w-[531px] h-[75px] border-[1px] border-[#9F9F9F] text-[16px] font-[Poppins] rounded-lg mt-[22px] text-[#9F9F9F] py-5 pl-10 ">This is an optional</div>
                               <h1  className="text-black font-black font-[Poppins] text-[16px] mt-[36px]">Message</h1>
                               <div className="w-[531px] h-[120px] border-[1px] border-[#9F9F9F] text-[16px] font-[Poppins] rounded-lg mt-[22px] text-[#9F9F9F] py-5 pl-10 ">Hi! i’d like to ask about</div>
                               <div className="w-[237px] h-[55px] bg-[#B88E2F] rounded-md text-white text-center text-[16px] font-[Poppins] py-4 mt-[49px] ml-2"> Submit</div>
                               
                              
                              
                              
                              </div>
                      </div>
                </div>
           </div>
           <IconFooter />
      </div>
    )
}