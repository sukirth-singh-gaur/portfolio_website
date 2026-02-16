// src/components/DitherBackground.tsx
"use client";
import Dither from "@/components/Dither"; // Adjust path based on where pnpm installed it

export default function DitherBackground() {
  return (
<div className="fixed inset-0 -z-10 w-full h-full">
  <Dither
    waveColor={[0.5803921568627451,0.5803921568627451,0.5803921568627451]}
    disableAnimation={false}
    enableMouseInteraction
    mouseRadius={0.3}
    colorNum={7}
    pixelSize={3}
    waveAmplitude={0.25}
    waveFrequency={3.5}
    waveSpeed={0.03}
  />

</div>
  );
}