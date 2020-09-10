import React from 'react'; 

const AltHero = () => {
    return(
        <>
        <section className="header relative pt-16 items-center flex h-screen" style={{ maxHeight: "860px" }}>
            <div className="container mx-auto items-center flex flex-wrap">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                    <div className="pt-32 sm:pt-0">
                        <h2 className="font-semibold text-4xl text-gray-700">A beautiful extension for TailwindCSS.</h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">Tailwind Starter Kit is Free and Open Source. It does not change or add any CSS to the already one from <a href="https://tailwindcss.com/?ref=creativetim" className="text-gray-700" target="_blank">TailwindCSS</a>. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.</p>
                        <div className="mt-12">
                            <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg" style={{ transition: "all .15s ease" }} href="/learning-lab/tailwind-starter-kit/documentation/download">Get started</a>
                            <a href="https://github.com/creativetimofficial/tailwind-starter-kit" className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg" target="_blank" rel="noopener noreferrer">Github Star</a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12" src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/ill_header_3-58248cf88527a12ccfc6cc70ec21d868.png" alt="..." style={{ maxHeight: "860px" }} />
        </section>
        </>
    )
}

export default AltHero;