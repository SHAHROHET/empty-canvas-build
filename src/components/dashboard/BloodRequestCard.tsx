
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/toast";

interface BloodRequestProps {
  id: string;
  patientName: string;
  bloodGroup: string;
  hospital: string;
  urgency: "high" | "medium" | "low";
  createdAt: string;
  distance?: string;
  contactNumber: string;
}

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "high":
      return "destructive";
    case "medium":
      return "default";
    case "low":
      return "secondary";
    default:
      return "default";
  }
};

const BloodRequestCard = ({
  id,
  patientName,
  bloodGroup,
  hospital,
  urgency,
  createdAt,
  distance,
  contactNumber,
}: BloodRequestProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const { toast } = useToast();

  const handleRespond = () => {
    setIsResponding(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsResponding(false);
      toast({
        title: "Response Sent",
        description: "You have responded to the blood request",
      });
    }, 1500);
  };

  const handleContact = () => {
    // In a real app, this would open the phone app
    toast({
      title: "Calling",
      description: `Calling ${contactNumber}`,
    });
  };

  return (
    <Card className={`w-full transition-all duration-200 ${urgency === "high" ? "border-destructive/50" : ""}`}>
      <CardHeader className={urgency === "high" ? "pb-2" : "pb-4"}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl flex items-center">
              <span className="font-medium">{patientName}</span>
              <Badge variant={getUrgencyColor(urgency)} className="ml-2">
                {urgency === "high" ? "URGENT" : urgency === "medium" ? "Needed Soon" : "Standard"}
              </Badge>
            </CardTitle>
            <CardDescription>Blood Group: <span className="font-semibold text-blood">{bloodGroup}</span></CardDescription>
          </div>
          
          <div className={`rounded-full w-10 h-10 flex items-center justify-center ${
            bloodGroup.includes("O") ? "bg-green-100 text-green-800" :
            bloodGroup.includes("AB") ? "bg-purple-100 text-purple-800" :
            bloodGroup.includes("A") ? "bg-blue-100 text-blue-800" :
            "bg-red-100 text-red-800"
          }`}>
            {bloodGroup}
          </div>
        </div>

        {urgency === "high" && (
          <div className={`mt-2 p-2 bg-destructive/10 text-destructive rounded-md flex items-center text-sm ${isExpanded ? "" : "animate-pulse"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Urgent request - critically needed
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-0.5 text-muted-foreground">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>{hospital}</span>
          </div>
          
          {distance && (
            <div className="flex items-center text-sm text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 12h-6.5"></path>
                <path d="M12 7v5"></path>
              </svg>
              <span>{distance} away</span>
            </div>
          )}
          
          <div className="flex items-center text-sm text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M12 8v4l3 3"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span>Posted {createdAt}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="text-sm font-medium">Additional Information:</h4>
              <p className="text-sm text-muted-foreground">
                Patient requires blood donation as soon as possible. Matching blood type donors are requested to respond quickly.
              </p>
            </div>
            
            <div className="pt-2">
              <Button variant="default" size="sm" className="w-full" onClick={handleContact}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Requester
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-1">
        <Button variant="outline" className="flex-1" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "View Details"}
        </Button>
        <Button 
          className="flex-1" 
          onClick={handleRespond} 
          disabled={isResponding}
        >
          {isResponding ? "Responding..." : "Respond"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BloodRequestCard;
