import React from "react";

import Navbar from "components/Navbar";
import AltHero from "components/AltHero";
import Hero from "components/Hero";
import CTABlock from "components/CTABlock";
import Form from "components/Form";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

		<AltHero />

        <Hero />

		<CTABlock />

		<div className="container mx-auto px-4 pb-32 pt-48">
			<div className="items-center flex flex-wrap">
				<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
					<div className="md:pr-12">
						<h3 className="text-3xl font-semibold">Complex Documentation</h3>
						<p className="mt-4 text-lg leading-relaxed text-gray-600">This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go.</p>
						<ul className="list-none mt-6">
							<li className="py-2">
								<div className="flex items-center">
									<div>
										<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
											<i className="fas fa-fingerprint"></i>
										</span>
									</div>
									<div>
										<h4 className="text-gray-600">Built by Developers for Developers</h4>
									</div>
								</div>
							</li>
							<li className="py-2">
								<div className="flex items-center">
									<div>
										<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
											<i className="fab fa-html5"></i>
										</span>
									</div>
									<div>
										<h4 className="text-gray-600">Carefully crafted code for Components</h4>
									</div>
								</div>
							</li>
							<li className="py-2">
								<div className="flex items-center">
									<div>
										<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
											<i className="far fa-paper-plane"></i>
										</span>
									</div>
									<div>
										<h4 className="text-gray-600">Dynamic Javascript Components</h4>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
					<img src="https://placedog.net/650/350" className="max-w-full rounded-lg shadow-xl"  />
				</div>
			</div>
		</div>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Form />
      </main>
      <Footer />
    </>
  );
}
