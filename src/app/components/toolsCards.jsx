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
            <h2 className="text-4xl font-bold">Good Glass Solutions for Every Need</h2>
            <p>
At DFW Glass Mart, providing high-quality, reliable glass repair and replacement services is our priority. Using the best tools and materials, we ensure your residential glass repair in Dallas is done quickly and to your complete satisfaction.

From autos and homes to commercial fleet vehicles, we use high-grade, multi-purpose glass designed to enhance ambiance, ergonomics, and functionality. Our glass solutions support temperature control, UV protection, and ambient natural lighting while improving security and durability.            </p>
            <p>
Unfortunately, mishaps and break-ins can lead to damage, and older glass may need replacement or upgrades to meet modern environmental and security standards. Investing in good glass solutions is not just a necessity—it’s a smart decision for your home, business, or vehicle.

            </p>
            <p>
Choose DFW Glass Mart for expert craftsmanship and top-tier glass solutions that deliver lasting results. Contact us today for a free consultation!

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
            <h2 className="text-4xl font-bold">Our Expertise</h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {["Residential Windows", "Home Office Windows", "Home Doorways and Enclosures", "Glass Storm Doors", "Tabletops", "Mirrors", "Float Glass", "Wired Glass", "Flat Glass", "Security Glass", "Tempered Glass"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-white w-4 h-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Trust DFW Glass Mart for reliable and high-quality residential window and glass services tailored to your needs. Contact us today to schedule your consultation!
            </p>
          </div>
        </div>
      </section>
          <section className="bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 relative">
            <span className="absolute left-0 -top-3 w-10 h-1 bg-primary"></span>
            Top-Notch Industry Standards
          </h2>
          <p className="text-base-content mb-4 text-sm">
            At <strong>DFW Glass Mart</strong>, we adhere to the highest industry standards to deliver exceptional 
            auto and residential glass repair and replacement services. Our commitment to quality is reflected 
            in the tools, materials, and expertise we bring to every job.
          </p>
          <ul className="list-disc list-inside text-sm text-base-content space-y-2 mb-4">
            <li>
              <strong>Advanced Tools and Equipment:</strong> We use the best hand and power cut-out glass tools, 
              replacement blades, and specialized auto glass repair tools for precision and efficiency.
            </li>
            <li>
              <strong>High-Grade Materials:</strong> Our services are backed by premium glues, urethanes, and 
              primers to ensure durability and a flawless finish.
            </li>
            <li>
              <strong>Certified Technicians:</strong> Our courteous, clean, and highly trained glass techs are 
              committed to providing top-quality craftsmanship and exceptional customer service.
            </li>
          </ul>
          <p className="text-base-content text-sm">
            With DFW Glass Mart, you can trust that your glass repair or replacement will meet the highest standards 
            of excellence. Contact us today to experience the difference!
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-64 md:h-80 rounded shadow overflow-hidden">
          <Image
            src={img3}
            alt="Glass Repair Standards"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>

        <section className="bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-2">
          Why Pick <span className="text-primary">DFW Glass Mart</span> as Your Glass Repair<br />
          and Replacement Company in DFW?
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto my-6" />

        {/* Grid Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-10">
          {/* Card 1 */}
          <div className="border border-base-300 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Quick and Responsive Glass Services</h3>
            <p className="text-sm text-base-content mb-2">
              At DFW Glass Mart, we know that glass damage can happen at any time without warning. That’s why we pride ourselves on being quick, reliable, and responsive.
            </p>
            <ul className="list-disc list-inside text-sm text-base-content mb-2">
              <li><strong>Fast Dispatch:</strong> Our team is dispatched promptly to address your auto or residential glass repair needs in Dallas and the surrounding areas.</li>
              <li><strong>On-Time Service:</strong> We stick to our scheduled appointments and always meet our promised timelines.</li>
            </ul>
            <p className="text-sm text-base-content">
              Trust DFW Glass Mart for efficient and dependable glass repair and replacement services when you need them most. Contact us today for quick assistance!
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-base-300 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Trained and Certified Glass Technicians</h3>
            <p className="text-sm text-base-content mb-2">
              At DFW Glass Mart, all of our glass repair technicians are highly trained and certified to meet and exceed the highest industry standards.
            </p>
            <ul className="list-disc list-inside text-sm text-base-content mb-2">
              <li><strong>Expert Training:</strong> Our technicians are skilled in the latest advancements in glass repair and replacement technology, ensuring precise and reliable results.</li>
              <li><strong>Customer-Focused:</strong> Courteous and professional, our team is dedicated to delivering exceptional service with attention to detail and customer satisfaction.</li>
            </ul>
            <p className="text-sm text-base-content">
              When you choose DFW Glass Mart, you can trust that your auto or residential glass needs are handled by certified experts who prioritize quality and excellence. Contact us today to experience the difference!
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-base-300 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Always Training and Improving for Better Glass Solutions Tech and Tools</h3>
            <p className="text-sm text-base-content mb-2">
              At DFW Glass Mart, we’re committed to continuous improvement and staying ahead with the latest advancements in glass repair and replacement technology.
            </p>
            <ul className="list-disc list-inside text-sm text-base-content mb-2">
              <li><strong>Advanced Windshield Replacement System:</strong> Our updated system ensures your auto or truck windshield replacement is performed with precision, minimizing air leaks and maximizing safety.</li>
              <li><strong>Commitment to Excellence:</strong> Through ongoing training and skill development, our team consistently delivers the best possible solutions for your auto glass repair needs.</li>
            </ul>
            <p className="text-sm text-base-content">
              Trust DFW Glass Mart to provide safe, reliable, and expertly installed windshields. Contact us today to schedule your service!
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-base-300 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Lifetime Workmanship Guarantee</h3>
            <p className="text-sm text-base-content mb-2">
              At DFW Glass Mart, we stand behind the quality of our work with a <strong>lifetime workmanship guarantee</strong>, ensuring you receive only the best in auto and residential glass repair and replacement services.
            </p>
            <ul className="list-disc list-inside text-sm text-base-content mb-2">
              <li><strong>Exceeding Industry Standards:</strong> All of our workmanship meets and exceeds the highest industry standards, providing you with peace of mind and long-lasting results.</li>
              <li><strong>A+ Glass Technology:</strong> We use state-of-the-art tools and materials to ensure precision and durability in every project, from <strong>windshield replacements</strong> to <strong>residential glass installations</strong>.</li>
            </ul>
            <p className="text-sm text-base-content">
              Choose DFW Glass Mart for expert craftsmanship and a lifetime guarantee you can trust. Contact us today for glass solutions that last!
            </p>
          </div>
        </div>

        {/* Footer Description */}
        <p className="mt-12 text-sm text-base-content max-w-4xl mx-auto">
          At DFW Glass Mart, we specialize in locating the perfect <strong>glass solutions</strong> for cars, trucks, and homes. With access to an extensive inventory of OEM glass parts for nearly every vehicle on the road and the finest residential windows available, we ensure every project meets the highest standards.
        </p>
      </div>
    </section>
    </section>
  );
};

export default ToolsCard;