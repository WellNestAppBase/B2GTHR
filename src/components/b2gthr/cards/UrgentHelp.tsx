import React, { useState } from "react";
import { MoodOption } from "../MoodSelector";
import { AlertTriangle, Phone, MessageCircle, Heart, X } from "lucide-react";
import SlideCard from "../SlideCard";

interface UrgentHelpProps {
  currentMood: number;
  setCurrentMood: (index: number) => void;
  moodOptions: MoodOption[];
  onContextSubmit: (context: string) => void;
  cardStyle?: React.CSSProperties;
}

interface EmergencyContact {
  id: number;
  name: string;
  avatar: string;
  phone?: string;
  relationship: string;
}

interface HelpResource {
  id: number;
  name: string;
  description: string;
  phone?: string;
  website?: string;
  icon: React.ReactNode;
}

const UrgentHelp: React.FC<UrgentHelpProps> = ({
  currentMood,
  setCurrentMood,
  moodOptions,
  onContextSubmit,
  cardStyle = {},
}) => {
  const [showEmergencyContacts, setShowEmergencyContacts] = useState(true);
  const [showHelpResources, setShowHelpResources] = useState(true);
  const [showIncomingMessages, setShowIncomingMessages] = useState(true);
  const [selectedContact, setSelectedContact] =
    useState<EmergencyContact | null>(null);

  // Emergency contacts
  const emergencyContacts: EmergencyContact[] = [
    {
      id: 1,
      name: "Emma Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      phone: "+1 (555) 123-4567",
      relationship: "Best Friend",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      phone: "+1 (555) 987-6543",
      relationship: "Family",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      phone: "+1 (555) 456-7890",
      relationship: "Therapist",
    },
  ];

  // Help resources
  const helpResources: HelpResource[] = [
    {
      id: 1,
      name: "Crisis Text Line",
      description: "Text HOME to 741741 to connect with a Crisis Counselor",
      phone: "741741",
      website: "https://www.crisistextline.org",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      id: 2,
      name: "National Suicide Prevention Lifeline",
      description: "24/7, free and confidential support",
      phone: "988",
      website: "https://988lifeline.org",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      id: 3,
      name: "SAMHSA's National Helpline",
      description: "Treatment referral and information service",
      phone: "1-800-662-4357",
      website: "https://www.samhsa.gov/find-help/national-helpline",
      icon: <Heart className="h-5 w-5" />,
    },
  ];

  // Incoming messages
  const incomingMessages = [
    {
      id: 1,
      sender: "Emma Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      message: "Hey, I saw you're not feeling well. Can I call you?",
      time: "2 min ago",
    },
    {
      id: 2,
      sender: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      message: "I'm here for you. Let me know if you need anything.",
      time: "5 min ago",
    },
  ];

  // Handle contact action
  const handleContactAction = (
    contact: EmergencyContact,
    action: "call" | "message",
  ) => {
    setSelectedContact(contact);
    console.log(`${action} ${contact.name}`);
    // In a real app, this would initiate a call or open a messaging interface
  };

  // Handle resource action
  const handleResourceAction = (
    resource: HelpResource,
    action: "call" | "visit",
  ) => {
    console.log(`${action} ${resource.name}`);
    // In a real app, this would initiate a call or open the website
  };

  // Handle message response
  const handleMessageResponse = (messageId: number) => {
    console.log(`Responding to message ${messageId}`);
    // In a real app, this would open a messaging interface
  };

  // Handle mood change to a less urgent state
  const handleFeelBetter = () => {
    // Change mood to "High Alert" (index 4) which is one step below "Urgent"
    setCurrentMood(4);
    onContextSubmit("Feeling a bit better after using urgent help resources");
  };

  return (
    <SlideCard
      title="Urgent Help"
      currentMood={currentMood}
      setCurrentMood={setCurrentMood}
      moodOptions={moodOptions}
      onContextSubmit={onContextSubmit}
      cardStyle={cardStyle}
    >
      <div className="space-y-6">
        {/* Urgent alert banner */}
        <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-center gap-3 animate-pulse-slow">
          <AlertTriangle className="h-6 w-6 text-red-400" />
          <div>
            <h3 className="font-semibold text-red-300">Urgent Status Active</h3>
            <p className="text-sm text-white/80">
              Your connections have been notified of your urgent status
            </p>
          </div>
        </div>

        {/* Feel better button */}
        <button
          onClick={handleFeelBetter}
          className="w-full p-3 bg-amber-900/30 hover:bg-amber-900/40 border border-amber-500/30 rounded-lg text-center transition-colors"
        >
          <span className="font-medium">I'm Feeling Better Now</span>
          <p className="text-sm text-white/70 mt-1">
            Update your mood to High Alert instead of Urgent
          </p>
        </button>

        {/* Emergency contacts section */}
        <div className="bg-black/20 rounded-lg border border-white/10 overflow-hidden">
          <div
            className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/5"
            onClick={() => setShowEmergencyContacts(!showEmergencyContacts)}
          >
            <h3 className="font-semibold">Emergency Contacts</h3>
            <button className="p-1 rounded-full hover:bg-black/20">
              {showEmergencyContacts ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          </div>

          {showEmergencyContacts && (
            <div className="p-3 pt-0 space-y-2">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between p-2 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{contact.name}</h4>
                      <p className="text-xs text-white/70">
                        {contact.relationship}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleContactAction(contact, "message")}
                      className="p-2 rounded-full bg-black/30 hover:bg-cyan-900/50 transition-colors"
                      title="Message"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleContactAction(contact, "call")}
                      className="p-2 rounded-full bg-black/30 hover:bg-green-900/50 transition-colors"
                      title="Call"
                    >
                      <Phone className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Help resources section */}
        <div className="bg-black/20 rounded-lg border border-white/10 overflow-hidden">
          <div
            className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/5"
            onClick={() => setShowHelpResources(!showHelpResources)}
          >
            <h3 className="font-semibold">Help Resources</h3>
            <button className="p-1 rounded-full hover:bg-black/20">
              {showHelpResources ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          </div>

          {showHelpResources && (
            <div className="p-3 pt-0 space-y-2">
              {helpResources.map((resource) => (
                <div
                  key={resource.id}
                  className="p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <h4 className="font-medium">{resource.name}</h4>
                  </div>
                  <p className="text-sm text-white/80 mb-3">
                    {resource.description}
                  </p>
                  <div className="flex gap-2">
                    {resource.phone && (
                      <button
                        onClick={() => handleResourceAction(resource, "call")}
                        className="flex-1 py-1.5 px-3 bg-green-900/30 hover:bg-green-900/50 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-1"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{resource.phone}</span>
                      </button>
                    )}
                    {resource.website && (
                      <button
                        onClick={() => handleResourceAction(resource, "visit")}
                        className="flex-1 py-1.5 px-3 bg-blue-900/30 hover:bg-blue-900/50 rounded-md text-sm font-medium transition-colors"
                      >
                        Visit Website
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Incoming messages section */}
        <div className="bg-black/20 rounded-lg border border-white/10 overflow-hidden">
          <div
            className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/5"
            onClick={() => setShowIncomingMessages(!showIncomingMessages)}
          >
            <h3 className="font-semibold">Incoming Messages</h3>
            <button className="p-1 rounded-full hover:bg-black/20">
              {showIncomingMessages ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          </div>

          {showIncomingMessages && (
            <div className="p-3 pt-0 space-y-2">
              {incomingMessages.length > 0 ? (
                incomingMessages.map((message) => (
                  <div
                    key={message.id}
                    className="p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                          <img
                            src={message.avatar}
                            alt={message.sender}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium">{message.sender}</h4>
                      </div>
                      <span className="text-xs text-white/60">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-white/90 mb-3">
                      {message.message}
                    </p>
                    <button
                      onClick={() => handleMessageResponse(message.id)}
                      className="w-full py-1.5 px-3 bg-cyan-900/30 hover:bg-cyan-900/50 rounded-md text-sm font-medium transition-colors"
                    >
                      Respond
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-white/60">
                  <p>No messages yet</p>
                  <p className="text-xs mt-1">
                    Your connections will be notified of your urgent status
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Contact modal */}
        {selectedContact && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-4 rounded-lg w-80 border border-white/20">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">
                  Contact {selectedContact.name}
                </h3>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="p-1 rounded-full hover:bg-black/30"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 mb-2">
                  <img
                    src={selectedContact.avatar}
                    alt={selectedContact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium">{selectedContact.name}</h4>
                <p className="text-sm text-white/70">
                  {selectedContact.relationship}
                </p>
                {selectedContact.phone && (
                  <p className="text-sm text-white/70">
                    {selectedContact.phone}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    console.log(`Calling ${selectedContact.name}`);
                    setSelectedContact(null);
                  }}
                  className="flex-1 py-2 bg-green-900/50 hover:bg-green-900/70 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => {
                    console.log(`Messaging ${selectedContact.name}`);
                    setSelectedContact(null);
                  }}
                  className="flex-1 py-2 bg-cyan-900/50 hover:bg-cyan-900/70 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Message</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Custom animations */}
        <style jsx="true">{`
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 2s infinite;
          }
        `}</style>
      </div>
    </SlideCard>
  );
};

export default UrgentHelp;
