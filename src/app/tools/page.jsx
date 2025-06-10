import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ToolsSlider from "../components/toolsSlider";
import ToolsCard from "../components/toolsCards";

export default function ToolsPage() {
  return (
    <div className="">
      <Navbar />
      <ToolsSlider />
      <ToolsCard />
      <div className="h-1 w-2/6 bg-primary my-4 mx-auto">

      </div>
      <Footer />
    </div>
  );
}