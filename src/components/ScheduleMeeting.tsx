import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Header from "./Header";

const ScheduleMeeting: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentInterest: "Seed Round",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
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
                INVESTOR RELATIONS
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="text-white">SCHEDULE A </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                MEETING
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-300">
              Connect with our team to discuss investment opportunities and how
              you can be part of the B2GTHR journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/investment">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-950/30 font-bold px-8 py-6 text-lg rounded-md"
                >
                  INVESTMENT DETAILS
                </Button>
              </Link>
              <Link to="/funding-schedule">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-400 hover:bg-pink-950/30 font-bold px-8 py-6 text-lg rounded-md"
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

      {/* Meeting Form Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="bg-gray-900/50 p-10 rounded-lg border border-gray-800 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Thank You for Your Interest!
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We've received your meeting request and will be in touch
                  shortly to confirm the details.
                </p>
                <div className="flex justify-center gap-4">
                  <Link to="/investment">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-6 text-lg rounded-md"
                    >
                      EXPLORE INVESTMENTS
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-purple-500 text-purple-400 hover:bg-purple-950/30 font-bold px-8 py-6 text-lg rounded-md"
                    >
                      RETURN HOME
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-gray-900/50 p-10 rounded-lg border border-gray-800">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Request a Meeting
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="preferredTime"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="investmentInterest"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Investment Interest *
                      </label>
                      <select
                        id="investmentInterest"
                        name="investmentInterest"
                        required
                        value={formData.investmentInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      >
                        <option value="Seed Round">Seed Round</option>
                        <option value="Series A">Series A</option>
                        <option value="Strategic Partnership">
                          Strategic Partnership
                        </option>
                        <option value="Local Sponsorship">
                          Local Sponsorship
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Message/Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-12 py-6 text-lg rounded-md"
                    >
                      SUBMIT REQUEST
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mb-2"></div>
              <span className="text-blue-500 font-semibold tracking-wider">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">CONTACT </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                INFORMATION
              </span>
            </h2>
            <p className="text-xl max-w-3xl text-gray-400">
              Reach out to our team directly with any questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
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
              <h3 className="text-2xl font-bold mb-3">Email</h3>
              <a
                href="mailto:WellNestAppDev@gmail.com"
                className="text-blue-400 hover:underline text-lg"
              >
                WellNestAppDev@gmail.com
              </a>
              <p className="text-gray-400 mt-2">For general inquiries</p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-pink-500/30 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
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
              <h3 className="text-2xl font-bold mb-3">Phone</h3>
              <a
                href="tel:+16514408356"
                className="text-pink-400 hover:underline text-lg"
              >
                +1 (651) 440-8356
              </a>
              <p className="text-gray-400 mt-2">Mon-Fri, 9am-5pm CST</p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Social Media</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 mt-2">Follow us for updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Call to Action */}
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

export default ScheduleMeeting;
