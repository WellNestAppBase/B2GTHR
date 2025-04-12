import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

interface HeaderProps {
  showAuthButtons?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showAuthButtons = true }) => {
  const location = useLocation();

  // Determine which path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full py-6 px-4 absolute top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            B2GTHR
          </h2>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors ${isActive("/") ? "text-white" : "text-gray-400 hover:text-pink-400"}`}
          >
            Home
          </Link>
          <Link
            to="/investment"
            className={`font-medium transition-colors ${isActive("/investment") ? "text-white" : "text-gray-400 hover:text-purple-400"}`}
          >
            Investment
          </Link>
          <Link
            to="/funding-schedule"
            className={`font-medium transition-colors ${isActive("/funding-schedule") ? "text-white" : "text-gray-400 hover:text-blue-400"}`}
          >
            Funding
          </Link>
          <Link
            to="/roadmap"
            className={`font-medium transition-colors ${isActive("/roadmap") ? "text-white" : "text-gray-400 hover:text-green-400"}`}
          >
            Roadmap
          </Link>
          <Link
            to="/schedule-meeting"
            className={`font-medium transition-colors ${isActive("/schedule-meeting") ? "text-white" : "text-gray-400 hover:text-cyan-400"}`}
          >
            Schedule Meeting
          </Link>
        </nav>

        {/* Auth Buttons */}
        {showAuthButtons && (
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
                size="sm"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white"
                size="sm"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
