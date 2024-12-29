"use client"
import { Heart, Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import React from "react";

import Link from "next/link";
import Image from "next/image";

function Header() {
    return (
        <div>

<div className=" w-full px-[54px] pt-[12px] pb-[12px]">
  <div className=" container mx-auto px-4 pt-6">
    <div className="flex items-center justify-between gap-8 sm: flex-col lg:flex-row">


      {/* Exclusive */}
    <Link  className="font-bold text-[24px] leading-[24px] flex items-center font-[Montserrat]" href="/"><Image src="/logo.png" alt="logo" width={50} height={32}></Image>
    Furniro</Link>



{/*  Navigation */}
<nav className='hidden md:flex items-center gap-8 font-semibold font-[Poppins]'> 
  <Link  href={"/home"} className='text-[16px] leading-[24px] relative'>Home</Link>
  <Link  href={"/shop"} className='text-[16px] leading-[24px] '>Shop</Link>
  <Link  href={"/blog"} className='text-[16px] leading-[24px] '>About</Link>
  <Link  href={"/contact"} className='text-[16px] leading-[24px] '>Contact</Link>
</nav>
<Link href={`/123`}>
<div className="flex items-center gap-8 px-4">
  
 <Image src={"/vector3.png"} alt={"Vector3"} width={23.33} height={18.67}></Image>
 <Search size={28} />
 <Heart size={28} />
 <ShoppingCart width={24.53} height={22.06}/>
 
</div>
</Link>
</div>
</div>
</div>
</div>
);
  }
  export default Header