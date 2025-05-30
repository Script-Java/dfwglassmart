import Image from "next/image";
import img1 from "../assets/img/cards/1.jpg";
import img2 from "../assets/img/cards/2.jpg";
import img3 from "../assets/img/cards/3.jpg";
import img4 from "../assets/img/cards/4.jpg";
import img5 from "../assets/img/img1.jpg";
import img6 from "../assets/img/img10.jpg";

const slides = [
  {
    image: img1,
    title: "Fast & Reliable Auto Glass Repairs",
    description:
      "Cracked windshields and shattered windows are no match for DFW Glass Mart. With over 21 years of experience, our technicians deliver fast, professional, and high-quality repairs using top-tier materials and tools—getting you back on the road safely and quickly.",
  },
  {
    image: img2,
    title: "Custom Glass Solutions for Your Home",
    description:
      "From sleek shower enclosures to modern mirrors and tabletops, our custom residential glass services are designed to enhance your home’s style and functionality. We measure, cut, and install with precision to bring your vision to life.",
  },
  {
    image: img4,
    title: "Emergency Mobile Glass Services",
    description:
      "Accidents and weather don’t wait—and neither do we. Our mobile glass experts provide emergency repairs across Dallas, ensuring your vehicle or home is secure again with minimal disruption and zero hassle.",
  },
  {
    image: img3,
    title: "Why Choose DFW Glass Mart?",
    description:
      "At DFW Glass Mart, we combine expert craftsmanship with cutting-edge technology to deliver flawless results—whether it’s auto or residential glass. We stand by our work and guarantee your satisfaction on every job, big or small.",
  },
];

const Card = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Expert Glass Repair & Replacement Services in
            <br /> Dallas and Surrounding Areas
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            At DFW Glass Mart, we have proudly served the auto glass industry
            for over <strong>21 years</strong>. Our licensed and skilled
            technicians deliver <strong>trusted, high-quality service</strong>{" "}
            backed by our commitment to excellence. Whether you need auto glass
            repair or residential glass upgrades, we bring top-tier workmanship
            and customer care to every job. <br />
            <br /> <strong>Contact us today</strong> to schedule service or get
            a free quote.
          </p>
        </div>
      </div>

      {/* Workmanship Section */}
      <div className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-primary font-bold text-3xl md:text-4xl">
              100% Workmanship Guarantee: Quality You Can Trust
            </h2>
            <p className="text-lg text-white">
              At DFW Glass Mart, we take pride in providing top-quality auto and
              residential glass repair and replacement services in Dallas and
              surrounding areas. Backed by our 100% Workmanship Guarantee, you
              can trust us to deliver exceptional results every time.
            </p>
            <p className="text-lg text-white">
              Whether you need a <strong>fast windshield replacement</strong>, a
              reliable car window repair, or{" "}
              <strong>custom home glass solutions</strong>, we’ve got you
              covered. Our technicians are highly skilled and committed to
              providing prompt, dependable service.
            </p>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={img5}
              alt="Workmanship Guarantee"
              className="object-cover w-full h-auto"
            />
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
    Looking for a quick and reliable glass repair or replacement quote? At
    DFW Glass Mart, we’re here to help!
  </p>
  <h3 className="text-xl font-semibold">
    Damaged Car Window? We’ve Got You Covered
  </h3>
  <p>
    At DFW Glass Mart, we understand the urgency of getting your vehicle back
    on the road. That’s why our fast and efficient mobile auto glass
    specialists provide top-quality windshield replacements and car window
    repairs. We use only the highest-grade materials available on the market
    to ensure durability and safety. With our expert team, you can trust us to
    deliver hassle-free service. We’ll have you driving down the highway with
    minimal inconvenience. Count on our skilled auto glass experts to get you
    back on the road safely, quickly, and with confidence. Contact us today
    for your free quote!
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

export default Card;
