import { useClamp } from "../../hooks/UseClamp";

import type { ComponentType } from "react";

export interface MiniCardProps {
  text: string;
  Icon: ComponentType<{ className?: string }>;
  brightness?: number;
  darkness?: number;
}


export function MiniCard({ text, brightness = 10, darkness = 10, Icon }: MiniCardProps) {
    const safeBrightness = useClamp(brightness, 0, 100);
    const bgBrigtness = safeBrightness / 100;

    const safeDarkness = useClamp(darkness, 0, 100);
    const bgDarkness = safeDarkness / 100;

    return (
        <div
            style={{ backgroundColor: `rgba(255,255,255,${bgBrigtness})` }}
            className="inline-flex shrink-0 min-w-70 max-w-84 w-fit max-h-52 min-h-44 h-fit flex-col gap-4 p-8
            rounded-4xl ring-1 ring-inset ring-white/20 backdrop-blur-xl shadow-xl overflow-hidden"
        >

            <Icon className="size-12 text-white" />

            <p className="text-xl font-medium text-white text-pretty line-clamp-3">{text}</p>

            {/* black layer */}
            <div className="absolute inset-0 -z-2 bg-black/15"
            style={{ backgroundColor: `rgba(0,0,0,${bgDarkness})`}}></div>
        </div>
    );
}