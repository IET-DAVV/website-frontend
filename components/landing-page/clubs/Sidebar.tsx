import { motion } from "framer-motion";

interface SidebarProps {
  clubs: string[];
  selectedClub: string;
  onSelectClub: (club: string) => void;
}

const Sidebar = ({ clubs, selectedClub, onSelectClub }: SidebarProps) => {
  return (
    <aside className="flex flex-col items-start justify-start gap-12 px-4 text-center text-xl text-gray-400 font-manrope">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-2"
      >
        {clubs.map((club, index) => (
          <motion.li
            key={club}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`cursor-pointer p-2 flex items-center rounded-lg ${
              club === selectedClub ? "text-black" : ""
            }`}
            onClick={() => onSelectClub(club)}
          >
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: selectedClub === club ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
              className={`mr-2 text-xl ${
                selectedClub === club ? "text-black" : "text-white"
              }`}
            >
              •
            </motion.span>
            <span className="text-dark-gray">{club}</span>
          </motion.li>
        ))}
      </motion.ul>
    </aside>
  );
};

export default Sidebar;
