import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/code1.jpg"
            layout="fixed"
            width={500}
            height={300}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Craft Your Online Presence: Build a Website that Truly Represents
              You
            </h1>
            <p className="mb-8 leading-relaxed">
              Having a webpage is crucial in today's digital age as it provides
              a platform for individuals and businesses to showcase their
              products, services, and personalities to a global audience. A
              webpage serves as a digital storefront, allowing customers to
              learn more about a company and its offerings, thereby increasing
              brand awareness and credibility.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
               Read more
              </button>
         
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            Creating a Strong Online Presence: Key to Success in the Digital Age
            </h1>
            <p className="mb-8 leading-relaxed">
            In today's digital era, establishing a robust online presence is essential for individuals and businesses alike. An online presence encompasses various digital footprints, including websites, social media profiles, and content contributions across different platforms.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                First step
              </button>
            
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/marketing.jpg"
              alt="hero"
              layout="fixed"
              width={500}
              height={300}
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/design.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Website Design
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Crafting the Perfect Website Design
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Learn the principles of creating a visually appealing and user-friendly website. Discover design techniques that reflect your brand identity, engage visitors, and provide a seamless user experience.


                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                 
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/content.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Website Content
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Developing Compelling Website Content
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Unlock the power of content to communicate your company's value proposition. Learn how to create engaging, informative, and persuasive content that resonates with your target audience and drives conversions.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
               
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/performance.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Website Optimization
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Enhancing Website Performance
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Optimize your website for speed and search engine rankings. Explore best practices for improving load times and SEO to ensure your site performs at its best and reaches a wider audience.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
               
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
