import { Globe, Heart, Asterisk, Users } from 'lucide-react';
import { Tab } from '../types';

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'world', label: '세계관', icon: Globe },
    { id: 'romance', label: '로맨스', icon: Heart },
    { id: 'main', label: '캐릭터', icon: Asterisk },
    { id: 'supporting', label: '주변인물', icon: Users },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[768px] bg-[#05070A] border-t border-white/10 grid grid-cols-4 px-2 pb-8 pt-0 z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 pt-4 border-t-2 ${
              isActive ? 'text-gold border-gold opacity-100' : 'text-[#C0C0C0] border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <Icon size={20} strokeWidth={1.5} className="mb-1 opacity-80" />
            <span className="text-[9px] uppercase tracking-widest">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
