import { ReactNode } from "react";

interface Card {
  children: ReactNode;
  className?: string;
  bgColor?: string; 
}

export const Card = ({
  children,
  bgColor = "bg-zinc-800",
}: Card) => (
  <div
    className={`${bgColor} overflow-hidden pb-10 rounded-3xl relative px-8 border border-white/20 md:pt-12 md:px-10 lg:px-20`}
  >
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      {children}
    </div>
  </div>
);
