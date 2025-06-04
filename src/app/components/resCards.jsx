import Image from "next/image";
import img1 from "../assets/img/res/1.jpg";
import img2 from "../assets/img/res/2.jpg";
import img3 from "../assets/img/res/3.jpg";
import img4 from "../assets/img/res/4.jpg";
import img5 from "../assets/img/res/5.jpg";

const slides = [
  {
    image: img2,
    title: "Glass Shower Doors: Long-Lasting Beauty and Durability",
    description:
      `At DFW Glass Mart, we understand that the biggest culprits of unattractive shower doors are soap scum buildup and mildew. That’s why we go the extra mile to provide high-quality glass shower doors with a long-lasting seal designed to prevent the growth of mildew and reduce soap scum accumulation.

With our expertly crafted shower doors, maintaining a spotless look is easy. Simply clean with a quality squeegee after each shower to keep your glass looking pristine and beautiful for years to come.

Upgrade your bathroom with durable and low-maintenance glass shower doors from DFW Glass Mart. Contact us today to learn more or to schedule your installation!`,
  },
  {
    image: img4,
    title: "Energy-Efficient Window Replacements",
    description:
      `Upgrading your home’s windows can enhance energy efficiency, reduce noise, and improve indoor comfort. At DFW Glass Mart, we offer high-performance window replacements with modern, insulated glass designed to lower energy bills and increase home value.

Our Energy-Efficient Glass Solutions:
Double-pane and triple-pane window replacements
Low-E glass for improved insulation and UV protection
Argon gas-filled windows to reduce heat transfer
Noise-reducing residential glass options`,
  },
  {
    image: img3,
    title: "Custom Glass Backsplashes & Cabinet Glass",
    description:
      `Looking to add a modern touch to your kitchen or bathroom? Our custom glass backsplashes and cabinet glass solutions are perfect for enhancing aesthetics while making cleaning easier.

Custom Glass Options for Your Home:
Glass cabinet doors for a sleek, contemporary look
Custom kitchen backsplashes – easy to clean and highly durable
Frosted, tinted, or patterned glass for privacy & style
Scratch-resistant and heat-resistant glass materials`,
  },
];


const AutoCard = () => {
  return (
    <section className="w-full">
<div className="w-full my-16 flex flex-col md:flex-row items-stretch px-6 max-w-7xl mx-auto">
  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12 space-y-6">
    <h2 className="text-3xl font-bold border-t-2 border-primary pt-4">
      Great Deals on Flat Glass for Your Home Glass Repair & Replacement
    </h2>
    <p>
At DFW Glass Mart, we specialize in all types of residential glass services, delivering top-tier workmanship that enhances the beauty and functionality of your home Glass Repair & Replacement.    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Mirror Replacement in Dallas: From repairing weathered storm windows to replacing and customizing mirrors, we handle it all.</li>
      <li>Custom Glass Fittings: Perfectly tailored solutions for your home’s unique needs.</li>
      <li>Mirror Repairs and Finishes: Restore your mirrors to like-new condition with our expert services.</li>
      <li>Storm Window Repairs and Replacements: Durable glass solutions to withstand harsh weather conditions.</li>
    </ul>
    <p className="font-semibold">
      New glass can transform the appearance of your home, both inside and out. Trust DFW Glass Mart to bring your vision to life with high-quality, reliable residential glass services. Contact us today for a free estimate!


    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 h-[500px] relative rounded-xl overflow-hidden shadow-lg mt-10 md:mt-0">
    <Image
      src={img1}
      alt="Residential glass services"
      fill
      className="object-cover"
    />
  </div>
</div>

    <div className="w-full flex flex-col md:flex-row items-stretch">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src={img5}
          alt="Glass repair technician"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
<div className="w-full md:w-1/2 flex flex-col justify-center bg-primary text-white px-6 py-24 space-y-6">
  <h2 className="text-3xl font-bold border-t-2 border-white pt-4">
    Residential Glass – We’ve Got You Covered
  </h2>
  <p>
    Let DFW Glass Mart handle your residential glass projects with expert precision. From standard window replacements to custom-cut glass features, we offer quality solutions tailored to your home’s needs.
  </p>
  <ul className="list-disc pl-5 space-y-1">
    <li>Home Glass Replacement: Fast, reliable fixes for damaged windows</li>
    <li>Custom Mirrors: Made-to-fit options with optional framing</li>
    <li>Glass Table Tops: Tailored to size for dining, coffee, and office tables</li>
    <li>Sliding Glass Doors: Repair and install stylish tempered doors</li>
    <li>Storm & Garage Door Glass: Durable replacements built to last</li>
    <li>Exterior Windows: Boost curb appeal and energy efficiency</li>
    <li>Glass Shower Doors: Modern, water-resistant options for any bath</li>
  </ul>
  <p className="pt-2 font-semibold">
    Call (972) 900-3117 today to schedule your residential glass service with DFW Glass Mart!
  </p>
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
