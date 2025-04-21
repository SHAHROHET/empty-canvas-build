import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodRequestForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [urgency, setUrgency] = useState<string>("medium");
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Request Submitted",
        description: "Your blood request has been broadcasted to donors near you",
      });
      
      // Navigate to home after submission
      window.location.href = "/home";
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Request Blood</CardTitle>
        <CardDescription>Fill in the details to send a request to donors</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="patientName">Patient Name</Label>
            <Input id="patientName" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="hospital">Hospital / Location</Label>
            <Input id="hospital" placeholder="City Hospital, Main Street" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bloodGroup">Required Blood Group</Label>
            <Select required>
              <SelectTrigger id="bloodGroup">
                <SelectValue placeholder="Select blood group" />
              </SelectTrigger>
              <SelectContent>
                {bloodGroups.map((group) => (
                  <SelectItem key={group} value={group.toLowerCase()}>{group}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input id="contactNumber" type="tel" placeholder="+1 (555) 123-4567" required />
          </div>
          
          <div className="space-y-3">
            <Label>Urgency Level</Label>
            <RadioGroup value={urgency} onValueChange={setUrgency} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low" className="cursor-pointer">Standard</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="cursor-pointer">Needed Soon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="cursor-pointer">Critical</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea 
              id="additionalInfo" 
              placeholder="Any additional information about the patient or request"
              rows={3}
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Submitting Request..." : "Submit Blood Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BloodRequestForm;
