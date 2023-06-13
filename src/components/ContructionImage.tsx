"use client"
import animatedPic from '../../public/data.json'
import Lottie from "lottie-react";

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default async function ContructionImage() {
    await sleep(500);
    return (
        <div className="w-[200px] h-[150px]">
                <Lottie animationData={animatedPic} />
        </div>
    )
}