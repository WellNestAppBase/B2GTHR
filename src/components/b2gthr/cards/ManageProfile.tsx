import React, { useState, useRef, useEffect } from "react";
import { Camera, Loader2 } from "lucide-react";
import SlideCard from "../SlideCard";
import { useAuth } from "../../../contexts/AuthContext";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../../../services/profileService";
import { useToast } from "../../../components/ui/use-toast";

interface UserData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  avatar_url?: string;
}

interface MoodOption {
  name: string;
  color: string;
  textClass: string; // Changed from optional to required to match SlideCard's expectations
  description: string; // Changed from optional to required to match SlideCard's expectations
}

interface ManageProfileProps {
  currentMood?: number;
  setCurrentMood?: (index: number) => void;
  moodOptions?: MoodOption[];
  onContextSubmit?: (context: string) => void;
  cardStyle?: React.CSSProperties;
}

const ManageProfile: React.FC<ManageProfileProps> = ({
  currentMood: externalCurrentMood,
  setCurrentMood: externalSetCurrentMood,
  moodOptions: externalMoodOptions,
  onContextSubmit,
  cardStyle = {},
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    bio: "",
    avatar_url: "",
  });
  const [currentMood, setCurrentMood] = useState(externalCurrentMood || 2);
  const [moodOptions, setMoodOptions] = useState<MoodOption[]>(
    externalMoodOptions || [],
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load user profile data
  useEffect(() => {
    if (user) {
      loadUserProfile();
    }
  }, [user]);

  // Load user profile from database
  const loadUserProfile = async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const { data, error } = await fetchUserProfile(user.id);
      if (data && !error) {
        setUserData({
          name: data.full_name || user.user_metadata?.full_name || "",
          email: data.email || user.email || "",
          phone: data.phone || "",
          bio: data.bio || "",
          avatar_url:
            data.avatar_url ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`,
        });
      }
    } catch (error) {
      console.error("Error loading profile:", error);
      toast({
        title: "Error",
        description: "Failed to load profile data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    try {
      // Create a profile data object that matches the expected format
      const profileData = {
        id: user.id,
        full_name: userData.name,
        email: userData.email,
        phone: userData.phone,
        bio: userData.bio,
        avatar_url: userData.avatar_url,
      };

      await updateUserProfile(profileData);
      toast({
        title: "Success",
        description: "Profile updated successfully.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle mood change
  const handleMoodChange = (index: number) => {
    setCurrentMood(index);
    if (externalSetCurrentMood) {
      externalSetCurrentMood(index);
    }
  };

  // Handle context submission
  const handleContextSubmit = (context: string) => {
    if (onContextSubmit) {
      onContextSubmit(context);
    }
  };

  // Handle avatar upload click
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, you would upload the file to storage
    // For now, we'll just show a toast message
    if (e.target.files && e.target.files[0]) {
      toast({
        title: "Upload not implemented",
        description:
          "File upload functionality would be implemented in a production app.",
      });
    }
  };

  return (
    <SlideCard
      title="Manage Profile"
      currentMood={currentMood}
      setCurrentMood={handleMoodChange}
      moodOptions={moodOptions}
      onContextSubmit={handleContextSubmit}
      cardStyle={cardStyle}
    >
      <div className="space-y-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-white/70" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar section */}
            <div className="flex flex-col items-center">
              <div
                className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 cursor-pointer group"
                onClick={handleAvatarClick}
              >
                <img
                  src={
                    userData.avatar_url ||
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id || "default"}`
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <p className="text-sm text-white/70 mt-2">
                Click to change avatar
              </p>
            </div>

            {/* Profile form */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Your email address"
                  disabled={!!user?.email} // Disable if email comes from auth
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={userData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={userData.bio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white min-h-[100px]"
                  placeholder="Tell us a bit about yourself"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md transition-colors flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Profile"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </SlideCard>
  );
};

export default ManageProfile;
