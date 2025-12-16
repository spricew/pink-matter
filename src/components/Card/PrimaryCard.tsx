import { useClamp } from "../../hooks/UseClamp";

import type { ComponentType } from "react";

export interface PrimaryCardProps {
  title: string;
  text: string;
  Icon: ComponentType<{ className?: string }>;
  brightness?: number;
  darkness?: number;
}


export function PrimaryCard({ title, text, brightness = 10, darkness = 10, Icon }: PrimaryCardProps) {
    const safeBrightness = useClamp(brightness, 0, 100);
    const bgBrigtness = safeBrightness / 100;

    const safeDarkness = useClamp(darkness, 0, 100);
    const bgDarkness = safeDarkness / 100;

    return (
        <div
            style={{ backgroundColor: `rgba(255,255,255,${bgBrigtness})` }}
            className="inline-flex shrink-0 w-90 min-h-100 max-h-120 h-fit flex-col gap-4 p-8
            rounded-4xl ring-1 ring-inset ring-white/20 backdrop-blur-xl shadow-xl overflow-hidden"
        >

            <Icon className="size-14 text-white shrink-0" />

            <span className="text-2xl font-semibold text-white text-pretty line-clamp-1 shrink-0">{title}</span>
            <p className="text-lg text-white text-pretty line-clamp-10">{text}</p>

            {/* black layer */}
            <div className="absolute inset-0 -z-2 bg-black/15"
            style={{ backgroundColor: `rgba(0,0,0,${bgDarkness})`}}></div>
        </div>
    );
}