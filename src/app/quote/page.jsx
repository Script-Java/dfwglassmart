import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteForm";

export default function QuotePage() {
  return (
    <div className="">
      <Navbar />

      <section className="py-20 my-20 px-6 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-primary">Free Glass Quote</h1>
        <p className="text-lg mb-4 text-neutral-content">
          Thank you for choosing DFW Glass Mart for your glass repair and replacement needs.
        </p>
        <p className="mb-10 text-base-content">
          We proudly offer fast, mobile, and affordable glass solutions across Dallas and surrounding areas. Whether it’s a damaged windshield, residential window, or custom glass service, our expert team is here for you.
        </p>

        <div className="bg-base-100 rounded-xl shadow-xl p-8 text-left text-[17px] space-y-6 border border-base-300">
          <p>
            With certified DFW Glass Mart technicians on your side, you can expect exceptional care, precision, and top-tier materials in every service. We stand behind our work with a 100% workmanship guarantee.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Why Choose DFW Glass Mart?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mobile Convenience:</strong> We come to your location at no extra cost.</li>
              <li><strong>Premium Quality:</strong> High-grade materials that meet or exceed OEM standards.</li>
              <li><strong>Skilled Experts:</strong> Over 21 years of combined glass experience.</li>
              <li><strong>Customer First:</strong> Your satisfaction is our mission.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Our Services Include:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Windshield Repair and Replacement</li>
              <li>Residential Window and Glass Solutions</li>
              <li>Emergency and Same-Day Glass Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">How It Works:</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Submit a Quote Request:</strong> Use the form below to get started.</li>
              <li><strong>Get a Fast Response:</strong> Our team will reach out with details and options.</li>
              <li><strong>Enjoy Hassle-Free Service:</strong> We arrive, repair, and leave you worry-free.</li>
            </ol>
          </div>

          <p className="text-lg font-semibold">
            Ready for a quote? Fill out the form below and let DFW Glass Mart handle the rest!
          </p>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}