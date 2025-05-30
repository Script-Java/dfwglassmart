import Image from "next/image";
import img1 from "../assets/img/tools/1.jpg";
import img4 from "../assets/img/tools/4.jpg";
import img5 from "../assets/img/tools/5.jpg";
import { FaCheckCircle } from "react-icons/fa";

const ToolsCard = () => {
  return (
    <section className="w-full">
      {/* Main Auto Glass Section */}
      <section className="w-full bg-base-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="w-full h-[700px] relative rounded-xl overflow-hidden shadow-md">
            <Image src={img1} alt="Glass tools" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-primary leading-tight">
              Top-Quality Auto Glass Repair<br />
              & Windshield Services
            </h2>
            <div className="w-16 h-1 bg-primary"></div>

            <p className="text-base-content">
              At <strong>DFW Glass Mart</strong>, we take pride in using advanced tech tools to provide fast, reliable, and flawless auto glass services. Whether it’s a chip, crack, or full windshield replacement, our certified team ensures every job is done right the first time.
            </p>
            <p className="text-base-content">
              From minor repairs to complete replacements, our tools and technicians deliver precision, quality, and long-lasting results. Trust us to restore safety, visibility, and aesthetics to your vehicle.
            </p>
            <ul className="space-y-3 text-base-content text-lg pt-2">
              <li><span className="text-primary font-bold mr-2">1</span> Advanced calibration tools for ADAS vehicles</li>
              <li><span className="text-primary font-bold mr-2">2</span> Leak-proof sealants and OEM-grade glass</li>
              <li><span className="text-primary font-bold mr-2">3</span> On-site mobile repairs for your convenience</li>
              <li><span className="text-primary font-bold mr-2">4</span> Lifetime workmanship guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Residential Expertise Section */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-primary text-white p-12 flex flex-col justify-center">
          <div className="space-y-6 max-w-2xl">
            <div className="w-12 h-1 bg-white mb-2"></div>
            <h2 className="text-4xl font-bold">Residential Glass Expertise</h2>
            <p>
              DFW Glass Mart delivers expert <strong>residential glass repair and replacement</strong> services across Dallas. We specialize in <strong>energy-efficient windows, custom shower doors</strong>, and <strong>modern glass solutions</strong> that enhance style and performance.
            </p>
            <p>
              Whether you're upgrading your kitchen with glass backsplashes or replacing aging windows, our high-grade materials and expert installers ensure the job exceeds expectations.
            </p>
            <p>
              Rely on us for: energy savings, enhanced curb appeal, and lasting value.
            </p>
          </div>
        </div>

        <div className="h-[600px] w-full relative">
          <Image src={img4} alt="Residential glass view" fill className="object-cover" />
        </div>

        <div className="h-[600px] w-full relative">
          <Image src={img5} alt="Rear window view" fill className="object-cover" />
        </div>

        <div className="bg-primary text-white p-12 flex flex-col justify-center">
          <div className="space-y-6 max-w-2xl">
            <div className="w-12 h-1 bg-white mb-2"></div>
            <h2 className="text-4xl font-bold">What We Specialize In</h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {["Windows", "Shower Doors", "Backsplashes", "Cabinet Glass", "Mirrors", "Tempered Glass", "Security Glass", "Float Glass", "Storm Doors", "Enclosures"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-white w-4 h-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Choose DFW Glass Mart for custom-tailored, expert-installed glass solutions. Contact us today and get started with a free consultation!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ToolsCard;