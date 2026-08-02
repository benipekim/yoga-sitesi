'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function BreathingTree() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'inhale' | 'exhale'>('inhale');
  const [showInstructions, setShowInstructions] = useState(false);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const inhaleDuration = 4000; // 4 saniye
    const exhaleDuration = 8000; // 8 saniye

    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const duration = phase === 'inhale' ? inhaleDuration : exhaleDuration;
      const t = Math.min(elapsed / duration, 1);

      setProgress(phase === 'inhale' ? t : 1 - t);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setPhase((prev) => (prev === 'inhale' ? 'exhale' : 'inhale'));
        startTimeRef.current = now;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-sm px-4">
      <p className="text-white/70 text-sm text-center">
        Sağ elinin başparmağı ve yüzük parmağıyla burun deliklerini sırayla kapatarak nefes al ver.
      </p>

      <button
        onClick={() => setShowInstructions(!showInstructions)}
        className="text-white/50 text-xs underline"
      >
        {showInstructions ? 'Gizle' : 'Nasıl yapılır?'}
      </button>

      {showInstructions && (
        <p className="text-white/70 text-sm text-center">
          Sağ elinizin işaret ve orta parmağını içeri kıvırın. Ardından sağ elinizin yüzük parmağıyla sol burun deliğinizi kapatarak, sağ burun deliğinizden dört saniyede nefes alın. Nefesinizi aldıktan sonra sağ elinizin baş parmağıyla sağ burun deliğinizi tıkayarak, sol burun deliğinizden sekiz saniyede nefesinizi verin. Şimdi sol burun deliğinizden 4 saniyede nefes alın, ve yüzük parmağınızla sol burun deliğinizi tıkayarak sağ burun deliğinizden sekiz saniyede nefes verin. Sırayla burun deliklerinizi değiştirerek pratik etmeye devam edebilirsiniz.
        </p>
      )}

      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <Image
          src="/images/tree-icon-transparent.png"
          alt="Tree - empty"
          fill
          className="object-contain opacity-20"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(${(1 - progress) * 100}% 0 0 0)` }}
        >
          <Image
            src="/images/tree-icon-transparent.png"
            alt="Tree - filled"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <p className="text-white text-2xl font-medium tracking-wide">
        {phase === 'inhale' ? '4 saniyede al' : '8 saniyede ver'}
      </p>
      
    </div>
  );
}