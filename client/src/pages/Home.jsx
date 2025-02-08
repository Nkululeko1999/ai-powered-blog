import React from 'react'
import Header from '../components/Header'
import backgroundImage from "../assets/hero.jpg";
import BlogList from '../components/BlogList';

function Home() {
    return (
        <section className="home">
            <Header />

            
            <div className="max-w-[1500px] mx-auto mt-10 lg:mt-14 px-4 sm:px-6 lg:px-14 py-2">
                {/* Hero */}

                <div className="hero h-72 sm:h-80 lg:h-[400px] bg-gray-400 rounded-2xl relative" 
                    style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                    <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to Our AI Powered Platform</h1>
                        <p className="mt-2 text-base sm:text-xl font-medium max-w-md mx-auto mb-4">
                            We offer the best tools and resources to help you grow, learn, and achieve your goals.
                        </p>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Blog List */}
            <div>
                <BlogList />
            </div>
            </div>

            
        </section>
    )
}

export default Home
