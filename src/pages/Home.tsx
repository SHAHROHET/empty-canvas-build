
import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import BloodRequestCard from "@/components/dashboard/BloodRequestCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";

// Sample data
const sampleRequests = [
  {
    id: "req-1",
    patientName: "Sarah Johnson",
    bloodGroup: "A+",
    hospital: "Memorial Hospital, Downtown",
    urgency: "high",
    createdAt: "10 minutes ago",
    distance: "1.2 km",
    contactNumber: "+1 (555) 123-4567"
  },
  {
    id: "req-2",
    patientName: "Michael Chen",
    bloodGroup: "O-",
    hospital: "City Medical Center, West Wing",
    urgency: "medium",
    createdAt: "45 minutes ago",
    distance: "3.5 km",
    contactNumber: "+1 (555) 987-6543"
  },
  {
    id: "req-3",
    patientName: "Emma Rodriguez",
    bloodGroup: "B+",
    hospital: "University Hospital",
    urgency: "low",
    createdAt: "2 hours ago",
    distance: "5.8 km",
    contactNumber: "+1 (555) 456-7890"
  }
];

const Home = () => {
  const [availabilityStatus, setAvailabilityStatus] = useState(true);
  const { toast } = useToast();

  const toggleAvailability = () => {
    setAvailabilityStatus(!availabilityStatus);
    toast({
      title: availabilityStatus ? "You are now unavailable" : "You are now available",
      description: availabilityStatus 
        ? "You won't receive donation requests" 
        : "You'll receive notifications for donation requests",
    });
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main content */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* User welcome card */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Welcome, John</CardTitle>
                    <CardDescription>
                      Your blood type: <span className="font-semibold text-blood">O+</span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">
                      {availabilityStatus ? "Available for donation" : "Not available"}
                    </span>
                    <Button 
                      variant={availabilityStatus ? "default" : "outline"} 
                      size="sm"
                      className={availabilityStatus ? "bg-blood hover:bg-blood/90" : ""}
                      onClick={toggleAvailability}
                    >
                      {availabilityStatus ? "Set Unavailable" : "Set Available"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button className="flex-1" variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M14 2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1h4z"></path>
                    </svg>
                    Request Blood
                  </Button>
                  <Button className="flex-1" variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    View Donors Map
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Blood requests feed */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Nearby Blood Requests</h2>
                <Badge variant="outline">{sampleRequests.length} Requests</Badge>
              </div>
              
              <div className="space-y-4">
                {sampleRequests.map((request) => (
                  <BloodRequestCard
                    key={request.id}
                    id={request.id}
                    patientName={request.patientName}
                    bloodGroup={request.bloodGroup}
                    hospital={request.hospital}
                    urgency={request.urgency as any}
                    createdAt={request.createdAt}
                    distance={request.distance}
                    contactNumber={request.contactNumber}
                  />
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="link">View All Requests</Button>
              </div>
            </div>
          </div>
          
          {/* Side content */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Stats card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-blood">3</p>
                    <p className="text-sm text-muted-foreground">Donations</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blood">1.35L</p>
                    <p className="text-sm text-muted-foreground">Blood Donated</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blood">3</p>
                    <p className="text-sm text-muted-foreground">Lives Saved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Donation tips */}
            <Card>
              <CardHeader>
                <CardTitle>Donation Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blood mr-2 mt-0.5">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <span className="text-sm">Stay hydrated before and after donation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blood mr-2 mt-0.5">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <span className="text-sm">Eat iron-rich foods like leafy greens and red meat</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blood mr-2 mt-0.5">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <span className="text-sm">Avoid strenuous activity for 24 hours after donation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blood mr-2 mt-0.5">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <span className="text-sm">Get a good night's sleep before donation day</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Blood compatibility chart */}
            <Card>
              <CardHeader>
                <CardTitle>Blood Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Blood Type</th>
                        <th className="text-left py-2">Can Donate To</th>
                        <th className="text-left py-2">Can Receive From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-medium">A+</td>
                        <td className="py-2">A+, AB+</td>
                        <td className="py-2">A+, A-, O+, O-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-medium">O-</td>
                        <td className="py-2">All Types</td>
                        <td className="py-2">O-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-medium">B+</td>
                        <td className="py-2">B+, AB+</td>
                        <td className="py-2">B+, B-, O+, O-</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">AB+</td>
                        <td className="py-2">AB+</td>
                        <td className="py-2">All Types</td>
                      </tr>
                    </tbody>
                  </table>
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

export default Home;
