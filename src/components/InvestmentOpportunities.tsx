import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Header from "./Header";

const InvestmentOpportunities: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Investment tiers
  const investmentTiers = [
    {
      title: "Seed Round",
      description: "Early stage investment opportunity",
      minInvestment: "$50,000",
      benefits: [
        "Equity stake in B2GTHR",
        "Quarterly investor updates",
        "Early access to new features",
        "Invitation to annual investor meeting",
      ],
      status: "Open",
    },
    {
      title: "Series A",
      description: "Growth stage investment opportunity",
      minInvestment: "$250,000",
      benefits: [
        "Preferred equity stake",
        "Monthly investor updates",
        "Board observer rights",
        "Direct access to executive team",
        "Invitation to quarterly strategy sessions",
      ],
      status: "Coming Soon",
    },
    {
      title: "Strategic Partnership",
      description: "For established companies and institutions",
      minInvestment: "Custom",
      benefits: [
        "Co-development opportunities",
        "Integration with existing platforms",
        "White-label options",
        "Joint marketing initiatives",
        "Research collaboration",
      ],
      status: "By Invitation",
    },
  ];

  // Market stats
  const marketStats = [
    {
      stat: "$4.5B",
      label: "Mental Health App Market Size (2023)",
    },
    {
      stat: "18.2%",
      label: "Annual Growth Rate",
    },
    {
      stat: "240M+",
      label: "Potential Users Worldwide",
    },
    {
      stat: "$12.9B",
      label: "Projected Market Size by 2028",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
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
                INVESTMENT OPPORTUNITY
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="text-white">INVEST IN </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                B2GTHR
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-300">
              Join us in revolutionizing how people connect and support each
              other's well-being. B2GTHR is positioned at the intersection of
              mental health, social connection, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg rounded-md"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTACT US
              </Button>
              <Link to="/funding-schedule">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg rounded-md"
                >
                  FUNDING SCHEDULE
                </Button>
              </Link>
              <Link to="/roadmap">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-950/30 font-bold px-8 py-6 text-lg rounded-md"
                >
                  VIEW ROADMAP
                </Button>
              </Link>
              <Link to="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-400 hover:bg-pink-950/30 font-bold px-8 py-6 text-lg rounded-md"
                >
                  HOME
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Market Opportunity
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.stat}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-800/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Invest Now</h3>
            <p className="text-gray-300 mb-6">
              The mental health app market is experiencing unprecedented growth,
              driven by increasing awareness of mental health issues, the global
              pandemic's impact on well-being, and the growing acceptance of
              digital solutions for health management.
            </p>
            <p className="text-gray-300 mb-6">
              B2GTHR stands out in this crowded market by focusing specifically
              on connection and well-being tracking rather than therapy or
              meditation. Our unique approach addresses the fundamental human
              need for meaningful connection in an increasingly digital world.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Competitive Advantages
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>
                      Unique focus on connection rather than just mental health
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>Intuitive, visual mood-tracking system</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>Privacy-first approach to sensitive data</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>Cross-platform availability (web, mobile, widget)</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Growth Strategy</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>Freemium model with premium subscription features</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>B2B partnerships with employee wellness programs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>Integration with existing health platforms</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-cyan-400">•</div>
                    <p>International expansion in Phase 2 (2025)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Investment Opportunities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {investmentTiers.map((tier, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 text-white"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm text-gray-400">
                      Minimum Investment
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {tier.minInvestment}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Benefits</div>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-3 mt-1 text-cyan-400">•</div>
                          <p>{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div
                    className={`text-sm font-medium ${tier.status === "Open" ? "text-green-400" : tier.status === "Coming Soon" ? "text-yellow-400" : "text-gray-400"}`}
                  >
                    {tier.status}
                  </div>
                  <Button
                    variant={tier.status === "Open" ? "default" : "outline"}
                    className={
                      tier.status === "Open"
                        ? "bg-cyan-600 hover:bg-cyan-500"
                        : "border-gray-600"
                    }
                    disabled={tier.status !== "Open"}
                  >
                    {tier.status === "Open" ? "Inquire Now" : "Notify Me"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Roadmap & Milestones
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-900"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-600"></div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-cyan-400 font-bold mb-2">Q3 2023</div>
                  <h3 className="text-xl font-semibold mb-2">Beta Launch</h3>
                  <p className="text-gray-300">
                    Initial release with core functionality. 5,000 beta users
                    onboarded.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-600"></div>
                <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:w-1/2 p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-cyan-400 font-bold mb-2">Q1 2024</div>
                  <h3 className="text-xl font-semibold mb-2">Public Launch</h3>
                  <p className="text-gray-300">
                    Full feature set release. Marketing campaign launch. Target:
                    50,000 active users.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-600"></div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-cyan-400 font-bold mb-2">Q3 2024</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Tier Launch
                  </h3>
                  <p className="text-gray-300">
                    Introduction of subscription model. Advanced analytics and
                    features. Target: 10% conversion to paid.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-600"></div>
                <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:w-1/2 p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-cyan-400 font-bold mb-2">Q1 2025</div>
                  <h3 className="text-xl font-semibold mb-2">
                    B2B Partnerships
                  </h3>
                  <p className="text-gray-300">
                    Launch of enterprise solutions for corporate wellness
                    programs. Target: 5 major partnerships.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-600"></div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 p-6 bg-gray-800/50 rounded-lg">
                  <div className="text-cyan-400 font-bold mb-2">Q3 2025</div>
                  <h3 className="text-xl font-semibold mb-2">
                    International Expansion
                  </h3>
                  <p className="text-gray-300">
                    Localization for key markets. Global marketing campaign.
                    Target: 500,000 active users worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Advisors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Team & Advisors
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Leadership Team</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                      alt="Alex Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Alex Johnson</h4>
                    <p className="text-cyan-400 mb-1">CEO & Founder</p>
                    <p className="text-sm text-gray-300">
                      Former VP of Product at MindfulTech. 15+ years in tech and
                      mental health advocacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=morgan"
                      alt="Morgan Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Morgan Chen</h4>
                    <p className="text-cyan-400 mb-1">CFO</p>
                    <p className="text-sm text-gray-300">
                      Former Investment Director at TechVentures. MBA from
                      Stanford. 12+ years in financial leadership.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=taylor"
                      alt="Taylor Rivera"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Taylor Rivera</h4>
                    <p className="text-cyan-400 mb-1">CIO</p>
                    <p className="text-sm text-gray-300">
                      Former CTO at WellnessConnect. PhD in Human-Computer
                      Interaction. 10+ years in product development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Advisory Board</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=dr-patel"
                      alt="Dr. Amara Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Dr. Amara Patel</h4>
                    <p className="text-cyan-400 mb-1">Mental Health Expert</p>
                    <p className="text-sm text-gray-300">
                      Clinical Psychologist. Author of "Digital Connections and
                      Mental Wellness". Faculty at UCLA.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=james-wilson"
                      alt="James Wilson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">James Wilson</h4>
                    <p className="text-cyan-400 mb-1">Tech Investor</p>
                    <p className="text-sm text-gray-300">
                      Partner at Horizon Ventures. Early investor in multiple
                      health tech unicorns. 20+ years in venture capital.
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=sophia-lee"
                      alt="Sophia Lee"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Sophia Lee</h4>
                    <p className="text-cyan-400 mb-1">UX Strategy</p>
                    <p className="text-sm text-gray-300">
                      Former Design Director at Apple. Specializes in emotional
                      design and user experience for health applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-black to-black"
      >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
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
                className="border-2 border-green-500 text-green-400 hover:bg-green-950/30 font-bold px-8 py-6 text-lg rounded-md"
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

export default InvestmentOpportunities;
