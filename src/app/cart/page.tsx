import Image from "next/image"
import Link from "next/link"
import IconFooter from "../component/iconfooter"
import React from "react"
export default function Cart(){
    return(
        <div>
            <div className="relative h-64 w-[full] flex items-center justify-center bg-cover bg-center">
                        <Image src={"/pagesheader.png"} alt="checkout" objectFit="cover" layout="fill"></Image>
                    {/* Blurred Overlay */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
              
                    {/* Content */}
                    <div className="relative w-[full] z-10 leading-[24px] text-center items-center">
                        <Image src="/logo.png" alt="logo" width={77} height={77} className="ml-[5px]"></Image>
                      <h1 className="text-3xl font-bold text-black font-[Poppins]">Cart</h1>
                      <div className="text-black mt-2">
                        <span className="font-semibold">Home</span>
                        <span className="mx-1 font-semibold text-black">›</span>
                        <span className="font-[Poppins]">Cart</span>
                      </div>
                    </div>
                    </div>

            <div className="w-[full] h-[525px] pt-[72px] pb-[63px] px-[50px]">
                <div className="w-[1240px] h-[390px] flex ">
                    <div>
                        <div className="w-[817px] h-[55px] bg-[#F9F1E7] flex items-center py-2 px-2 font-black">
                            <p className="font-[Poppins] text-[16px] text-black ml-[142px]">Product</p>
                            <p className="font-[Poppins] text-[16px] text-black ml-[114px]">Price</p>
                            <p className="font-[Poppins] text-[16px] text-black ml-[137px]">Quantity</p>
                            <p className="font-[Poppins] text-[16px] text-black ml-[48px] ">Subtotal</p>
                        </div>

                        <div className="h-[90px] w-[817px] mt-[60px]">
                            <div className="flex">
                               <Link href={'/singal_product'} ><div className="h-[105px] w-[105px] bg-[#F9F1E7] rounded-lg py-2">
                                    <Image src={"/asgaardsofa.png"} alt={"Cart"} width={111} height={90}></Image>
                                </div></Link>

                                <p className="font-[Poppins] text-[16px] text-[#9F9F9F] ml-[37px] mt-[35px]">Asgaard sofa</p>
                                <p className="font-[Poppins] text-[16px] text-[#9F9F9F] ml-[69px] mt-[35px]">Rs. 250,000.00</p>
                                <div className="w-[32px] h-[32px] border-[#9F9F9F] text-black ml-[120px] mt-[35px] border-[0.1px] rounded-lg py-1 px-2">1</div>
                                <p className="font-[Poppins] text-[16px] text-black font-black ml-[69px] mt-[35px]">Rs. 250,000.00</p>
                                <div  className="ml-[52px] mt-[35px] w-[21px] h-[21.88px] relative">
                                <Image src={"/trash.png"} alt={"Trash"} objectFit="cover" layout="fill"/></div>
                            </div>

                        </div>
                            </div>
                        <div className="w-[393px] h-[390px] bg-[#F9F1E7] ml-[30px] py-[15px] px-[70px]">
                                <h1 className="font-[Poppins] text-[32px] text-black ml-[42px] font-black">Cart Totals</h1>
                        <div className="flex mt-[61px]">
                        <p className="font-[Poppins] text-[16px] text-black">Subtotal</p>
                        <p className="font-[Poppins] text-[16px] text-[#9F9F9F] ml-[100px]">Rs. 250,000.00</p>
                        </div>
                        <div className="flex mt-[31px]">
                        <p className="font-[Poppins] text-[16px] text-black">Total</p>
                        <p className="font-[Poppins] text-[20px] text-[#B88E2F] ml-[95px]">Rs. 250,000.00</p>
                        
                        </div>

                        <div className="mt-[45px] w-[222px] h-[58.95px] border-[1px] border-black rounded-lg py-3 px-14 text-[20px]">
                       <Link href="/checkout">  Check Out </Link>
                        </div>
                        </div>
                </div>
            </div>
            <IconFooter />
        </div>
    )
}