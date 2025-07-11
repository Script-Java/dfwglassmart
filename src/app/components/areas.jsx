
export default function Areas() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
{/* Left Column */}
<div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-4 w-full">
  <div className="text-center md:text-left">
    <h2 className="text-3xl font-bold mb-4">Craftsmanship You Can Trust</h2>
    <div className="w-16 h-[2px] bg-white mb-6 mx-auto md:mx-0"></div>
    <p className="text-lg leading-relaxed">
      At DFW Glass Mart, our experienced professionals are dedicated to
      providing top-quality auto glass repair and replacement services
      in Dallas. We use the highest-grade glass and state-of-the-art
      tools to ensure every job is completed with precision and to our
      customers' full satisfaction.
      <br />
      <br />
      At DFW Glass Mart, we take pride in delivering expert auto and residential glass services across Dallas and surrounding area.
    </p>
  </div>

  {/* Border: bottom on mobile, right on desktop */}
  <div className="bg-white w-full h-[2px] md:w-2 md:h-full"></div>
</div>


        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Greater Dallas Mobile Service Area</h2>
            <div className="w-16 h-[2px] bg-white mb-6"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-left mt-auto">
            {[
              "Dallas", "Plano", "Frisco", "McKinney", "Celina", "Prosper", "The Colony", "Allen",
              "Lewisville", "Little Elm", "Coppell", "Flower Mound", "Grapevine", "South Lake", "Addison", "Farmers Branch",
              "Richardson", "Garland", "Sachse", "Wylie", "Rock Wall", "Mesquite", "Highland Park", "University Park",
              "Irving", "Duncanville", "Desoto", "Lancaster", "Carrollton", "Rowlett", "Cedar Hill", "Princeton",
            ].map((city, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="text-lg text-black">→</span>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
