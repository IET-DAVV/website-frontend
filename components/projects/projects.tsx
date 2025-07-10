const DownloadRow = ({
  label,
  highlight,
}: {
  label: string;
  highlight?: string;
}) => (
  <tr className="border border-gray-400 font-bold">
    <td className="px-6 py-4 text-sm text-center w-3/4">
      {label}
      {highlight && (
        <span className="font-bold" style={{ color: "#3B7A9E" }}>
          {highlight}
        </span>
      )}
    </td>
    <td className="text-center px-4 py-3 w-1/4">
      <button
        className="text-white px-4 py-2 rounded font-semibold"
        style={{ backgroundColor: "#3B7A9E" }}
        disabled
      >
        Downlad
      </button>
    </td>
  </tr>
);

export default function ProjectSection() {
  return (
    <div className="space-y-10">
      {/* Internship Format */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center rounded-md ">
          <div className="font-bold text-sm text-center px-6 py-4 w-full">
            Internship Report Format April-2022 (for students who have opted for
            Internship)
          </div>
          <div className="text-center px-6  w-full">
            <button
              className="text-white px-4 py-2 rounded font-semibold"
              style={{ backgroundColor: "#3B7A9E" }}
              disabled
            >
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Computer Engineering Section */}
      <div>
        <h3
          className="text-left text-xl font-bold mb-2 py-2"
          style={{ color: "#3B7A9E" }}
        >
          1. Computer Engineering Department and Information Technology
          Department
        </h3>
        <table className="w-full border border-collapse text-sm">
          <tbody>
            <DownloadRow label="Sample Thesis" />
            <DownloadRow label="Synopsis" />
            <DownloadRow label="SDS Format" />
            <DownloadRow label="SRS Format" />
            <DownloadRow label="Sample Document (Use Case Diagram & Description)" />
            <DownloadRow label="Project Report Format(for Application Projects)" />
            <DownloadRow label="Project Report Format (for Research Projects)" />
            <DownloadRow label="Dos & Don’ts" />
          </tbody>
        </table>
      </div>

      {/* Electronics Department */}
      <div>
        <h3
          className="text-left text-xl font-bold mb-2 py-2"
          style={{ color: "#3B7A9E" }}
        >
          2. Electronics & Telecommunication Engineering Department
        </h3>
        <table className="w-full border border-collapse text-sm">
          <tbody>
            <DownloadRow label="Report Format" />
          </tbody>
        </table>
      </div>
    </div>
  );
}
