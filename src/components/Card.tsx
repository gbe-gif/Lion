import { ReactNode } from 'react';

export function Card({ title, subtitle, children, icon }: { title: string, subtitle?: string, children: ReactNode, icon?: ReactNode }) {
  return (
    <section className="bg-[rgba(15,20,30,0.8)] border border-[rgba(212,175,55,0.15)] rounded-sm p-5 mb-6">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-gold">{icon}</div>}
        <div>
          {subtitle && <p className="text-[10px] text-gold uppercase tracking-widest leading-none mb-1">{subtitle}</p>}
          <h2 className="text-lg font-serif italic text-gold">{title}</h2>
        </div>
      </div>
      <div className="text-xs leading-relaxed opacity-80 space-y-3 text-[#C0C0C0]">
        {children}
      </div>
    </section>
  );
}
