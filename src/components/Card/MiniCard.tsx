import { useClamp } from "../../hooks/UseClamp";

export interface MiniCardProps {
  text: string;
  brightness?: number;
  darkness?: number;
}


export function MiniCard({ text, brightness = 10, darkness = 10 }: MiniCardProps) {
    const safeBrightness = useClamp(brightness, 0, 100, "brightness");
    const bgBrigtness = safeBrightness / 100;

    const bgDarkness = darkness / 100;
    return (
        <div
            style={{ backgroundColor: `rgba(255,255,255,${bgBrigtness})` }}
            className="inline-flex max-w-80 h-50 flex-col gap-4 p-8 
            rounded-4xl ring-1 ring-inset ring-white/20 backdrop-blur-xl shadow-xl overflow-hidden"
        >
            <p className="text-2xl font-medium text-white text-pretty line-clamp-3">{text}</p>
            <div className="absolute inset-0 -z-2 bg-black/15"
            style={{ backgroundColor: `rgba(0,0,0,${bgDarkness})`}}></div>
        </div>
    );
}