
import { useState } from "react";
import { X, BookOpen, Quote, Filter, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RandomQuoteButton from "@/components/RandomQuoteButton";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

type QuotesSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const QuotesSidebar = ({ isOpen, onClose }: QuotesSidebarProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    "Love",
    "Life",
    "Wisdom",
    "Motivation",
    "Happiness",
    "Success"
  ];

  return (
    <motion.div 
      className={`fixed inset-y-0 right-0 z-40 w-80 bg-rekhta-cream border-l border-rekhta-gold/20 shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <Sidebar side="right" variant="floating">
        <SidebarHeader className="flex justify-between items-center p-4 border-b border-rekhta-gold/20">
          <h2 className="font-serif text-xl text-rekhta-brown">Quotes Explorer</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-rekhta-brown">
            <X size={20} />
          </Button>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {categories.map((category) => (
                  <SidebarMenuItem key={category}>
                    <SidebarMenuButton 
                      isActive={activeCategory === category}
                      onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                    >
                      <Filter size={16} />
                      <span>{category}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <Separator className="my-4" />
          
          <SidebarGroup>
            <SidebarGroupLabel>Random Quote</SidebarGroupLabel>
            <SidebarGroupContent className="p-2">
              <RandomQuoteButton />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter className="p-4 border-t border-rekhta-gold/20 text-center text-sm text-rekhta-brown/70">
          Explore the wisdom of centuries in our quotes collection
        </SidebarFooter>
      </Sidebar>
    </motion.div>
  );
};

export default QuotesSidebar;
