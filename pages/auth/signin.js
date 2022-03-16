import React from 'react'
import Header from '../../components/Header'

import { getProviders } from "next-auth/react"


//client side
export default function signin({ providers }) {
    return (
        <div>
            <Header />

            <div className="">
                {Object.values(providers).map(provider => (
                    <div key={provider.name} className="">
                        <img src="https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="google logo" />
                        <p>This website is created for learning purposes</p>
                        <button>Sign in with {provider.name}</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

//server side
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers }
    }
}