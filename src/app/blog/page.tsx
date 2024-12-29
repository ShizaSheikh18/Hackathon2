import Image from "next/image";
import IconFooter from "../component/iconfooter";
import { Search } from "lucide-react";
import { Category } from "../constant/blog";
import React from "react";

export default function Blog(){
    return(
     <div>
                <div className="relative h-64 w-[full] flex items-center justify-center bg-cover bg-center">
                    <Image src={"/pagesheader.png"} alt="checkout" objectFit="cover" layout="fill"></Image>
                {/* Blurred Overlay */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
          
                {/* Content */}
                <div className="relative w-[full] z-10 leading-[24px] text-center items-center">
                    <Image src="/logo.png" alt="logo" width={77} height={77} className="ml-[5px]"></Image>
                  <h1 className="text-3xl font-bold text-black font-[Poppins]">Blog</h1>
                  <div className="text-black mt-2">
                    <span className="font-semibold">Home</span>
                    <span className="mx-1 font-semibold text-black">›</span>
                    <span className="font-[Poppins]">Blog</span>
                  </div>
                </div>
                </div>

                {/* DETAILS */}
                <div className="w-[full] h-[2710px]  mb-[52px] flex">
                    <div className="w-[820px] h-[2490px]  mt-[106px] ml-[97px] mr-[30px]">
                          <Image src={"/whitelaptop.jpg"} alt="Laptop" width={820} height={500} className="rounded-lg" />
                          <div className="mt-[15px] w-[349px] h-[24px] flex items-center">
                            <div className="w-[14.8px] h-[16.15px] relative">
                            <Image src={"/admin.png"} alt="Admin" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[7px]">Admin</p>

                            <div className="w-[16.67px] h-[16.67px] relative ml-[35px]">
                            <Image src={"/date.png"} alt="Date" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[11px]">14 Oct 2022</p>

                            <div className="w-[18.91px] h-[18.91px] relative ml-[35px]">
                            <Image src={"/wood.png"} alt="Wood" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[7px]">Wood</p>
                          </div>

                          <h1 className="text-[40px] text-black font-[Poppins] font-black mt-[15px]">Going all-in with millennial design</h1>
                          <p className="text-[15px] text-[#9F9F9F] font-[Poppins] mt-[12px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                          <h2 className="text-[18px] text-black font-[Poppins] mt-[30px]">Read more</h2>
                          <div className="h-[0.1px] w-[75px] bg-black mt-[12px] ml-1"></div>
                          <Image src={"/writehand.png"} alt="Write" width={820} height={500} className="rounded-lg mt-[54px]" />

                          <div className="mt-[15px] w-[349px] h-[24px] flex items-center">
                            <div className="w-[14.8px] h-[16.15px] relative">
                            <Image src={"/admin.png"} alt="Admin" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[7px]">Admin</p>

                            <div className="w-[16.67px] h-[16.67px] relative ml-[35px]">
                            <Image src={"/date.png"} alt="Date" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[11px]">14 Oct 2022</p>

                            <div className="w-[18.91px] h-[18.91px] relative ml-[35px]">
                            <Image src={"/wood.png"} alt="Wood" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[7px]">Wood</p>
                          </div>

                          <h1 className="text-[40px] text-black font-[Poppins] font-black mt-[15px]">Exploring new ways of decorating</h1>
                          <p className="text-[15px] text-[#9F9F9F] font-[Poppins] mt-[12px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                          <h2 className="text-[18px] text-black font-[Poppins] mt-[30px]">Read more</h2>
                          <div className="h-[0.1px] w-[75px] bg-black mt-[12px] ml-1"></div>

                          <Image src={"/tablet.png"} alt="Tablet" width={820} height={500} className="rounded-lg mt-[54px]" />

                       <div className="mt-[15px] w-[349px] h-[24px] flex items-center">
                            <div className="w-[14.8px] h-[16.15px] relative">
                            <Image src={"/admin.png"} alt="Admin" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[7px]">Admin</p>

                            <div className="w-[16.67px] h-[16.67px] relative ml-[35px]">
                            <Image src={"/date.png"} alt="Date" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[11px]">14 Oct 2022</p>

                            <div className="w-[18.91px] h-[18.91px] relative ml-[35px]">
                            <Image src={"/wood.png"} alt="Wood" objectFit="cover" layout="fill" />
                            </div>
                            <p className="text-[16px] text-[#9F9F9F] font-[Poppins] ml-[7px]">Wood</p>
                          </div>

                          <h1 className="text-[40px] text-black font-[Poppins] font-black mt-[15px]">Handmade pieces that took time to make</h1>
                          <p className="text-[15px] text-[#9F9F9F] font-[Poppins] mt-[12px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                          <h2 className="text-[18px] text-black font-[Poppins] mt-[25px]">Read more</h2>
                          <div className="h-[0.1px] w-[75px] bg-black mt-[10px] ml-1"></div>

                                          
                        {/* Number div */}
                        <div className="flex w-[392px] h-[60px] mt-[52px] ml-[430px]">
                          <div className="w-[60px] h-[60px] bg-[#B88E2F] rounded-lg text-white text-[20px] py-[15px] px-[25px]">1</div>
                          <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg text-black text-[20px] py-[15px] px-[25px] ml-[38px]">2</div>
                          <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg text-black text-[20px] py-[15px] px-[25px] ml-[38px]">3</div>
                          <div className="w-[98px] h-[60px] bg-[#F9F1E7] rounded-lg text-black text-[20px] py-[15px] px-[25px] ml-[38px]">Next</div>
                              </div>
                      </div>


                      {/* Category */}
                        <div>
                          
                    <div className="w-[393px] h-[537px] mt-[84px] py-[22px] px-[41px]">
                        <div className="w-[311px] h-[58px] border-[1px] border-[#9F9F9F] rounded-lg py-[17px] pl-[277px]">
                          <Search size={24}/>
                          </div>
                          
                          <h1 className="text-black text-[24px] font-[Poppins] font-black mt-[43px]">Categories</h1>
                          <div className="flex">
                          <div>
                            {
                              Category.map((categories) => {
                                return(
                                  <div>
                                    <p className="mt-[41px] text-[16px] text-[#9F9F9F] font-[Poppins]">{categories.list}</p>
                                  </div>
                                )
                              })
                            }
                              
                            
                          </div>
                    
                    <div className="mt-[px] text-[16px] text-[#9F9F9F] font-[Poppins] ml-[220px]">
                      {
                        Category.map((Number) =>{
                          return(
                            <p className="mt-[41px]">{Number.number}</p>
                          )
                        })
                      }
                    </div>
                    </div>
                    </div>


                    <div className="w-[393px] h-[650px] mt-[41px] pt-[16px] px-[65px]">
                          <div className="w-[241px] h-[618px]">
                              <h1 className="text-start text-black text-[24px] font-[Poppins]">Recent Posts</h1>
                              <div className="flex mt-[26px]">
                                    <div>
                                      <Image src={"/papar.png"} alt={"Papar"} width={90} height={90} className="rounded-md" />
                                      <Image src={"/readmore.png"} alt={"Read More"} width={90} height={90} className=" mt-[39px] rounded-md" />
                                      <Image src={"/work.png"} alt={"Work"} width={90} height={90} className=" mt-[39px] rounded-md" />
                                      <Image src={"/mobile.png"} alt={"Mobile"} width={90} height={90} className=" mt-[39px] rounded-md" />
                                      <Image src={"/glasses.png"} alt={"Glasses"} width={90} height={90} className=" mt-[39px] rounded-md" />
                                    </div>

                                    <div className="mt-[3px] ml-[12px] text-left pr-[25px]">
                                        <h2 className="text-[14px] text-black font-[Poppins]">Going all-in with millennial design</h2>
                                    <p className="text-[12px] text-[#9F9F9F] font-[Poppins]">03 Aug 2022</p>

                                    <h2 className="text-[14px] text-black font-[Poppins] mt-[39px] mr-[30px]">Exploring new ways of decorating</h2>
                                    <p className="text-[12px] text-[#9F9F9F] font-[Poppins]">03 Aug 2022</p>

                                    <h2 className="text-[14px] text-black font-[Poppins] mt-[35px]">Handmade pieces <br />that took time to make</h2>
                                    <p className="text-[12px] text-[#9F9F9F] font-[Poppins]">03 Aug 2022</p>

                                    <h2 className="text-[14px] text-black font-[Poppins] mt-[35px] mr-[30px]">Modern home in Milan</h2>
                                    <p className="text-[12px] text-[#9F9F9F] font-[Poppins]">03 Aug 2022</p>

                                    <h2 className="text-[14px] text-black font-[Poppins] mt-[38px] mr-[30px]">Colorful office redesign</h2>
                                    <p className="text-[12px] text-[#9F9F9F] font-[Poppins]">03 Aug 2022</p>
                                    </div>
                              </div>
                          </div>

                    </div>
                    </div>


                </div>
                <IconFooter />
    </div>
    )
}