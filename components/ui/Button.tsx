import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "admin" | "danger";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#2563eb] text-white hover:bg-[#1d4ed8]",
  secondary: "border border-[#2563eb] text-[#2563eb] hover:bg-[#eff6ff]",
  admin: "bg-[#4f46e5] text-white hover:bg-[#4338ca]",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export default function Button({
  variant,
  children,
  onClick,
  href,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "rounded px-6 py-3 font-medium transition-colors";
  const variantStyle = variantStyles[variant];
  const combinedClassName = `${baseStyles} ${variantStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClassName} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
