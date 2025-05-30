import React from "react";

type workcardSize = "small" | "medium" | "large";
type workcardVariant = "default" | "elevated" | "outlined";

type WorkCardProps = {
  children: React.ReactNode;
  size?: workcardSize;
  variant?: workcardVariant;
  className?: string;
  contentClassName?: string;
};

export default function Workcard({
  children,
  size = "medium",
  variant = "elevated",
  className,
  contentClassName,
}: WorkCardProps) {
  const sizeClasses: Record<workcardSize, string> = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  };
  const variantClasses: Record<workcardVariant, string> = {
    default: "bg-white shadow-lg",
    elevated: "bg-white shadow-xl hover:shadow-2xl transition-shadow",
    outlined: "border-2 border-gray-200",
  };
  const baseClasses =
    "inline-flex w-full flex-col overflow-hidden rounded-[0.5rem] border border-[#0E7490]";

  return (
    <div
      className={` ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ""} `}
    >
      <div
        className={`pb-3 pl-5 pr-44 pt-6 xl:pr-52 ${contentClassName || ""}`}
      >
        {children}
      </div>
      <div className="mb-4 h-px w-2/3 bg-[#155E75]" />
    </div>
  );
}
