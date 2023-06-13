import Image from 'next/image'
import logo from '../../public/logo.png'
import ContructionImage from "@/components/ContructionImage";
import {Suspense} from "react";
import LoadingShimmer from "@/components/LoadingShimmer";

export default function Home() {
  return (
    <div className="flex-col flex h-screen w-screen items-center">
        <Image src={logo} alt={"logo"} fill className="-z-40 h-screen w-screen object-cover sm:object-contain blur-xl backdrop-blur-xl"/>
        <div className="mt-4 relative">
            <Suspense fallback={<LoadingShimmer/>}>
                <ContructionImage/>
            </Suspense>
        </div>
        <h1 className="font-bold text-3xl w-fit text-center mx-2">Under Maintenance!</h1>
        <div className="w-fit h-fit relative mt-1.5 mx-3 rounded-2xl shadow-md drop-shadow-md bg-gray-200 p-4 border-b-[#83B731] border-2 justify-center items-center flex flex-col">
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
