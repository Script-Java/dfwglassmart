import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AutoSlider from "../components/autoSlider";
import AutoCard from "../components/autoCards";
import Areas from "../components/repairHero";
import Image from "next/image";
import bgImage from "../assets/img/auto/9.jpg"; // Replace with your actual image path

export default function AutoPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <AutoSlider></AutoSlider>
      <AutoCard></AutoCard>
      <section className="relative my-20 w-full h-[900px] md:h-[500px] p-10 flex items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={bgImage}
                alt="Glass Repair Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
      
            {/* Content */}
<div className="relative z-10 max-w-7xl px-6 text-center space-y-6">
  <div className="h-1 w-20 bg-white mx-auto"></div>
  <h1 className="text-4xl md:text-5xl font-semibold pt-4">
    Replacement vs. Repair: What’s Right for Your Auto Glass?
  </h1>
  <p className="text-base md:text-lg">
    Not every chip or crack means you need a full replacement. At <strong>DFW Glass Mart</strong>, we help you make the right call with honest, expert evaluations tailored to your needs.
  </p>
  <div className="text-sm md:text-base space-y-2">
    <p>
      <strong>Repair:</strong> Best for minor cracks or chips that don’t affect visibility or compromise the integrity of your glass. Quick, affordable, and effective.
    </p>
    <p>
      <strong>Replacement:</strong> Recommended when the damage is widespread, in the driver’s view, or structurally unsafe. We use premium materials and certified techniques to ensure safety and durability.
    </p>
  </div>
  <p className="text-sm md:text-base">
    Not sure which service is right for you? Call us at <strong>(972) 900-3117</strong> to speak with our experienced glass technicians. We’ll assess the damage and guide you to the safest and most cost-effective option.
  </p>
</div>

          </section>
      <Footer></Footer>
    </div>
  );
}
