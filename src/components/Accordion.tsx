'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      if (!allowMultiple) {
        newOpen.clear();
      }
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-colors"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-900 transition-colors"
          >
            <span className="text-left font-semibold text-slate-100">{item.title}</span>
            <ChevronDown
              size={20}
              className={`text-slate-400 transition-transform ${
                openItems.has(item.id) ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openItems.has(item.id) && (
            <div className="px-4 py-3 bg-slate-800/50 border-t border-slate-700 text-slate-400 animate-fadeIn">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
