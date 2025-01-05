import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className=" flex items-center justify-between xs:flex-row py-2 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className=" flex md:flex md:items-center md:justify-center md:gap-x-16 font-bold ">
        <p className="text-3xl text-dark dark:text-light lg:mr-48 mr-8">
          Blog <span className="text-3xl text-rose-900">SPHERE</span>
        </p>
       
        <Link href={"/"} className="text-xl text-dark dark:text-light">
         <span className="text-xl text-rose-900">HOME</span>
        </Link>
        <Link href={"/about"} className="text-xl text-dark dark:text-light">
         <span className="text-xl text-rose-900">ABOUT</span>
        </Link>
        <Link href={"/contact"} className="text-xl text-dark dark:text-light">
          <span className="text-xl text-rose-900">CONTACT</span>
        </Link>
      </nav>
      {/*  <SocialMedia /> */}
      <ThemeToggle /> 
    </header>
  );
}
