import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4f6a8f] to-[#2a3a4f] text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">B2GTHR</div>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-cyan-300 transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">
            Contact
          </a>
          <Link
            to="/login"
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stay Connected With Your Loved Ones
          </h1>
          <p className="text-xl text-white/80">
            B2GTHR helps you maintain meaningful connections by sharing your
            well-being with those who matter most.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              to="/signup"
              className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl">
            <div className="bg-[#4f6a8f] rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">Dashboard</div>
                <div className="text-sm text-white/70">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-white/70">Deeply Serene</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#88a2bc] flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Michael Chen</div>
                    <div className="text-xs text-white/70">
                      Calm and Peaceful
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#a24944] flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Emma Rodriguez</div>
                    <div className="text-xs text-white/70">Urgent</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-2">
              <div className="w-8 h-8 rounded-full bg-[#4f6a8f]"></div>
              <div className="w-8 h-8 rounded-full bg-[#88a2bc]"></div>
              <div className="w-8 h-8 rounded-full bg-[#8eb896]"></div>
              <div className="w-8 h-8 rounded-full bg-[#fcc580]"></div>
              <div className="w-8 h-8 rounded-full bg-[#d9895f]"></div>
              <div className="w-8 h-8 rounded-full bg-[#a24944]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-black/20 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-cyan-600/30 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🌈
              </div>
              <h3 className="text-xl font-semibold mb-2">Mood Sharing</h3>
              <p className="text-white/70">
                Share your emotional state with loved ones using our intuitive
                color-based mood system.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-cyan-600/30 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🔄
              </div>
              <h3 className="text-xl font-semibold mb-2">WellStream</h3>
              <p className="text-white/70">
                Get a real-time overview of your connections' well-being with
                our dynamic WellStream view.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-cyan-600/30 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🆘
              </div>
              <h3 className="text-xl font-semibold mb-2">Urgent Support</h3>
              <p className="text-white/70">
                When you need help, our Urgent mode notifies your trusted
                connections and provides crisis resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About B2GTHR</h2>
          <div className="bg-white/10 p-8 rounded-xl border border-white/10">
            <p className="text-lg text-center max-w-3xl mx-auto">
              B2GTHR was created with a simple mission: to help people maintain
              meaningful connections in our increasingly digital world. Our
              platform provides a simple, intuitive way to share your emotional
              state with loved ones, ensuring that no one feels alone during
              difficult times.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-black/20 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="bg-white/10 p-8 rounded-xl border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[150px]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to stay better connected?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join B2GTHR today and transform how you maintain meaningful
          relationships with your loved ones.
        </p>
        <Link
          to="/signup"
          className="bg-cyan-600 hover:bg-cyan-500 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
        >
          Create Your Account
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">B2GTHR</div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-white transition-colors"
              >
                About
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} B2GTHR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
