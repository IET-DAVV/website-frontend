interface EBooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EBooksModal: React.FC<EBooksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">
            Choose E-Book Platform
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            x
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={() =>
              handleExternalLink("https://ebooks.wileyindia.com/home")
            }
            className="w-full bg-orange-500 hover:bg-yellow text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            WILEY
          </button>

          <button
            onClick={() => handleExternalLink("https://www.vitalsource.com/")}
            className="w-full bg-blue-500 hover:bg-light-blue text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            McGraw Hill
          </button>
        </div>
      </div>
    </div>
  );
};

export default EBooksModal;
