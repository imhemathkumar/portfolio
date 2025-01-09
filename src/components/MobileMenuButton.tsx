import { Button } from "@/src/app/components/ui/button";
import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

export function MobileMenuButton({ onClick }: Readonly<MobileMenuButtonProps>) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="md:hidden">
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle menu</span>
      
    </Button>
  )
}

