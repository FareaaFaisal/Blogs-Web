import Link from "next/link";
import Image from "next/image";
import React from "react";



export default function Footer() {
  return (
  
    <footer className="bg-rose-900 text-white py-12 px-4 font-sans tracking-wide mt-10">
  <div className="text-center">
    <h6 className="text-lg text-gray-300">Stay connected with us:</h6>
    <ul className="flex flex-wrap justify-center gap-x-8 gap-4 mt-8 mb-12">
      <li>
        <Link href="https://github.com/FareaaFaisal">
        <Image src={"/github-sign.png"} alt={"Github Icon"} width={30} height={30}/>
        </Link>
      </li>

      <li>
        <Link href="https://vercel.com/fareaa-faisals-projects">
        <Image src={"/ver.png"} alt={"Vercel icon"} width={30} height={30}/>
        </Link>
      </li>

      <li>
        <Link href="https://www.linkedin.com/in/fareaa-faisal-31569a2ba/">
        <Image src={"/linkedin.png"} alt={"linked in Iccn"} width={30} height={30}/>
        </Link>
      </li>

    </ul>
    <p className="text-base text-gray-300">
      © 2024 Blog SPHERE All rights reserved.
    </p>
  </div>
</footer>


  
  );
}
