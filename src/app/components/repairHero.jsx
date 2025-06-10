import Image from "next/image";
import bgImage from "../assets/img/tools/2.jpg"; // Replace with your actual image path

export default function RepairVsReplace() {
  return (
    <section className="relative w-full h-[900px] md:h-[500px] p-10 flex items-center justify-center text-white">
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
          Replacement vs. Repair: What’s Right for Your Glass?
        </h1>
        <p className="text-base md:text-lg">
          Not all damaged glass requires replacement—sometimes a quick and efficient repair is all that’s needed. At DFW Glass Mart, we offer professional assessments to determine whether <strong>glass repair</strong> or <strong>replacement</strong> is the best option for your situation.
        </p>
        <div className="text-sm md:text-base space-y-2">
          <p><strong>Glass Repair:</strong> Ideal for minor damage like small windshield chips or cracks. It’s fast, affordable, and can restore your glass safely.</p>
          <p><strong>Glass Replacement:</strong> This is necessary when the damage is extensive or compromises the structural integrity of your auto windshield or residential glass.</p>
        </div>
        <p className="text-sm md:text-base">
          Unsure of what you need? Call us at <strong>(972) 900-3117</strong> to schedule an appointment with one of our trained glass professionals. We’ll assess the damage and recommend the safest and most cost-effective solution for your auto or residential glass.
        </p>
      </div>
    </section>
  );
}