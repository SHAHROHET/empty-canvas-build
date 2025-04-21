import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const { toast } = useToast();

  const handleAvailabilityChange = (checked: boolean) => {
    setIsAvailable(checked);
    toast({
      title: checked ? "You are now available" : "You are now unavailable",
      description: checked 
        ? "You'll receive notifications for donation requests" 
        : "You won't receive donation requests",
    });
  };

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
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-2xl bg-secondary">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">John Doe</CardTitle>
                    <CardDescription>
                      <span className="block">john.doe@example.com</span>
                      <span>+1 (555) 123-4567</span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center bg-red-100 text-red-800`}>
                      O+
                    </div>
                    <span className="font-medium">Blood Type: O+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={isAvailable}
                      onCheckedChange={handleAvailabilityChange}
                      id="availability-status"
                    />
                    <Label htmlFor="availability-status" className="cursor-pointer">
                      {isAvailable ? "Available for donation" : "Not available for donation"}
                    </Label>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p>32 years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Gender</p>
                  <p>Male</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p>123 Main St, Anytown, USA</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Last Donation</p>
                  <p>April 5, 2025</p>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  Account Settings
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive" onClick={handleLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Log Out
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Donation Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Donations</span>
                    <Badge variant="outline" className="text-xl font-semibold">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Blood Volume Donated</span>
                    <Badge variant="outline" className="text-xl font-semibold">1.35L</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Last Donation Date</span>
                    <Badge variant="outline">April 5, 2025</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Next Eligible Date</span>
                    <Badge variant="outline">July 5, 2025</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Blood Group</span>
                    <Badge variant="outline" className="text-xl font-semibold text-blood">O+</Badge>
                  </div>
                  
                  <div>
                    <p className="mb-2 font-medium">Can Donate To</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>O+</Badge>
                      <Badge>A+</Badge>
                      <Badge>B+</Badge>
                      <Badge>AB+</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <p className="mb-2 font-medium">Can Receive From</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>O+</Badge>
                      <Badge>O-</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
