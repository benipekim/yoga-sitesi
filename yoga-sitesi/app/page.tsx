'use client';


import { BreathingTree } from '@/components/blocks/breathing-tree';
import { useState } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { FlowButton } from '@/components/ui/flow-button';

export default function Home() {
  const [activeModal, setActiveModal] = useState<'anuloma' | 'prana' | null>(null);
  return (
    <>
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/images/hero-willow.jpg"
      bgImageSrc="/images/hero-willow.jpg"
      title="Nefesini Düzenle"
      date="Yoga Yolculuğu"
      scrollToExpand="Kaydırarak Keşfet"
      textBlend
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Pranayama</h2>
        <p className="text-lg mb-4">
          Alıp verdiğimiz nefesin düzeni zihnimizin düzenini etkiler.
        </p>
        <p className="text-lg mb-4">
          Nefesini düzenli tut ki hem beden hem zihin rahatı bulsun.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <FlowButton text="Anuloma Viloma" onClick={() => setActiveModal('anuloma')} />
          <FlowButton text="Prana Mudra" onClick={() => setActiveModal('prana')} />
        </div>
      </div>
    </ScrollExpandMedia>
    {activeModal && (
  <div className="fixed inset-0 z-50 bg-[#101408]/95 flex items-center justify-center">
    <button
      onClick={() => setActiveModal(null)}
      className="absolute top-6 right-6 text-white text-2xl"
    >
      ✕
    </button>
    <div className="text-white text-2xl">
  {activeModal === 'anuloma' ? (
    <BreathingTree />
  ) : (
    <p className="text-white text-2xl">Prana Mudra buraya gelecek</p>
  )}
</div>
      </div>
    )}
    </>
  );
}