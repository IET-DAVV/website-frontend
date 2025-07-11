import About from "@/components/about-page/About";
import History from "@/components/about-page/History";
import Director from "@/components/about-page/Director";
import VC from "@/components/about-page/VC";
import Vision from "@/components/about-page/Vision";
import Mission from "@/components/about-page/Mission";
import AchievementsSlider from "@/components/about-page/achivements";

const page = () => {
  return (
    <>
      <div className=" overflow-hidden bg-white">
        <About />
        <History />
        <AchievementsSlider />
        <Vision />
        <Mission />
        <div className="p-5 flex flex-col space-y-5">
          <VC />
          <Director />
        </div>
      </div>
    </>
  );
};

export default page;
//updated