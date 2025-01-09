import { motion } from "framer-motion";
import Link from "next/link";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 300
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  }
}

interface NavItem {
  name: string;
  href: string;
}

interface DesktopNavigationProps {
  navItems: NavItem[];
}

export function DesktopNavigation({ navItems }: Readonly<DesktopNavigationProps>) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm hover:text-primary dark:hover:text-primary transition-all hover:scale-110"
        >
          {item.name}
        </Link>
      ))}
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
      
      </motion.div>
      
    </div>
  )
}
