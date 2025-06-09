import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteForm";
import Image from "next/image";
import img1 from "../assets/img/quote/1.jpg";

export default function QuotePage() {
  return (
    <div className="bg-base-100">
      <Navbar />

      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 text-primary leading-tight">
              Get a Free Quote for Glass Repair & Replacement in Dallas
            </h1>
            <p className="text-lg text-gray-600">
              Need fast, affordable, and professional glass repair or replacement? DFW Glass Mart has you covered. Whether it's a windshield replacement, residential window repair, or commercial glass installation, our experienced team is ready to assist.
              <br /> <br />
              Getting a free quote is quick and hassle-free. Simply fill out the form, and our experts will provide a customized estimate based on your needs. We ensure competitive pricing, top-quality materials, and skilled workmanship on every job.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-left text-[17px] space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">Why Choose DFW Glass Mart?</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Fast & Reliable Service:</strong> We respond quickly and complete jobs efficiently.</li>
                <li><strong>High-Quality Materials:</strong> We use durable, premium glass for long-lasting results.</li>
                <li><strong>Experienced Technicians:</strong> Certified professionals ensure precision and safety.</li>
                <li><strong>Affordable Pricing:</strong> Transparent costs with no hidden fees.</li>
                <li><strong>Convenient Mobile Service:</strong> We come to your home, office, or location.</li>
              </ul>
            </div>

            <p className="text-lg font-medium text-gray-800">
              Whether you need auto glass repair, home window replacement, or emergency glass services, our team is here to help. Contact us today and get your free quote for expert glass repair and replacement in Dallas.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={img1}
            alt="GlassGo responding to clients"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}
