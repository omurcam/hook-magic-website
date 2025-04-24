
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HookButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const HookButton = ({ title, onClick, className }: HookButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "text-lg font-medium px-8 py-6 transition-all duration-300 transform hover:scale-105",
        className
      )}
    >
      {title}
    </Button>
  );
};

export default HookButton;
