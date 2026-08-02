'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// --- Tipler ---
type Phase = 'inhale' | 'exhale';

interface Step {
  stage: number;
  phase: Phase;
  duration: number; // ms
}

// --- Zamanlama ayarları ---
const FAST = 900;   // Stage 1↔4 arası hızlı geçiş
const SLOW = 3200;  // Stage 4↔5 arası yavaş geçiş
const MEDIUM = 2200;  // Stage 5→4 dönüş geçişi (ikinci nefes al)

// --- Döngü tanımı: 1→2→3→4 (hızlı, nefes al) → 5 (yavaş, nefes ver)
//                  → 4 (yavaş, nefes al) → 3→2→1 (hızlı, nefes ver) → tekrar
const sequence: Step[] = [
  { stage: 1, phase: 'inhale', duration: FAST },
  { stage: 2, phase: 'inhale', duration: FAST },
  { stage: 3, phase: 'inhale', duration: FAST },
  { stage: 4, phase: 'inhale', duration: SLOW },
  { stage: 5, phase: 'exhale', duration: SLOW },
  { stage: 4, phase: 'inhale', duration: MEDIUM },
  { stage: 3, phase: 'exhale', duration: FAST },
  { stage: 2, phase: 'exhale', duration: FAST },
  { stage: 1, phase: 'exhale', duration: FAST },
];

// --- Döngü mantığını yöneten hook ---
function usePranaSequence() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = sequence[index];
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % sequence.length);
    }, current.duration);
    return () => clearTimeout(timer);
  }, [index]);

  return sequence[index];
}

// --- Sabit boyutlu görsel alanı (kayma olmasın diye) ---
function StageImage({ stage }: { stage: number }) {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <Image
        src={`/images/prana-stage${stage}.png`}
        alt={`Aşama ${stage}`}
        fill
        className="object-contain transition-opacity duration-300"
        priority
      />
    </div>
  );
}

// --- Ana bileşen ---
export function PranaMudra() {
  const current = usePranaSequence();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <StageImage stage={current.stage} />

      <p className="text-white text-2xl font-medium tracking-wide">
        {current.phase === 'inhale' ? 'Nefes Al' : 'Nefes Ver'}
      </p>
      <p className="text-white/50 text-sm">Aşama {current.stage}</p>
    </div>
  );
}