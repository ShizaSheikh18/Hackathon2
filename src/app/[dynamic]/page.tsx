import Link from "next/link";
import Image from "next/image";
import { ChevronRight, LockKeyhole } from "lucide-react";
import React from "react";


export default function Dynamic(){
    return(
        <div>
        <div>

        
            <div className="w-[full] h-[100px] bg-[#F9F1E7] flex text-center items-center pl-20">
            <p className="text-[#9F9F9F] text-[18px] font-[Poppins] ml-5 mr-5"> Home</p>
            <ChevronRight />
            <p className="text-[#9F9F9F] text-[18px] font-[Poppins] ml-5 mr-5"> Shop</p>
            <ChevronRight />
            <div className="w-[0.1px] h-[37px] bg-[#9F9F9F] ml-5 mr-5"></div>
            <p className="text-black text-[18px] font-[Poppins] ml-5 mr-5">Asgaard sofa</p>
            </div>

            {/* ASGAARD SOFA */}
            <div className="w-[full] h-[820px] pt-10 pb-5 pr-[100px] pl-[80px] ">
                <div className="w-[1241.01px] h-[730px] flex sm:flex-col lg:flex-row" >

                    {/* image set */}
                    <div className="w-[606.01px] h-[730px] flex sm:flex-col lg:flex-row">
                        <div>
                            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg ">
                        <Image src={"/sofa1.png"} alt={"Sofa1"} width={76} height={80}></Image>
                        </div>
                        <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg mt-[50px]">
                        <Image src={"/sofa2.png"} alt={"Sofa2"} width={76} height={80}></Image>
                        </div>
                        <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg mt-[50px]">
                        <Image src={"/sofa3.png"} alt={"Sofa3"} width={76} height={80}></Image>
                        </div>
                        <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg mt-[50px]">
                        <Image src={"/sofa4.png"} alt={"Sofa4"} width={76} height={80}></Image>
                        </div>
                        </div>
                        <div className="w-[423px] h-[500px] bg-[#F9F1E7] rounded-mg pt-[120px] ml-[37px]"> 
                            <Image src={"/asgaardsofa.png"} alt={"Asgaard Sofa"} width={481} height={391}></Image>
                        </div>
                    </div>

                                {/* DETAIL */}
                    <div className="w-[606.01px] h-[730px] ml-10">
                        <h1 className="text-[42px] text-black font-[Poppins]">Asgaard sofa</h1>
                        <p className="text-[24px] text-[#9F9F9F] font-[Poppins]">Rs. 250,000.00</p>
                        <div className="flex sm:flex-col lg:flex-row items-center">
                            <Image src={"/stars.png"} alt={"Reviews"} width={124} height={20}></Image>
                            <div className="w-[0.1px] h-[35px] bg-[#9F9F9F] ml-[35px]"></div>
                            <p className="text-[13px] text-[#9F9F9F] font-[Poppins] ml-5">5 Customer Review</p>
                        </div>
                        <div className="h-[80px] w-[424px] mt-2">
                            <p className="text-[14px] text-[#9F9F9F] font-[Poppins] text-left">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

                                </p>
                        </div>

                        <div className="w-[123px] h-[63px] text-[15px] text-[#9F9F9F] font-[Poppins]">size
                            <div className="flex sm:flex-col lg:flex-row mt-5">
                            <div className="w-[30px] h-[30px] text-center bg-[#B88E2F] rounded-md text-[13px] text-white font-[Poppins] pt-1">L</div>
                            <div className="w-[30px] h-[30px] text-center bg-[#F9F1E7] rounded-md text-[13px] text-black font-[Poppins] pt-1 ml-3">XL</div>
                            <div className="w-[30px] h-[30px] text-center bg-[#F9F1E7] rounded-md text-[13px] text-black font-[Poppins] pt-1 ml-3">XS</div>
                        </div>
                        </div>

                        <div className="w-[123px] h-[63px] text-[15px] text-[#9F9F9F] font-[Poppins] mt-8">Color
                            <div className="flex sm:flex-col lg:flex-row mt-5">
                            <Image src={"/purple.png"} alt={"PurpleCircle"} width={30} height={30}></Image>
                            <Image src={"/black.png"} alt={"PurpleCircle"} width={30} height={30} className="ml-3"></Image>
                            <Image src={"/golden.png"} alt={"PurpleCircle"} width={30} height={30} className="ml-3"></Image>
                        </div>
                        </div>

                        <div className="flex sm:flex-col lg:flex-row mt-10">
                        <div className="w-[123px] h-[64px] rounded-lg border-[#9F9F9F] border-2 flex py-5 px-4">
                            <p className="mr-[35px]">-</p> <p className="mr-[35px]">1</p> <p>+</p>
                        </div>

                        <Link href={"/"}>
                        <div className="w-[215px] h-[64px] rounded-lg border-black border-2 flex py-3 pl-[50px] ml-[18px]">
                            <p className="text-[20px] text-black font-[Poppins]">Add To Cart</p>
                        </div>
                        </Link>

                            <Link href={"/product-comparison"}>
                        <div className="w-[215px] h-[64px] rounded-lg border-black border-2 flex py-3 pl-[50px] ml-[18px]">
                        <p className="text-[20px] text-black font-[Poppins]">+</p>
                        <p className="text-[20px] text-black font-[Poppins] ml-4">Compare</p>
                        </div>
                        </Link>
                    </div>
                    <div className="bg-[#D9D9D9] w-[605.01px] h-[0.1px] mt-10"></div>

                    <div className="flex mt-10">
                        
                        <div className="text-[18px] font-[Poppins] text-[#9F9F9F] text-left">
                                <p>SKU</p>
                                <p>Category</p>
                                <p>Tags</p>
                                <p>Share</p>
                        </div>

                        <div className="text-[18px] font-[Poppins] text-[#9F9F9F] text-center ml-4">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                        </div>

                        <div className="text-[18px] font-[Poppins] text-[#9F9F9F] text-left ml-2">
                                <p>SS001</p>
                                <p>Sofas</p>
                                <p>Sofa, Chair, Home, Shop</p>
                                <div className="flex">
                                    <Image src={"/facebook.png"} alt={"Facebook"} width={20} height={20}></Image>
                                    <Image src={"/linkdin.png"} alt={"Linkdin"} width={20} height={20} className="ml-5"></Image>
                                    <Image src={"/twitter.png"} alt={"Twitter"} width={20} height={20} className="ml-5"></Image>
                                </div>
                        </div>

                        <div></div>
                    </div>
                    </div>

                </div>

            </div>

            {/* Description */}
                        <div className="h-[744px] w-[full] items-center pt-[48px] pl-[70px] pr-[101px] pb-[65px] border-y-[1px] border-[#D9D9D9]">
                            <div className="h-[36px] w-[649px] flex items-center ml-[300px] font-semibold">
                                <p className="text-black text-[24px] font-[Poppins] ml-2">Description</p>
                                <p className="text-[#9F9F9F] text-[24px] font-[Poppins] ml-[75px]">Additional Information</p>
                                <p className="text-[#9F9F9F] text-[24px] font-[Poppins] ml-[75px]">Reviews [5]</p>
                            </div>

                            <div className="h-[48px] w-[1026px] items-left mt-[37px] ml-28">
                            <p className="text-[#9F9F9F] text-[16px] font-[Poppins]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                            </div>

                            <div className="h-[96px] w-[1026px] items-left mt-[30px] ml-28">
                            <p className="text-[#9F9F9F] text-[16px] font-[Poppins]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                            </div>

                            <div className="flex h-[348px] w-[1239px] mt-[36px] ">
                                <Image src={"/whitesofa.png"} alt={"White_Sofa"} width={605} height={348} />
                                <Image src={"/sofaset.png"} alt={"White_Sofa_set"} width={605} height={348} className="ml-[29px]" />
                            </div>
                        </div>

                        {/* Related Product */}
                        <div className="w-[full] h-[777px] pt-[55px] pb-[104px] pl-[80px] pr-[101px]">
                                    <h1 className="text-black text-[36px] font-[Poppins] font-semibold ml-[500px]">Related Products</h1>

                                    {/* ROW*/}
                                    <div className="mt-[26px] w-[1229px] h-[446px] sm: flex-col lg:flex-row flex items-center">
                                    
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

                                    <button className="text-[#B88E2F] text-[18px]  font-semibold font-[Poppins] mt-[44px] ml-[500px] border-[#B88E2F] border-[1px] bg-white h-[48px] w-[245px] items-center">
                                    <Link href={"/shop"}> Show More</Link></button>
                        </div>  
                        
                        
                        <div className=" bg-black inset-0 bg-opacity-50 overflow-hidden shadow-lg absolute h-[3100px]"></div>
                        
        </div>
        <div className="w-[417px] h-[746px] bg-white inset-0  overflow-hidden absolute ml-[930px] py-[28px]">
        
        <div  className="w-[350px] h-[334px] ml-[27px]">

                <div className="flex items-center">
                <h1 className="text-[24px] text-black font-black font-[Poppins]">Shopping Cart</h1>
                <LockKeyhole color="#9F9F9F" className=" ml-[175px] w-[16.63px] h-[19px] mt-[7px]" />
                </div>

                <div className="h-[0.1px] w-[287px] bg-[#D9D9D9] ml-[25px] mt-[26px]"></div>


                <div className="flex items-center">
                    <div className="w-[108px] h-[105px] bg-[#F9F1E7] rounded-lg mt-[42px] relative">
                        <Image src={"/asgaardsofa.png"} alt="Sider" objectFit="cover" layout="fill" />


                        <div className="ml-[130px] w-[130px] h-[56px] mt-[20px]">
                            <h1 className="text-[16px] text-black font-black font-[Poppins] ml-[10px]">Asgaard sofa</h1>
                           <div className="flex items-center">
                            <p className="text-[16px] text-black  font-[Poppins]">1</p>
                            <p className="text-[12px] text-black  font-[Poppins] ml-[15px]">x</p>
                            <p className="text-[12px] text-[#B88E2F]  font-[Poppins] ml-[15px]">Rs. 250,000.00</p>
                            </div>
                        </div>

                    </div>
                         <Image src={"/cancel.png"} alt="Cancel" width={20} height={20} className="ml-[215px] mt-[15px]"/>
                </div>


                <div className="flex items-center">
                    <div className="w-[108px] h-[105px] bg-[#F9F1E7] rounded-lg mt-[20px] relative">
                        <Image src={"/multicution.png"} alt="Cutions" objectFit="cover" layout="fill" className="rounded-lg" />


                        <div className="ml-[130px] w-[130px] h-[56px] mt-[20px]">
                            <h1 className="text-[16px] text-black font-black font-[Poppins] ml-[10px]">Casaliving Wood</h1>
                           <div className="flex items-center">
                            <p className="text-[16px] text-black  font-[Poppins]">1</p>
                            <p className="text-[12px] text-black  font-[Poppins] ml-[15px]">x</p>
                            <p className="text-[12px] text-[#B88E2F]  font-[Poppins] ml-[15px]">Rs. 270,000.00</p>
                            </div>
                        </div>

                    </div>
                         <Image src={"/cancel.png"} alt="Cancel" width={20} height={20} className="ml-[215px] mt-[15px]"/>
                </div>
            </div>

            <div className="w-[368px] h-[25px] mt-[265px] ml-[27px] flex items-center">
                <p className="text-[16px] text-black  font-[Poppins]">Subtotal</p>
                <p className="text-[16px] text-[#B88E2F]  font-[Poppins] ml-[150px] font-semibold">Rs. 520,000.00</p>
            </div>
            <div className="h-[0.1px] w-[417px] bg-[#D9D9D9] mt-[23px]"></div>

            <div className="w-[368px] h-[30px] ml-[27px] flex items-center mt-[26px]">
                    <Link href={"/cart"} ><div className="w-[87px] h-[30px] border-[2px] border-black rounded-lg text-[12px] text-black  font-[Poppins] text-center py-1 px-4">
                    Cart
                    </div></Link>

                    <Link href={"/checkout"}> <div className="w-[118px] h-[30px] ml-[14px] border-[2px] border-black rounded-lg text-[12px] text-black  font-[Poppins] text-center py-1 px-4">
                    Checkout
                    </div></Link>

                    <Link href={"/product-comparison"} ><div className="w-[135px] h-[30px] ml-[14px] border-[2px] border-black rounded-lg text-[12px] text-black  font-[Poppins] text-center py-1 px-4">
                    Comparison
                    </div></Link>
            </div>

        </div>
        </div>
    )
}