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
      "Keep your bathroom stylish and low-maintenance with our premium glass shower doors. Designed to resist mildew and soap scum, our doors maintain their clarity and appeal for years with minimal upkeep.",
  },
  {
    image: img3,
    title: "Energy-Efficient Window Replacements",
    description:
      "Cut your energy bills and boost comfort with our insulated glass window replacements. Featuring Low-E coatings and gas-filled panes, they reduce heat transfer while enhancing home value and quietness.",
  },
  {
    image: img4,
    title: "Custom Glass Backsplashes & Cabinet Glass",
    description:
      "Upgrade your kitchen or bath with custom glass designs that are as durable as they are beautiful. From cabinet inserts to sleek backsplashes, our options offer easy cleaning and modern flair.",
  },
];


const AutoCard = () => {
  return (
    <section className="w-full">
<div className="w-full my-16 flex flex-col md:flex-row items-stretch px-6 max-w-7xl mx-auto">
  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12 space-y-6">
    <h2 className="text-3xl font-bold border-t-2 border-primary pt-4">
      Residential Glass Services Made Simple
    </h2>
    <p>
      DFW Glass Mart offers expert glass solutions for your home—from mirror repairs to custom-cut installations. We deliver clean, efficient work designed to elevate your space.
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Mirror and glass replacements</li>
      <li>Storm window repairs</li>
      <li>Tailored fittings for any room</li>
    </ul>
    <p className="font-semibold">
      Call today for a fast, free quote!
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
