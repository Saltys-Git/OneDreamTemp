import Image from 'next/image'
import logo from '../../public/logo.png'
import ContructionImage from "@/components/ContructionImage";

export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center">
        <Image src={logo} alt={"logo"} fill className="-z-40 pt-20 sm:px-52 object-cover sm:object-contain blur-xl backdrop-blur-xl"/>
        <div className="w-[75%] h-[90%] sm:w-1/4  sm:h-1/4 relative">
                <ContructionImage/>
            </div>
        <h1 className="font-bold text-3xl -mt-2 w-fit text-center mx-2">Under Maintenance!</h1>
        <div className="w-fit h-fit mt-1.5 mx-3 rounded-2xl shadow-md drop-shadow-md bg-gray-200 p-4 border-b-[#83B731] border-2 justify-center items-center flex flex-col">
            <h1 className="w-fit text-center">OneDream Bangladesh is currently under maintenance</h1>
            <p className="w-fit text-center">We are currently performing maintenance on our website and apologize for any inconvenience this may cause.</p>
            <p className="w-fit text-center">We expect to have the website back up and running soon.</p>
            <p className="w-fit text-center">In the meantime, you can still shop with us on our <a className="font-bold text-[#83B731]" href="https://www.facebook.com/1DreamBangladesh">Facebook page</a>.</p>
            <p className="w-fit text-center">Thank you for your patience and understanding.</p>
            <p>Sincerely,</p>
            <p>OneDream Bangladesh Team</p>
        </div>
    </div>
  )
}
