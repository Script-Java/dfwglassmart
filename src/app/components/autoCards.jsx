import Image from "next/image";
import img1 from "../assets/img/auto/1.jpg";
import img2 from "../assets/img/auto/2.jpg";
import img3 from "../assets/img/auto/3.jpg";
import img4 from "../assets/img/auto/4.jpg";
import img5 from "../assets/img/auto/5.jpg";
import img6 from "../assets/img/auto/6.jpg";
import img7 from "../assets/img/auto/7.jpg";
import img8 from "../assets/img/auto/8.jpg";




const AutoCard = () => {
  return (
    <section className="w-full">
       <section className="bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 relative">
            <span className="absolute left-0 -top-3 w-10 h-1 bg-primary"></span>
            Your Single Source for Glass Maintenance Services
          </h2>
          <p className="text-base-content mb-4 text-sm">
            DFW Glass Mart is your trusted, one-stop solution for <span className="font-medium">windshield replacement</span> and 
            <span className="font-medium"> auto glass repair</span> in Dallas. We provide a full range of OEM replacement windshields 
            for all domestic and foreign-made vehicles, ensuring quality and precision in every service.
          </p>
          <p className="text-base-content text-sm">
            Our expertise extends beyond standard vehicles—we also offer comprehensive auto glass replacement for buses, trucks, 
            heavy equipment, and off-road vehicles. With a reputation for excellence and reliability, DFW Glass Mart is the go-to 
            provider for all your glass maintenance needs. Trust us to deliver superior service every time!
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-64 md:h-80 rounded shadow overflow-hidden">
          <Image
            src={img3}
            alt="Glass Maintenance Services"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
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
    <section className="bg-base-100 py-20 px-6 space-y-24">
      {/* First Block: Windshield Repair */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Left */}
        <div className="relative w-full h-64 md:h-96 rounded shadow overflow-hidden">
          <Image src={img5} alt="Windshield Repair" fill className="object-cover" />
        </div>

        {/* Text Right */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 relative">
            <span className="absolute left-0 -top-3 w-10 h-1 bg-primary"></span>
            Comprehensive Windshield Repair & Replacement
          </h2>
          <p className="text-base-content mb-4 text-sm">
            Your <span className="font-medium">windshield</span> is a crucial safety component of your vehicle, 
            providing structural integrity and clear visibility. At <strong>DFW Glass Mart</strong>, we offer expert 
            windshield repair and full replacements for all makes and models, including luxury, commercial, 
            and heavy-duty vehicles.
          </p>
          <ul className="list-disc list-inside text-sm text-base-content space-y-2">
            <li><strong>Chip and crack repair</strong> – Prevent further damage with expert resin injection.</li>
            <li><strong>Full windshield replacement</strong> – OEM and high-quality aftermarket glass available.</li>
            <li><strong>Front windshield replacement cost estimates upfront</strong> – No hidden fees.</li>
            <li><strong>ADAS windshield recalibration</strong> – Ensuring advanced driver-assist systems function properly.</li>
          </ul>
        </div>
      </div>

      {/* Second Block: Commercial Vehicles */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Left */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 relative">
            <span className="absolute left-0 -top-3 w-10 h-1 bg-primary"></span>
            Truck & Commercial Vehicle Auto Glass Services
          </h2>
          <p className="text-base-content mb-4 text-sm">
            <strong>DFW Glass Mart</strong> offers specialized auto glass solutions for trucks, fleet vehicles, 
            and heavy-duty equipment. Whether you operate semi-trucks, delivery vans, or construction vehicles, 
            we provide durable glass replacements to keep your fleet road-ready.
          </p>
          <ul className="list-disc list-inside text-sm text-base-content space-y-2">
            <li>Windshield replacement for trucks & work vans</li>
            <li>Custom glass solutions for heavy equipment</li>
            <li>Fleet maintenance plans for auto glass services</li>
          </ul>
        </div>

        {/* Image Right */}
        <div className="relative w-full h-64 md:h-96 rounded shadow overflow-hidden">
          <Image src={img6} alt="Commercial Glass" fill className="object-cover" />
        </div>
      </div>
    </section>
    </section>
  );
};

export default AutoCard;
