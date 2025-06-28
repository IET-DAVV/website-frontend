import { admissionDownloads } from "@/constants/process";
import { Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <div className="space-y-10">
      {admissionDownloads.map((section, index) => (
        <div key={index} className="space-y-3">
          <h2
            className="text-x1 font-semibold text-center font-serif text-[#2F2F2F]"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />

          <div className="border rounded-md divide-y ">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center px-4 py-3"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077C2] text-white px-4 py-1 rounded inline-flex items-center gap-1 text-sm"
                >
                  Click Here <Download size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadSection;
