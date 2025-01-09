import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/src/app/components/ui/sheet";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavigationSheetProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigationSheet({ navItems, isOpen, onClose }: Readonly<MobileNavigationSheetProps>) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}
    >
      <SheetContent >
        <SheetHeader >
          <SheetTitle >Menu</SheetTitle>
          
        </SheetHeader>
        <div  className="flex flex-col gap-4 mt-4">
        {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-sm hover:text-primary dark:hover:text-primary transition-all hover:translate-x-2"
              onClick={onClose}  // Add this line to close the sheet when clicking on a link. This should be done in the parent component (DesktopNavigation or MobileNavigation) that opens the sheet.  // For example, when the link is clicked, you can call this.props.onClose() in the parent component.  // This is necessary because the Sheet component is controlled by the parent component.  // If the Sheet component were uncontrolled, you would not need to close it manually.
            >
              {item.name}
            </Link>
          ))}
          </div>

      </SheetContent>
    </Sheet>
  )
}

