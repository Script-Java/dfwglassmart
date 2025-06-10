import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ResSlider from "../components/resSlider";
import ResCards from "../components/resCards";
import Areas from "../components/repairHero";
import Image from "next/image";
import bgImage from "../assets/img/res/6.jpg"; // Adjust the path as necessary

export default function AutoPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <ResSlider></ResSlider>
      <ResCards></ResCards>
            <section className="relative my-20 w-full h-[500px] p-10 flex items-center justify-center text-white">
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
    Repair or Replace? What’s Best for Your Home Glass?
  </h1>
  <p className="text-base md:text-lg">
    Cracked windows or damaged patio doors? At <strong>DFW Glass Mart</strong>, we provide honest assessments to help you decide whether your residential glass needs a quick fix or a full replacement.
  </p>
  <div className="text-sm md:text-base space-y-2">
    <p>
      <strong>🔧 Repair:</strong> Perfect for small chips, cracks, or foggy panes. Fast and budget-friendly—great for keeping your home safe without the cost of full replacement.
    </p>
    <p>
      <strong>🪟 Replacement:</strong> The right choice when the damage is extensive, your window seals have failed, or you're upgrading to more energy-efficient glass. We use premium materials to ensure long-lasting performance and comfort.
    </p>
  </div>
  <p className="text-sm md:text-base">
    Unsure what you need? Give us a call at <strong>(972) 900-3117</strong>. Our residential glass experts will evaluate the situation and recommend the safest, most cost-effective solution for your home.
  </p>
</div>

      
                </section>
      
      <Footer></Footer>
    </div>
  );
}
