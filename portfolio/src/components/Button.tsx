import { ReactNode } from "react";

interface ButtonProps {
  children?: string;
  color?: "white" | "blue" | "transparent" | "background";
  borderColor?: "white" | "blue";
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
    color === "blue"
      ? "bg-cyan-500 text-black hover:bg-cyan-300"
      : color === "transparent"
      ? "bg-transparent text-white"
      : color === "background"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : "bg-white text-black hover:bg-white/90";

  const border = borderColor
    ? `border-2 ${borderColor === "blue" ? "border-cyan-500" : "border-white hover:border-cyan-400"}`
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
