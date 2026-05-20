/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navigation from './components/Navigation';
import WorldView from './views/WorldView';
import RomanceView from './views/RomanceView';
import MainCharacterView from './views/MainCharacterView';
import SupportingCharactersView from './views/SupportingCharactersView';
import GalleryView from './views/GalleryView';
import { Tab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('world');

  return (
    <div className="w-full max-w-[768px] mx-auto min-h-screen bg-[#080B12] text-[#C0C0C0] relative shadow-2xl flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#080B12]/95 backdrop-blur-md p-6 border-b border-white/10 flex justify-between items-end">
        <div>
          <h2 className="font-serif italic text-[10px] sm:text-sm tracking-[0.2em] opacity-60 uppercase">Argentmane Dynamics</h2>
          <h1 className="font-serif text-3xl text-gold mt-1">
            {activeTab === 'world' ? 'World & Lore' : 
             activeTab === 'romance' ? 'Romance' :
             activeTab === 'main' ? 'Louis-Marcellien' : 
             activeTab === 'supporting' ? 'Others' : 'Gallery Archive'}
          </h1>
        </div>
        <div className="text-right pb-1 hidden sm:block">
          <span className="font-sans text-[10px] tracking-widest uppercase opacity-40 italic">Est. 1892 / London</span>
        </div>
      </header>
      
      {/* Content */}
      <main className="flex-1 p-5 sm:p-6 pb-24 overflow-x-hidden animate-in fade-in duration-500">
        {activeTab === 'world' && <WorldView />}
        {activeTab === 'romance' && <RomanceView />}
        {activeTab === 'main' && <MainCharacterView />}
        {activeTab === 'supporting' && <SupportingCharactersView />}
        {activeTab === 'gallery' && <GalleryView />}
      </main>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

