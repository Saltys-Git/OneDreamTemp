import Image from 'next/image'
import logo from '../../public/logo.png'
import ContructionImage from "@/components/ContructionImage";

export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center">
        <Image src={logo} alt={"logo"} fill className="-z-40 pt-20 px-52 object-contain blur-xl backdrop-blur-xl"/>
        <div className="w-1/4  h-1/4 relative">
                <ContructionImage/>
            </div>
        <h1 className="font-bold text-3xl -mt-2">Under Maintenance!</h1>
        <div className="w-fit h-fit mt-1.5 mx-3 rounded-2xl shadow-md drop-shadow-md bg-gray-200 p-4 border-b-[#83B731] border-2 justify-center items-center flex flex-col">
            <h1>OneDream Bangladesh is currently under maintenance</h1>
            <p>We are currently performing maintenance on our website and apologize for any inconvenience this may cause.</p>
            <p>We expect to have the website back up and running soon.</p>
            <p>In the meantime, you can still shop with us on our <a className="font-bold text-[#83B731]" href="https://www.facebook.com/1DreamBangladesh">Facebook page</a>.</p>
            <p>Thank you for your patience and understanding.</p>
            <p>Sincerely,</p>
            <p>OneDream Bangladesh Team</p>
        </div>
    </div>
  )
}
