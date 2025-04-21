
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const ProfileSetup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { toast } = useToast();
  
  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your donor profile has been created successfully",
      });
      
      // Navigate to home after profile setup
      window.location.href = "/home";
    }, 2000);
  };

  const requestLocation = () => {
    toast({
      title: "Location Access",
      description: "Please allow location access to proceed",
    });
    
    // Simulate geolocation API
    setTimeout(() => {
      toast({
        title: "Location Found",
        description: "Your location has been detected",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Donor Profile Setup</CardTitle>
        <CardDescription>Tell us more about you to help those in need</CardDescription>
      </CardHeader>
      <CardContent>
        {currentStep === 1 ? (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" min="18" max="65" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select required>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Next
            </Button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="bloodGroup">Blood Group</Label>
              <Select required>
                <SelectTrigger id="bloodGroup">
                  <SelectValue placeholder="Select your blood group" />
                </SelectTrigger>
                <SelectContent>
                  {bloodGroups.map((group) => (
                    <SelectItem key={group} value={group.toLowerCase()}>{group}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St, City, State" required />
            </div>
            
            <div className="space-y-2">
              <Button 
                type="button"
                variant="outline"
                className="w-full"
                onClick={requestLocation}
              >
                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Share Current Location
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="availability"
                checked={isAvailable}
                onCheckedChange={setIsAvailable}
              />
              <Label htmlFor="availability" className="cursor-pointer">
                {isAvailable ? "Available for donation" : "Not available for donation"}
              </Label>
            </div>
            
            <div className="pt-4 flex gap-3">
              <Button
                type="button"
                variant="outline" 
                className="flex-1"
                onClick={() => setCurrentStep(1)}
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Complete Setup"}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileSetup;
