import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import GameBoard from "./roadmap/GameBoard";
import StageDetails from "./roadmap/StageDetails";
import { roadmapStages } from "./roadmap/RoadmapData";
import Header from "./Header";
import { EmailIcon, PhoneIcon } from "./ui/icons";

const Roadmap: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fixed progress calculation not based on scroll
  const totalStages = roadmapStages.length;
  const progressPerStage = 100 / totalStages;

  // Use a fixed value instead of scroll-based transform
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [manualProgress, setManualProgress] = useState(0);
  const gamePosition = { get: () => manualProgress };

  // Update progress when stage changes
  useEffect(() => {
    setManualProgress(currentStageIndex);
  }, [currentStageIndex]);

  // Calculate the position for the game piece based on the current progress
  const calculateGamePiecePosition = (progress: number) => {
    const currentIndex = Math.min(
      Math.floor(progress),
      roadmapStages.length - 1,
    );
    const nextIndex = Math.min(currentIndex + 1, roadmapStages.length - 1);
    const fraction = progress - currentIndex;

    // If we're at the last stage, just return its position
    if (currentIndex === roadmapStages.length - 1) {
      return {
        x: roadmapStages[currentIndex].position.x + 20,
        y: roadmapStages[currentIndex].position.y + 20,
      };
    }

    // Get current and next stage positions
    const currentPos = roadmapStages[currentIndex].position;
    const nextPos = roadmapStages[nextIndex].position;

    // If there's no path, just interpolate directly between points
    if (!roadmapStages[currentIndex].path) {
      return {
        x: currentPos.x + 20 + (nextPos.x - currentPos.x) * fraction,
        y: currentPos.y + 20 + (nextPos.y - currentPos.y) * fraction,
      };
    }

    // Handle movement along the path
    const { direction, length } = roadmapStages[currentIndex].path!;

    if (direction === "right") {
      return {
        x: currentPos.x + 20 + length * fraction,
        y: currentPos.y + 20,
      };
    } else if (direction === "down") {
      return {
        x: currentPos.x + 20,
        y: currentPos.y + 20 + length * fraction,
      };
    } else if (direction === "left") {
      return {
        x: currentPos.x + 20 - length * fraction,
        y: currentPos.y + 20,
      };
    } else if (direction === "up") {
      return {
        x: currentPos.x + 20,
        y: currentPos.y + 20 - length * fraction,
      };
    }

    // Fallback
    return {
      x: currentPos.x + 20,
      y: currentPos.y + 20,
    };
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white" ref={containerRef}>
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 blur-[150px] max-w-5xl h-[750px] mx-auto z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(59, 130, 246, 0.1) 100%)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 mb-2"></div>
              <span className="text-pink-500 font-semibold tracking-wider">
                DEVELOPMENT TIMELINE
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="text-white">B2GTHR </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                ROADMAP
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-300">
              Follow our journey as we build a platform that helps people stay
              connected with those who matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/schedule-meeting">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg rounded-md"
                >
                  SCHEDULE A MEETING
                </Button>
              </Link>
              <Link to="/funding-schedule">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-950/30 font-bold px-8 py-6 text-lg rounded-md"
                >
                  FUNDING SCHEDULE
                </Button>
              </Link>
              <Link to="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-950/30 font-bold px-8 py-6 text-lg rounded-md"
                >
                  HOME
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Roadmap Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/20 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Game Board */}
            <div className="w-full md:w-2/3 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 shadow-xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Our Journey
              </h2>
              <div className="relative">
                <GameBoard
                  stages={roadmapStages}
                  currentStageIndex={currentStageIndex}
                  setCurrentStageIndex={setCurrentStageIndex}
                  gamePiecePosition={calculateGamePiecePosition(manualProgress)}
                />
              </div>
            </div>

            {/* Stage Details */}
            <div className="w-full md:w-1/3 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 shadow-xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Stage Details
              </h2>
              <div className="mb-4">
                <Progress
                  value={(currentStageIndex + 1) * progressPerStage}
                  className="h-2 bg-gray-800"
                />
                <p className="text-sm text-gray-400 mt-2 text-right">
                  Stage {currentStageIndex + 1} of {totalStages}
                </p>
              </div>
              <StageDetails
                roadmapStages={roadmapStages}
                currentStageIndex={currentStageIndex}
                gamePosition={gamePosition}
                onStageChange={setCurrentStageIndex}
              />
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
                  onClick={() =>
                    setCurrentStageIndex((prev) => Math.max(0, prev - 1))
                  }
                  disabled={currentStageIndex === 0}
                >
                  Previous
                </Button>
                <Button
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white"
                  onClick={() =>
                    setCurrentStageIndex((prev) =>
                      Math.min(roadmapStages.length - 1, prev + 1),
                    )
                  }
                  disabled={currentStageIndex === roadmapStages.length - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-2"></div>
            <span className="text-blue-500 font-semibold tracking-wider">
              JOIN OUR JOURNEY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              BECOME AN INVESTOR
            </span>
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Interested in learning more about investment opportunities with
            B2GTHR? Our team is ready to provide you with detailed information
            and answer any questions you may have.
          </p>

          <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-lg border border-gray-800 mb-10">
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="mr-3 text-pink-400">
                  <EmailIcon size={24} />
                </div>
                <a
                  href="mailto:WellNestAppDev@gmail.com"
                  className="text-pink-400 hover:underline"
                >
                  WellNestAppDev@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <div className="mr-3 text-purple-400">
                  <PhoneIcon size={24} />
                </div>
                <a
                  href="tel:+16514408356"
                  className="text-purple-400 hover:underline"
                >
                  +1 (651) 440-8356
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule-meeting">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg rounded-md"
              >
                SCHEDULE A MEETING
              </Button>
            </Link>
            <Link to="/funding-schedule">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-950/30 font-bold px-8 py-6 text-lg rounded-md"
              >
                VIEW FUNDING SCHEDULE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
                B2GTHR
              </h2>
              <p className="text-gray-500 font-medium">Better Together</p>
            </div>
            <div className="flex flex-wrap gap-10">
              <Link
                to="/"
                className="text-gray-400 hover:text-pink-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/funding-schedule"
                className="text-gray-400 hover:text-purple-400 transition-colors font-medium"
              >
                Funding Schedule
              </Link>
              <Link
                to="/roadmap"
                className="text-gray-400 hover:text-blue-400 transition-colors font-medium"
              >
                Roadmap
              </Link>
              <Link
                to="/login"
                className="text-gray-400 hover:text-green-400 transition-colors font-medium"
              >
                Sign In
              </Link>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors font-medium"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <Separator className="my-10 bg-gray-900" />
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} B2GTHR. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Roadmap;
