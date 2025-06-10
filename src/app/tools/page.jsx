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
      <Footer />
    </div>
  );
}