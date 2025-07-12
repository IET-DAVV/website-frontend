import GalleryCarousel from "@/components/hostel/HostelGallery";
import HostelComponent from "@/components/hostel/HostelHero";
import AdmissionComponent from "@/components/hostel/HostelInfo";

const page = () => {
  return (
    <div>
      <HostelComponent />
      <AdmissionComponent />
      <GalleryCarousel />
    </div>
  );
};

export default page;
