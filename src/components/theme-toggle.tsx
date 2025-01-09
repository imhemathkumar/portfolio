import { useToast } from "@/src/hooks/use-toast";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { toast } = useToast();
  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme ?? systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    console.log("Theme initialized:", initialTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    console.log("Theme toggled to:", newTheme);
    
    toast({
      description: `Switched to ${newTheme} mode`,
      duration: 1500,
    });
  };
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 dark:bg-black/10 dark:border-white/10 dark:hover:bg-black/20"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500 dark:text-yellow-500" />
      )}
    </button>
  );
};