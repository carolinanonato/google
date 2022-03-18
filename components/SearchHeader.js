import React from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'


export default function SearchHeader() {
    const router = useRouter()
    return (
        <header className='sticky top-0 bg-white'>
            <div className="">
                <Image
                    onClick={() => router.push("/")}
                    width="120"
                    height="40"
                    objectFit='contain'
                    className='cursor-pointer'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
                    alt="google logo" />
            </div>

        </header>
    )
}
