"use client"
import { useState } from 'react';
import { clubs, imagesMap } from '@/constants/clubs/data';
import ImageGallery from './Gallery';
import Sidebar from './Sidebar';
import Header from './Header';

const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState<string>('E-CELL');

  return (
    <>
     <div
     className='bg-gray-50 flex flex-col gap-2'
     >

<Header />

       
<div className="flex bg-gray-50 ">
  {/* Sidebar - Centered vertically */}
  <aside className="w-1/4 flex items-center justify-center">
    <div className="p-8">
      <Sidebar clubs={clubs} selectedClub={selectedClub} onSelectClub={setSelectedClub} />
    </div>
  </aside>

  {/* Main content - Images start from the top */}
  <main className="w-3/4 p-8 ">
    <ImageGallery images={imagesMap[selectedClub] || []} />
  </main>
</div>

     </div>
    </>
  );
}

export default Clubs;
