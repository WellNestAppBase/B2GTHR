import React from "react";
import { Mail, Phone } from "lucide-react";

interface IconProps {
  size?: number;
  className?: string;
}

export const EmailIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => {
  return <Mail size={size} className={className} />;
};

export const PhoneIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
}) => {
  return <Phone size={size} className={className} />;
};
