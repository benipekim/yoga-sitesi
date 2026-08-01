'use client';

import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

export default function Home() {
  return (
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
      </div>
    </ScrollExpandMedia>
  );
}