import { BookOpen, Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { useState } from "react";
interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
  <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="container mx-auto px-4">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="text-blue-600" size={32} />
          <span className="text-2xl font-bold text-gray-800">Bookshop</span>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-gray-600" size={24} />
          <ShoppingCart className="text-gray-600" size={24} />
          <User className="text-gray-600" size={24} />
          <Heart className="text-gray-600" size={24} />
          <Menu className="text-gray-600" size={24} />
        </div>
      </nav>
    </div>
  </header>
    
  );
}