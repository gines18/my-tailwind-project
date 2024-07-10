import Image from "next/image";
export default function Main() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Our Projects
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Discover a diverse range of projects that showcase our expertise
              and creativity in web development. Each project reflects our
              commitment to quality, innovation, and client satisfaction.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  IE-commerce Platform Redesign
                </h2>
                <p className="leading-relaxed text-base">
                  Revamped an existing e-commerce platform with a modern UI/UX
                  design focused on improving user engagement and conversion
                  rates. Implemented responsive layouts and integrated new
                  payment gateways to enhance functionality.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Interactive Data Visualization Dashboard
                </h2>
                <p className="leading-relaxed text-base">
                  Developed a dynamic data visualization dashboard using D3.js
                  and React.js for a financial analytics startup. Enabled
                  real-time data updates and customized user controls, improving
                  data analysis capabilities and user experience.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Community Engagement Portal
                </h2>
                <p className="leading-relaxed text-base">
                  Designed and built a community engagement portal for a
                  non-profit organization, leveraging WordPress CMS. Integrated
                  features for event management, member forums, and donation
                  processing, fostering greater community involvement and
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                layout="responsive"
                width={400}
                height={100}
                objectFit="cover"
                src="/marketing.jpg"
                className="h-200 w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src="/face1.jpg"
                    alt="face"
                    className="w-30 h-20 rounded-full"
                   
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Peter Stonage
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    As a seasoned designer, <br /> I bring a unique blend of
                    creativity and technical expertise to every project.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  A typical day in the life of a designer at our company involves a lot of creativity and problem-solving. We start our day by reviewing the current projects and discussing any updates or changes that need to be made. We then move on to our individual tasks, which can range from creating new designs to refining existing ones. Throughout the day, we collaborate with other team members, such as developers and project managers, to ensure that our designs align with the project's goals and requirements. We also attend meetings with clients to present our designs and gather feedback. Overall, our work as designers is dynamic, challenging, and rewarding.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Ask me a question
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
  <div className="w-full sm:p-4 px-4 mb-6">
    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Developers to focus</h1>
    <div className="leading-relaxed">The future of web development looks promising with the rise of technologies like Progressive Web Apps (PWAs), WebAssembly, and serverless architectures.</div>
  </div>
  {[
    { value: '2.7K', label: 'Users' },
    { value: '1.8K', label: 'Subscribes' },
    { value: '35', label: 'Downloads' },
    { value: '4', label: 'Products' }
  ].map((item, index) => (
    <div key={index} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
      <h2 className="title-font font-medium text-3xl text-gray-900">{item.value}</h2>
      <p className="leading-relaxed">{item.label}</p>
    </div>
  ))}
</div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <Image
        alt="stats"
        layout="responsive"
        width={600}
        height={300}
        objectFit="cover"
        src="/project3.jpg"
        className="w-full h-full"
      />
    </div>
  </div>
</section>

       
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="hero"
              layout="responsive"
              width={720}
              height={600}
              objectFit="cover"
              src="/project2.jpg"
              className="object-cover object-center rounded"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Development process
            </h1>
            <p className="mb-8 leading-relaxed">Web development also emphasizes the importance of responsive design, ensuring websites function well across various devices and screen sizes. Frameworks like Bootstrap and Tailwind CSS provide pre-designed components and utilities, speeding up the development process while maintaining a consistent look and feel. This approach is crucial as mobile internet usage continues to grow.

</p>
           
          </div>
        </div>
      </section>
       

    </>
  );
}
