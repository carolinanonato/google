import React from 'react'
import Header from '../../components/Header'
import { getProviders, signIn } from "next-auth/react"


//client side
export default function signin({ providers }) {
    return (
        <div>
            <Header />

            <div className="mt-32">
                {Object.values(providers).map(provider => (
                    <div key={provider.name} className="flex flex-col items-center">
                        <img className="w-80 object-cover" src="https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="google logo" />
                        <p className='text-sm italic my-10 mt-0 text-center'>This website is created for learning purposes</p>
                        <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Sign in with {provider.name}</button>
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