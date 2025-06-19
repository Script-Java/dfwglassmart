import Image from "next/image";
import img1 from "../assets/img/cards/1.jpg";
import img2 from "../assets/img/cards/2.jpg";
import img3 from "../assets/img/cards/3.jpg";
import img4 from "../assets/img/cards/4.jpg";
import img5 from "../assets/img/img1.jpg";
import img6 from "../assets/img/img10.jpg";
import img13 from "../assets/img/13.jpg";
import img14 from "../assets/img/14.jpg";
import img15 from "../assets/img/15.jpg";
import { FaCarSide, FaHome, FaTools,FaCheckCircle } from 'react-icons/fa';
import Link from "next/link";

const Card = () => {
  const features = [
    'Free Glass Repair and Replacement Estimates: Get a no-obligation quote for all your glass needs.',
    'Fast Mobile Service: We come to you, ensuring quick and convenient repairs.',
    'No Hidden Charges: Transparent pricing you can trust—no surprises, ever.',
    'Licensed and Insured: Rest easy knowing your repairs are handled by qualified professionals.',
    'Certified Glass Technicians: Expertly trained to provide top-tier service every time.',
    'A+ Rated Service: Our commitment to quality has earned us an excellent reputation.',
    'Fast and Reliable Service: Your time is valuable, and we ensure prompt results without compromising quality.',
    'Advanced Glass Tools and Technology: We use cutting-edge equipment for precision and efficiency.',
  ];

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-primary text-white p-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Expert Glass Repair & Replacement Services in
            <br /> Dallas and Surrounding Areas
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            At DFW Glass Mart, we have been proudly connected to the auto glass
            industry for over 21 years. Our licensed and experienced technicians
            provide trusted and reliable services that you can count on. What
            sets us apart is our commitment to excellence and customer
            satisfaction. Whether you need auto glass repair or windshield
            replacement, we are the go-to source in Dallas and surrounding
            areas. We use only the highest-quality materials and the latest
            techniques to ensure your vehicle is safe and secure. Plus, our team
            is dedicated to delivering fast, affordable, and professional
            service every time. Choose DFW Glass Mart for all your auto glass
            needs. Contact us today to schedule your service or get a free
            quote!
          </p>
        </div>
      </div>

{/* Workmanship Section */}
<div className="w-full py-20">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-20 text-black">
    {/* Text Content */}
    <div className="w-full text-center max-w-2xl md:text-left space-y-6">
      <h2 className="text-primary font-bold text-3xl md:text-4xl leading-snug">
        100% Workmanship Guarantee: Quality You Can Trust
      </h2>
      <p className="text-lg">
        At DFW Glass Mart, we take pride in providing top-quality auto and residential glass repair and replacement services in Dallas and surrounding areas. Backed by our 100% Workmanship Guarantee, you can trust us to deliver exceptional results every time.
      </p>
      <p className="text-lg">
        Whether you need a <strong>fast windshield replacement</strong>, a reliable car window repair, or <strong>custom home glass solutions</strong>, we’ve got you covered. Our technicians are highly skilled and committed to providing prompt, dependable service.
      </p>
      <p className="text-lg">
        We understand the urgency of emergency glass replacement needs, which is why we prioritize fast and dependable solutions for our valued customers. At DFW Glass Mart, your satisfaction is our top priority!
      </p>
    </div>

    {/* Image */}
    <div className="">
      <div className="w-80 md:w-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={img5}
          alt="Workmanship Guarantee"
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>


      <div className="w-full flex flex-col md:flex-row items-stretch">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-80 md:h-auto relative">
          <Image
            src={img6}
            alt="Glass repair"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-primary text-white px-6 py-24 space-y-4">
          <h2 className="text-3xl font-bold border-t-2 border-white pt-4">
            Request Your Free Quote Today
          </h2>
          <p>
            Looking for a quick and reliable glass repair or replacement quote?
            At DFW Glass Mart, we’re here to help!
          </p>
          <h3 className="text-xl font-semibold">
            Damaged Car Window? We’ve Got You Covered
          </h3>
          <p>
            At DFW Glass Mart, we understand the urgency of getting your vehicle
            back on the road. That’s why our fast and efficient mobile auto
            glass specialists provide top-quality windshield replacements and
            car window repairs. We use only the highest-grade materials
            available on the market to ensure durability and safety. With our
            expert team, you can trust us to deliver hassle-free service. We’ll
            have you driving down the highway with minimal inconvenience. Count
            on our skilled auto glass experts to get you back on the road
            safely, quickly, and with confidence. Contact us today for your free
            quote!
          </p>
        </div>
      </div>

     <section className="py-16 bg-base-100 text-center px-4 md:px-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl text-black font-semibold mb-2">What Are We Good At?</h2>
    <p className="text-base-content mb-10">
      At DFW Glass Mart, we specialize in <span className="font-medium">auto glass repair</span> and
      <span className="font-medium"> residential glass services</span>. Our advanced tools and technology ensure
      perfect glass repairs and replacements every time.
    </p>

    <div className="grid gap-10 md:grid-cols-3">
      {[img1, img2, img3].map((imgSrc, index) => (
        <div key={index} className="flex flex-col items-center group">
          <div className="relative w-40 h-40 mb-4">
            <div className="absolute inset-0 transform rotate-45 bg-gray-200 transition-transform duration-500 ease-in-out group-hover:rotate-0 z-0" />
            <div className="relative w-full h-full z-10 overflow-hidden rounded shadow-md">
              <Image src={imgSrc} alt={`Card ${index + 1}`} fill className="object-cover" />
            </div>
          </div>
          <h3 className="text-xl text-black my-4 font-semibold mb-2">
            {index === 0 && 'Fast and Reliable Auto Glass Repairs'}
            {index === 1 && 'Custom Glass Solutions for Your Home'}
            {index === 2 && 'Why Trust DFW Glass Mart?'}
          </h3>
          <p className="text-sm text-base-content">
            {index === 0 &&
              'For cracked windshields or broken car windows, we offer fast, reliable, and high-quality repairs. Additionally, we ensure minimal downtime so you can get back on the road quickly.'}
            {index === 1 &&
              'We specialize in custom glass solutions for windows, shower doors, mirrors, and table tops. Our goal is to enhance your home’s aesthetics and functionality with high-quality glass products.'}
            {index === 2 &&
              'By combining advanced technology with expert craftsmanship, we deliver exceptional results for both auto and residential glass repairs. Trust us to complete your glass repair efficiently and to your complete satisfaction.'}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        <section className="py-4 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl text-primary font-semibold mb-4 relative">
            <span className="absolute left-0 top-0 w-10 h-1 bg-primary -translate-y-5"></span>
            Trusted Services in Dallas
          </h2>
          <p className="text-base-content mb-4">
            At DFW Glass Mart, we deliver world-class auto and residential glass repair and replacement services 
            in Dallas and surrounding areas. Backed by a 100% Workmanship Guarantee, we ensure top-quality results 
            you can trust.
          </p>
          <p className="text-base-content mb-4">
            Our expert glass technicians arrive on time and handle emergency glass replacement with precision. 
            Need a quick repair or replacement? Contact us today for a free quote.
          </p>
          <p className="text-base-content">
            We prioritize fast service with minimal disruption. Our mobile windshield and window specialists 
            use only the highest-quality glass replacements available. With our skilled team, you’ll be back 
            on the road safely and quickly.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96">
          <Image 
            src={img13} 
            alt="DFW Glass Service" 
            fill 
            className="object-cover rounded shadow"
          />
        </div>
      </div>
    </section>

<section className="bg-base-100 py-10 px-6">
  <div className="max-w-7xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl text-black font-semibold mb-4">
      Expert Glass Solutions for Your Auto and Home
    </h2>
    <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>

{/* Card Grid */}
<div className="grid md:grid-cols-3 gap-10 text-left items-stretch">
  {/* Auto Glass Services */}
  <div className="flex flex-col border border-base-300 rounded-xl shadow-md p-6 relative">
    <div className="flex justify-center -mt-12 mb-4">
      <div className="bg-base-100 border border-primary rounded-full p-4 shadow">
        <FaCarSide className="text-3xl text-primary" />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-black mb-2">Auto Glass Services</h3>
    <p className="text-base-content text-sm mb-4 flex-grow">
      At DFW Glass Mart, we understand that your vehicle’s glass plays a crucial role in both safety and comfort. That’s why we are committed to offering only the highest quality auto glass solutions...
    </p>
    <div className="mt-auto">
      <Link href="/auto" className="btn btn-primary w-full" aria-label="Learn more about Auto Glass Services">
        Learn More about Auto Glass
      </Link>
    </div>
  </div>

  {/* Residential Glass Services */}
  <div className="flex flex-col border border-base-300 rounded-xl shadow-md p-6 relative">
    <div className="flex justify-center -mt-12 mb-4">
      <div className="bg-base-100 border border-primary rounded-full p-4 shadow">
        <FaHome className="text-3xl text-primary" />
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-black">Residential Glass Services</h3>
    <p className="text-base-content text-sm mb-4 flex-grow">
      At DFW Glass Mart, we take pride in offering a wide range of residential glass services designed to meet the unique needs of homeowners...
    </p>
    <div className="mt-auto">
      <Link href="/residential" className="btn btn-primary w-full" aria-label="Learn more about Residential Glass Services">
        Learn More about Residential Glass
      </Link>
    </div>
  </div>

  {/* Tools and Tech */}
  <div className="flex flex-col border border-base-300 rounded-xl shadow-md p-6 relative">
    <div className="flex justify-center -mt-12 mb-4">
      <div className="bg-base-100 border border-primary rounded-full p-4 shadow">
        <FaTools className="text-3xl text-primary" />
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-black">Tools and Tech for Auto and Residential Glass Repair</h3>
    <p className="text-base-content text-sm mb-4 flex-grow">
      At DFW Glass Mart, we utilize state-of-the-art tools and technology to ensure your auto and residential glass repair and replacement needs are handled efficiently...
    </p>
    <div className="mt-auto">
      <Link href="/tools" className="btn btn-primary w-full" aria-label="Learn more about Tools and Technology used for Glass Repair">
        Learn More about Tools & Tech
      </Link>
    </div>
  </div>
</div>


    {/* Bottom CTA Button */}
    <div className="mt-12">
      <Link href="/quote" className="btn bg-primary p-8 md:p-4 text-white hover:bg-blue-700">
        HOW TO CARE FOR A NEWLY REPLACED WINDSHIELD
      </Link>
    </div>
  </div>
</section>

<section className="bg-base-100 py-10 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side - Title and Image */}
    <div>
      <h2 className="text-3xl text-black font-semibold mb-4 relative">
        <span className="absolute left-0 -top-3 w-10 h-1 bg-primary"></span>
        Why Choose DFW Glass Mart?
      </h2>
      <p className="text-base-content mb-6">
        When it comes to <span className="font-medium">auto and residential glass repair and replacement</span>, 
        DFW Glass Mart is the trusted choice for customers in Dallas. Here’s why:
      </p>
      <div className="relative w-full h-64 rounded shadow-md overflow-hidden">
        <Image
          src={img14}
          alt="Why DFW Glass Mart"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Right Side - List of Features */}
    <ul className="space-y-4">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start text-base-content">
          <FaCheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-1 mr-3" />
          <span className="text-sm leading-5">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
</section>


    <section className="bg-base-100 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div>
          <h2 className="text-3xl text-black font-semibold mb-4">Mobile Fleet Ready To Serve You</h2>
          <p className="text-base-content mb-4 text-sm">
            DFW Glass Mart operates a dedicated fleet of mobile auto and residential glass repair trucks, 
            ready to meet your glass needs throughout the Dallas metropolitan area. Whether it’s auto glass repair 
            or residential glass replacement, we’ll come to your home, office, or any location that’s most 
            convenient for you.
          </p>
          <p className="text-base-content text-sm">
            Our mobile service is designed for your convenience, ensuring fast and efficient repairs without disrupting 
            your day. To schedule an appointment with our team, call us today at{' '}
            <span className="text-blue-600 font-medium">(972) 900-3117</span>, and let us bring our expert service to you!
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full h-64 md:h-80 rounded shadow overflow-hidden">
          <Image
            src={img15}
            alt="Mobile Fleet Service"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
    </section>
  );
};

export default Card;
