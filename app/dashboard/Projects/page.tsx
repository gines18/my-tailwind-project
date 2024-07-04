import Image from "next/image"
export default function Main() {
    return (

         <>
<section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Projects</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Discover a diverse range of projects that showcase our expertise and creativity in web development. Each project reflects our commitment to quality, innovation, and client satisfaction.</p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">IE-commerce Platform Redesign</h2>
                  <p className="leading-relaxed text-base">Revamped an existing e-commerce platform with a modern UI/UX design focused on improving user engagement and conversion rates. Implemented responsive layouts and integrated new payment gateways to enhance functionality.

</p>
                 
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Interactive Data Visualization Dashboard



</h2>
                  <p className="leading-relaxed text-base">Developed a dynamic data visualization dashboard using D3.js and React.js for a financial analytics startup. Enabled real-time data updates and customized user controls, improving data analysis capabilities and user experience.</p>
                 
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Community Engagement Portal</h2>
                  <p className="leading-relaxed text-base">Designed and built a community engagement portal for a non-profit organization, leveraging WordPress CMS. Integrated features for event management, member forums, and donation processing, fostering greater community involvement and support.</p>
                 
                </div>
              </div>
            </div>
        
          </div>
        </section>
         



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Advancing Digital Experiences with Purpose</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our mission in web development is to craft seamless digital experiences that empower businesses and individuals alike. By blending innovative design with robust technology solutions, we strive to create websites and applications that elevate user engagement, drive growth, and fulfill strategic objectives. Whether it's enhancing usability, optimizing performance, or integrating cutting-edge features, we are committed to pushing boundaries and delivering impactful solutions that resonate with our clients' goals and their audience.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" layout="fill" objectFit="cover" src="/project01.jpg" className="absolute inset-0"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">The Power of SEO</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Driving Traffic and Engagement Through Strategic Optimization</h1>
            <p className="leading-relaxed">Search Engine Optimization (SEO) is the cornerstone of effective digital marketing strategies, ensuring websites achieve maximum visibility in search engine results pages (SERPs).</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" layout="fill" objectFit="cover" src="/project02.jpg" className="absolute inset-0"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Harnessing Collective Strength: The Impact of Teamwork</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Collaboration and Synergy in Achieving Project Success</h1>
            <p className="leading-relaxed"> Teamwork is the cornerstone of our approach to web development, emphasizing collaboration and synergy to achieve project success. By fostering open communication, leveraging diverse skill sets, and encouraging mutual support, our teams consistently deliver innovative solutions that exceed client expectations. </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" layout="fill" objectFit="cover" src="/project03.jpg" className="absolute inset-0"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">The Role of Technology in Web Development</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Leveraging Cutting-edge Solutions for Digital Transformation</h1>
            <p className="leading-relaxed">Technology forms the backbone of our web development endeavors, driving innovation and enabling digital transformation. From adopting emerging frameworks and languages to implementing robust infrastructure and cloud solutions, we harness technology's potential to deliver scalable, secure, and high-performance web applications. </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" layout="fill" objectFit="cover" src="/project04.jpg" className="absolute inset-0"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">The Impact of Technology in Web Development</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Harnessing Innovation for Seamless Digital Solutions</h1>
            <p className="leading-relaxed">Technology plays a pivotal role in modern web development, driving innovation and enabling the creation of seamless digital solutions. By leveraging cutting-edge frameworks, programming languages, and development tools, we empower businesses to transform their online presence with robust, scalable, and secure websites and applications.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" layout="fill" objectFit="cover" src="/project05.jpg" className="absolute inset-0"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">The Vital Role of Teamwork in Web Development</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Collaborative Excellence Driving Project Success</h1>
            <p className="leading-relaxed">Teamwork forms the cornerstone of our approach to web development, emphasizing collaborative excellence to drive project success. By fostering open communication, leveraging diverse skill sets, and cultivating a supportive environment, our teams consistently deliver innovative solutions that exceed client expectations.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" layout="fill" objectFit="cover" src="/project06.jpg" className="absolute inset-0"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Creating a Positive Job Environment in Web Development</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cultivating Growth and Innovation Through Supportive Culture</h1>
            <p className="leading-relaxed">The job environment in our web development team is designed to foster growth, innovation, and collaboration, creating a supportive culture that empowers every team member.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
         
        
         </>
    )



}