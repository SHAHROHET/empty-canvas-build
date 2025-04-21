
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been logged out successfully",
    });
    
    // Navigate to login page
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/home" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blood flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M14 2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1h4z"></path>
                <path d="M12 8v7"></path>
                <path d="M8.5 11.5L15.5 11.5"></path>
              </svg>
            </div>
            <span className="font-semibold text-lg">LifeLink</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </Button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/home" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/request-blood" className="text-sm font-medium transition-colors hover:text-primary">
            Request Blood
          </Link>
          <Link to="/my-requests" className="text-sm font-medium transition-colors hover:text-primary">
            My Requests
          </Link>
          <Link to="/donor-map" className="text-sm font-medium transition-colors hover:text-primary">
            Donor Map
          </Link>
        </div>

        {/* User menu (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M14 2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1h4z"></path>
            </svg>
            Donate Now
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative size-8 rounded-full">
                <Avatar className="size-8">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-secondary">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/profile" className="w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/my-donations" className="w-full">My Donations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="w-full">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 space-y-3 border-t">
          <Link to="/home" className="block py-2 text-sm font-medium">
            Home
          </Link>
          <Link to="/request-blood" className="block py-2 text-sm font-medium">
            Request Blood
          </Link>
          <Link to="/my-requests" className="block py-2 text-sm font-medium">
            My Requests
          </Link>
          <Link to="/donor-map" className="block py-2 text-sm font-medium">
            Donor Map
          </Link>
          <Link to="/profile" className="block py-2 text-sm font-medium">
            My Profile
          </Link>
          <div className="pt-2">
            <Button onClick={handleLogout} variant="ghost" className="w-full justify-start">
              Log out
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
