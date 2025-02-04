
import Image from "next/image"
import Link from "next/link"

export default function About(){
    return(

        <div className="mt-6">
        
  <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
    <div>
      <h1 className="text-gray-800 text-3xl font-bold">ABOUT ME</h1>
      <p className="text-sm text-gray-500 mt-4">
      Hi, I&apos;m Fareaa Faisal! Welcome to my blog, where I share my thoughts on various topics that interest me. I&apos;m passionate about learning, exploring new ideas, and connecting with others who share similar passions. This space is where I can reflect, share experiences, and hopefully inspire or entertain. Thanks for visiting—hope you enjoy the content!
      </p>
      <div className="mt-12">
        <h2 className="text-gray-800 text-base font-bold">Email</h2>
        <ul className="mt-4">
          <li className="flex items-center">
            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#007bff"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <a
              href="javascript:void(0)"
              className="text-blue-500 text-sm ml-4"
            >
              <small className="block">Mail</small>
              <strong>info@example.com</strong>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-gray-800 text-base font-bold">Socials</h2>
        <ul className="flex mt-4 space-x-4">
         
       
           <li>
          <Link href="https://www.linkedin.com/in/fareaa-faisal-31569a2ba/">
          <Image src="/link.png" alt="linkedin" height={35} width={33} className="mt-0"/>
          </Link>
          </li>

          <li>
          <Link href="https://github.com/FareaaFaisal">
          <Image src="/github-sign.png" alt="github" height={20} width={25} className="mt-0.5"/>
          </Link>
          </li>
          
          <li>
            <Link href="https://vercel.com/fareaa-faisals-projects"> 
            <Image src="/ver.png" alt="vercel" height={20} width={25} className="mt-0.5 rounded-md"/>
            </Link>
          </li>
        </ul>
      </div>
      
      
      
    </div>
    {/* <form className="ml-auto space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Message"
        rows={6}
        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
        defaultValue={""}
      />
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full !mt-6"
      >
        Send
      </button>
    </form> */}
    <div className="h-0">
       <img src="/image.png" alt="alt"  className="h-[400px] w-[350px] ml-2"/>
    </div>
  </div>
</div>

    )
}


    
  
