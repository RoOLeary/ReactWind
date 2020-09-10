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

		<section class="pb-20 bg-white-300 mt-24">
			<div className="container mx-auto px-12">
				<div className="flex flex-wrap">
					<div className="font-serif leading-normal mx-auto py-12 px-12 max-w-lg">
						<p className="mb-6 text-xl md:text-2xl uppercase">This is a simple parallax effect created by setting the background attachment property to a fixed position. This technique is not meant for non-decorative images, videos, etc. as those require additional HTML and CSS to work properly.</p>
						<p className="mb-4 text-lg">Quae commodi reiciendis dignissimos. Rerum molestiae hic dolores assumenda dolor! Corrupti reiciendis maxime fuga, recusandae obcaecati officia cum temporibus dicta quibusdam praesentium, magni, cumque aperiam iusto sequi illum molestiae non.</p>
						<p className="mb-4 text-lg">In excepturi repellendus eum, qui corrupti rerum perferendis harum adipisci voluptate? Nihil, quidem deleniti libero officia dicta vel asperiores velit molestiae blanditiis, dolore voluptatibus excepturi laudantium at veniam illo. Dolor!</p>
						<p className="mb-4 text-lg">Neque laudantium minus doloremque id quas quod sint velit corporis unde dolore accusantium delectus optio consequuntur voluptatem sapiente odit dolorum minima harum tenetur, dolor provident reprehenderit. Ex eum provident harum?</p>
						<p className="mb-4 text-lg">Mollitia temporibus maxime placeat culpa distinctio possimus, praesentium, assumenda quasi eum voluptate magni aspernatur aperiam. Eius voluptates rem eum, facilis inventore hic provident pariatur nam non! At odit iste cum.</p>
						<p className="mb-4 text-lg">Cumque voluptatibus laboriosam tempore architecto laudantium sint vitae cupiditate voluptate quod tempora saepe odio quasi dolores possimus non totam unde voluptates corrupti, ducimus ipsa enim officiis ipsum maxime eveniet. Aut!</p>
						<p className="mb-4 text-lg">Maxime facere ut natus libero incidunt alias quam consectetur, nisi delectus exercitationem ab qui perferendis dolorem sequi veritatis nobis eius quas dolore ducimus atque vel. Doloribus mollitia non pariatur modi?</p>
						<p className="mb-4 text-lg">Sed in amet a neque, delectus, cupiditate ab assumenda quidem facere molestias vitae itaque soluta reprehenderit dolorem. Deserunt quibusdam, consequatur veniam fugiat ipsam aliquam ea possimus quis officiis enim dolores.</p>
						<p className="mb-4 text-lg">Exercitationem aperiam veniam perspiciatis iure ad nobis necessitatibus cumque cupiditate obcaecati natus. Neque nostrum maxime id veritatis tempore, a voluptate voluptatem et! A ullam id aliquam? Recusandae deleniti odit fugit!</p>
						<p className="mb-4 text-lg">Beatae rerum obcaecati consectetur nostrum eos ipsam, accusamus delectus ex maxime neque sit quod repellendus voluptate sunt dolore hic explicabo ea dolorum vero vel quidem illo! Cupiditate sed voluptatibus ullam?</p>
						<p className="mb-4 text-lg">Modi aliquam facilis adipisci! Soluta eveniet eos omnis, inventore nesciunt, laborum deserunt blanditiis nihil accusamus debitis voluptatibus possimus dolores vero maiores, sed voluptate ut! Facilis possimus vitae consectetur praesentium veritatis.</p>
						<p className="mb-4 text-lg">Tempore, quaerat accusamus ad nostrum maiores numquam, ea nam sed reiciendis, eveniet perspiciatis. Eos nulla vel consectetur quo nesciunt aspernatur sint nemo cumque optio mollitia, veritatis, tenetur quibusdam eum natus.</p>
					</div>
				</div>
			</div>
		</section>

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
