import Footer from "@/components/Footer/Footer";
import MainScreen from "@/components/MainScreen/MainScreen";
import Navbar from "@/components/Navbar/Navbar";
import Searchbar from "@/components/Searchbar/Searchbar";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Searchbar />
      <MainScreen />
      <Footer />
    </div>
  );
}
