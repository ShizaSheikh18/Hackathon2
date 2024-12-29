
import Image from "next/image";
import React from "react";

export default function IconFooter(){
    return(
        <div>
            <div className="h-[270px] w-[full] bg-[#FAF3EA] mt-12 pr-4 pl-10 flex sm:flex-col lg:flex-row items-center">

                <div className="w-[60px] h-[60px] relative">
            <Image src={"/icon1.png"} alt="Trophy" objectFit="cover" layout="fill"></Image>
                </div>
                <div className="font-[Poppins] ml-2">
                    <h1 className="text-black text-[25px] font-semibold">High Quality</h1>
                    <p className="text-[#898989] text-[20px]">crafted from top materials</p>
                </div>

 <div className="w-[60px] h-[60px] relative ml-[80px]">
            <Image src={"/icon2.png"} alt="Granty" objectFit="cover" layout="fill"></Image>
                </div>
                <div className="font-[Poppins] ml-2">
                    <h1 className="text-black text-[25px] font-semibold">Warranty Protection</h1>
                    <p className="text-[#898989] text-[20px]">Over 2 years</p>
                </div>

                <div className="w-[60px] h-[60px] relative ml-[80px]">
            <Image src={"/icon3.png"} alt="Shipping" objectFit="cover" layout="fill"></Image>
                </div>
                <div className="font-[Poppins] ml-2">
                    <h1 className="text-black text-[25px] font-semibold">Free Shipping</h1>
                    <p className="text-[#898989] text-[20px]">Order over 150 $</p>
                </div>

                <div className="w-[60px] h-[60px] relative ml-[80px]">
            <Image src={"/icon4.png"} alt="Help" objectFit="cover" layout="fill"></Image>
                </div>
                <div className="font-[Poppins] ml-2">
                    <h1 className="text-black text-[25px] font-semibold">24 / 7 Support</h1>
                    <p className="text-[#898989] text-[20px]">Dedicated support</p>
                </div>

            </div>
        
        </div>
    )
}