import React from 'react';
import Image from 'next/image';


export default function About() {

  const team = [
    {
      name: "John Doe",
      job: "Software Engineer",
      face: "/face1.jpg"
    },
    {
      name: "Jane Smith",
      job: "Product Manager",
      face: "/face2.jpg"
    },
    {
      name: "Bob Johnson",
      job: "UX Designer",
      face: "/bob-johnson.jpg"
    },
    {
      name: "Alice Williams",
      job: "Data Analyst",
      face: "/alice-williams.jpg"
    },
    {
      name: "Chris Brown",
      job: "Frontend Developer",
      face: "/chris-brown.jpg"
    },
    {
      name: "Eva Green",
      job: "Backend Developer",
      face: "/eva-green.jpg"
    }
  ]

  return   (
      
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> From concept to launch, we collaborate closely with our clients to bring their vision to life, ensuring that every website we build is a true reflection of their brand and values.</p>
      </div>
<div className="flex flex-wrap">
{team.map((item, index) => (
  <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <Image alt="team" src={item.face} width={80} height={80} className="bg-gray-100 object-fit object-center flex-shrink-0 rounded-full mr-4"/>
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">{item.name}</h2>
        <p className="text-gray-500">{item.job}</p>
      </div>
    </div>
  </div>
))}
</div>
    </div>
  </section>
  )
  
  
}

