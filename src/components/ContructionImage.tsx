"use client"
import animatedPic from '../../public/data.json'
import Lottie from "lottie-react";

export default function ContructionImage() {
    return (
        <div>
            <Lottie animationData={animatedPic}/>
        </div>
    )
}