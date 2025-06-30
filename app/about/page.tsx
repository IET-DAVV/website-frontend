import About from "@/components/about-page/About";
import History from "@/components/about-page/History";
import Director from "@/components/about-page/Director";
import VC from "@/components/about-page/VC";
import Vision from "@/components/about-page/Vision";
import Mission from "@/components/about-page/Mission";

const page = () => {
  return (
    <>
      <div className=" overflow-hidden bg-white">
        <About />
        <History />
        <Vision />
        <Mission />
        <div className="p-5 flex flex-col space-y-5">
          <Director />
          <VC />
        </div>
      </div>
    </>
  );
};

export default page;