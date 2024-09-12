
import React from "react";
import Image from "next/image";


export default function About() {
  const testimonials = [
    {
      image: "/testimonial1.jpg",
      name: "John Smith",
      title: "CEO of Tech Innovators Inc.",
      text: "Working with the team to develop our company website has been a game-changer. Their expertise in website design and optimization has transformed our online presence. We&apos;ve seen a significant increase in traffic and engagement, and our site truly reflects our brand identity now. Highly recommended!",
    },
    {
      image: "/testimonial2.jpg",
      name: "Alper Kamu",
      title: "DESIGNER",
      text: "The process of crafting our website content was seamless and highly effective. The team understood our vision and delivered compelling content that perfectly communicates our value proposition. Our website has become a key tool in driving conversions and engaging with our audience. We couldn&apos;t be happier with the results!",
    },
  ];

  const team = [
    {
      name: "John Doe",
      job: "Software Engineer",
      face: "/face1.jpg",
    },
    {
      name: "Jane Smith",
      job: "Product Manager",
      face: "/face2.jpg",
    },
    {
      name: "Bob Johnson",
      job: "UX Designer",
      face: "/face3.jpg",
    },
    {
      name: "Alice Williams",
      job: "Data Analyst",
      face: "/face4.jpg",
    },
    {
      name: "Chris Brown",
      job: "Frontend Developer",
      face: "/face5.jpg",
    },
    {
      name: "Eva Green",
      job: "Backend Developer",
      face: "/face6.jpg",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our team is the cornerstone of our success. Comprised of
              passionate professionals from diverse backgrounds, each member
              brings unique talents and perspectives that drive innovation and
              excellence.
            </p>
          </div>
          <div className="bg-[url('/bg2.jpg')] flex flex-wrap justify-center -m-1">
            {team.map((member, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <div className="flex-shrink-0 rounded-lg w-full h-56 mb-4 relative">
                    <Image
                   
                      alt="team"
                      src={member.face}
                      layout="fill"
                      objectFit="cover"
                      className="h-full flex flex-col items-center text-center bg-white bg-opacity-8 rounded-md p-4"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-yellow-500">
                      {member.name}
                    </h2>
                    <h3 className="text-yellow-600 mb-3">{member.job}</h3>

                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-800 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            {testimonials.map((testimonial) => (
              <div className="p-4 md:w-1/2 w-full" key={testimonial.name}>
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">{testimonial.text}</p>
                  <a className="inline-flex items-center">
                    <Image
                      alt="testimonial"
                      src={testimonial.image}
                      width={70}
                      height={70}
                      className="rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonial.title}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
