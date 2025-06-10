import Image from "next/image";
import img1 from "../assets/img/tools/1.jpg";
import img2 from "../assets/img/tools/2.jpg";
import img3 from "../assets/img/tools/3.jpg";
import img4 from "../assets/img/tools/4.jpg";
import img5 from "../assets/img/tools/5.jpg";
import { FaCheckCircle } from "react-icons/fa";

const ToolsCard = () => {
  return (
    <section className="w-full">
      {/* Main Auto Glass Section */}
      <section className="w-full bg-base-100 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[700px] rounded-xl overflow-hidden shadow-md">
            <Image src={img1} alt="Glass tools" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Top-Quality Auto Glass Repair<br />
              & Windshield Services
            </h2>
            <div className="w-16 h-1 bg-primary"></div>

            <p className="text-base-content">
              At <strong>DFW Glass Mart</strong>, we use state-of-the-art tools and precision methods to deliver fast, dependable, and flawless auto glass services. Whether it's a small chip or a full windshield replacement, our certified professionals guarantee exceptional results.
            </p>
            <p className="text-base-content">
              We handle everything from basic repairs to complex replacements with care and accuracy. Our expert team restores your vehicle's safety, clarity, and aesthetics—so you’re back on the road worry-free.
            </p>
            <ul className="space-y-3 text-base-content text-lg pt-2">
              <li><span className="text-primary font-bold mr-2">1</span> ADAS-ready calibration tools for modern vehicles</li>
              <li><span className="text-primary font-bold mr-2">2</span> Premium sealants and manufacturer-grade glass</li>
              <li><span className="text-primary font-bold mr-2">3</span> Fully mobile service at your convenience</li>
              <li><span className="text-primary font-bold mr-2">4</span> Guaranteed lifetime craftsmanship</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Residential Expertise Section */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-primary text-white p-6 sm:p-12 flex flex-col justify-center">
          <div className="space-y-6 max-w-2xl">
            <div className="w-12 h-1 bg-white mb-2"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Good Glass Solutions for Every Need</h2>
            <p>
              From emergency repairs to complete replacements, DFW Glass Mart is your trusted source for residential glass solutions in Dallas. We use premium materials and proven techniques for results you can count on.
            </p>
            <p>
              Whether it's windows, doors, or custom panels, our energy-efficient and secure glass helps elevate your home’s comfort and appearance. Our products support temperature control, UV protection, and improved lighting.
            </p>
            <p>
              Damaged, outdated, or inefficient glass? We offer modern replacements that boost efficiency, safety, and design. Protect what matters most with our durable solutions.
            </p>
            <p>
              Contact DFW Glass Mart today for tailored glass services built around your home’s needs and style.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] lg:h-[600px]">
          <Image src={img4} alt="Residential glass view" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        <div className="relative hidden md:block w-full aspect-[4/3] lg:h-[600px]">
          <Image src={img5} alt="Rear window view" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        <div className="bg-primary text-white p-6 sm:p-12 flex flex-col justify-center">
          <div className="space-y-6 max-w-2xl">
            <div className="w-12 h-1 bg-white mb-2"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {["Residential Windows", "Home Office Windows", "Home Doorways and Enclosures", "Glass Storm Doors", "Tabletops", "Mirrors", "Float Glass", "Wired Glass", "Flat Glass", "Security Glass", "Tempered Glass"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-white w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Trust DFW Glass Mart for residential glass services that blend quality, style, and function. Schedule your consultation with our specialists today.
            </p>
          </div>
        </div>
         <div className="relative block md:hidden w-full aspect-[4/3] lg:h-[600px]">
          <Image src={img5} alt="Rear window view" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>
    </section>
  );
};

export default ToolsCard;
