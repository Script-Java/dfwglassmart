import Image from "next/image";
import img1 from "../assets/img/auto/1.jpg";
import img2 from "../assets/img/auto/2.jpg";
import img3 from "../assets/img/auto/3.jpg";
import img4 from "../assets/img/auto/4.jpg";
import img5 from "../assets/img/auto/5.jpg";
import img6 from "../assets/img/auto/6.jpg";
import img7 from "../assets/img/auto/7.jpg";
import img8 from "../assets/img/auto/8.jpg";

const slides = [
  {
    image: img3,
    title: "Expert Mobile Auto Glass Services",
    description:
      "Our fully-equipped mobile fleet brings top-tier glass repair and replacement services directly to your location in Dallas. Whether it's your driveway or workplace, we handle chips, cracks, and full replacements on-site with minimal disruption.",
  },
  {
    image: img5,
    title: "Comprehensive Windshield Repair & Replacement",
    description:
      "Your windshield is essential to your safety. We provide fast chip repairs, full replacements, and ADAS recalibration for all vehicle types using OEM-quality materials. No hidden fees—just reliable, expert service.",
  },
  {
    image: img6,
    title: "Truck & Commercial Glass Solutions",
    description:
      "From delivery vans to heavy-duty trucks, our specialists offer dependable glass services tailored for commercial fleets. We install durable, high-grade glass and offer flexible fleet maintenance plans to keep your business moving.",
  },
];


const AutoCard = () => {
  return (
    <section className="w-full">
<div className="w-full my-16 flex flex-col md:flex-row items-stretch px-6 max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12 space-y-6">
        <h2 className="text-3xl font-bold border-t-2 border-primary pt-4">
          Mobile Fleet Ready to Serve You
        </h2>
        <p>
          DFW Glass Mart operates a dedicated fleet of mobile auto and residential glass repair trucks, ready to meet your glass needs throughout the Dallas metropolitan area. Whether it’s auto glass repair or residential glass replacement, we’ll come to your home, office, or any location that’s most convenient for you. Our mobile service ensures that you don’t have to take time out of your busy schedule to get your glass repaired or replaced—we bring the service directly to you.
        </p>
        <p>
          Our mobile service is designed for your convenience, providing fast, reliable, and efficient repairs without disrupting your day. From minor windshield chips to full auto glass replacements, our expert technicians use only high-quality materials and industry-leading techniques to restore your vehicle’s safety and visibility. We specialize in handling all types of auto glass, including windshields, side windows, rear glass, and mirrors for cars, trucks, and SUVs of all makes and models. No matter the damage or the vehicle, we have the right solution to restore your glass to its original condition.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[500px] relative rounded-xl overflow-hidden shadow-lg mt-10 md:mt-0">
        <Image
          src={img4}
          alt="Mobile auto glass service"
          fill
          className="object-cover"
        />
      </div>
    </div>

    <div className="w-full flex flex-col md:flex-row items-stretch">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src={img8}
          alt="Glass repair technician"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-primary text-white px-6 py-24 space-y-6">
        <h2 className="text-3xl font-bold border-t-2 border-white pt-4">
          Areas of Specialization
        </h2>
        <p>
          At DFW Glass Mart, we specialize in a wide range of glass repair and replacement services to meet the needs of our diverse customers. Our areas of expertise include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Auto Glass Repair and Windshield Services: Expert repair and replacement for all vehicle types.</li>
          <li>Lifetime Auto Glass Warranty: Peace of mind with every service.</li>
          <li>Approved by Major Brands: Trusted by top manufacturers and auto brands.</li>
          <li>Commercial and Fleet Services: Tailored solutions for dealerships, shops, and fleets.</li>
          <li>Leak Repairs: Eliminate wind, noise, and water intrusions.</li>
          <li>Door Window Services: Off-track window repair and motor replacement.</li>
        </ul>
        <div className="pt-4">
          <h3 className="text-xl font-semibold">Safety Warning: Protect Yourself and Others</h3>
          <p>
            For your safety, do not drive until your auto glass has been professionally repaired or replaced. Damaged glass can compromise your visibility and the structural integrity of your vehicle.
          </p>
          <p className="pt-2 font-semibold">
            Call (972) 900-3117 today to schedule your appointment with DFW Glass Mart. Let our experts ensure your vehicle is safe and road-ready!
          </p>
        </div>
      </div>
    </div>
      {/* Services Section */}
      <div className="w-full bg-base-100 py-20 px-4">
        <div className="max-w-7xl mx-auto grid gap-20">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="w-full md:w-1/2 h-96 relative rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {slide.title}
                </h2>
                <p className="text-md md:text-lg text-white">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoCard;
