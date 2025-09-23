import { ReactNode } from "react";

interface ButtonProps {
  children?: string;
  color?: "white" | "transparent";
  borderColor?: "white" 
  icon?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  children,
  color = "white",
  borderColor,
  icon,
  onClick,
}: ButtonProps) => {
  const bgColor =
  color === "transparent"
      ? "bg-zinc-900 text-white"
      : "bg-white text-black hover:bg-cyan-400";

  const border = borderColor
    ? `border-2 ${borderColor === "white" ? "border-white" : ""}`
    : "";
  return (
    <button
      onClick={onClick}
      className={`h-12 px-6 rounded-xl inline-flex items-center justify-center gap-2 font-semibold text-center ${bgColor} ${border} w-full md:w-auto`}
    >
      <span>{children}</span>
      {icon && icon}
    </button>
  );
};
