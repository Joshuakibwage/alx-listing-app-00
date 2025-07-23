'use client'
import Image from 'next/image';
import HeroBg from '@/public/assets/Image1.png'




const Home: React.FC = () => {
    return (
        <section className="min-h-screen w-full">
            {/* hero section */}
            <section className="w-[96%] mx-auto relative my-8 h-[600px] rounded-xl overflow-hidden">
                <Image
                    src={HeroBg}
                    alt="hero background"
                    className="w-full h-full object-center object-cover"
                />

                <div className="inset-0 absolute flex flex-col items-center justify-center bg-black/20">
                    <h1 className="max-w-2xl text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white">
                        Find your favorite place here!
                    </h1>
                    <p className="font-semibold text-white text-xl mt-3 max-w-lg">
                        The best prices for over 2 million properties worldwide
                    </p>
                </div>
            </section>
        </section>
    )
}


export default Home;