import GalleryCarousel from "./HostelGallery";
import HostelComponent from "./HostelHero";
import AdmissionComponent from "./HostelInfo";

export default function HostelPage() {
  return <div>
        <HostelComponent/>
        <AdmissionComponent/>
        <GalleryCarousel/>
  </div>;
}
