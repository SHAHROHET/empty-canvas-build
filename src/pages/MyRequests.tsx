
import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Sample data
const myRequests = [
  {
    id: "myr-1",
    patientName: "David Smith",
    bloodGroup: "B+",
    hospital: "General Hospital",
    status: "active",
    date: "April 18, 2025",
    responses: 2
  },
  {
    id: "myr-2",
    patientName: "Lisa Anderson",
    bloodGroup: "A-",
    hospital: "City Medical Center",
    status: "completed",
    date: "March 31, 2025",
    responses: 4
  },
  {
    id: "myr-3",
    patientName: "James Wilson",
    bloodGroup: "O+",
    hospital: "University Hospital",
    status: "expired",
    date: "March 10, 2025",
    responses: 1
  }
];

const myDonations = [
  {
    id: "myd-1",
    recipient: "Maria Garcia",
    bloodGroup: "O+",
    hospital: "Memorial Hospital",
    date: "April 5, 2025",
    status: "completed"
  },
  {
    id: "myd-2",
    recipient: "Robert Johnson",
    bloodGroup: "O+",
    hospital: "City Medical Center",
    date: "February 22, 2025",
    status: "completed"
  },
  {
    id: "myd-3",
    recipient: "Emily Brown",
    bloodGroup: "O+",
    hospital: "General Hospital",
    date: "January 15, 2025",
    status: "completed"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500">Active</Badge>;
    case "completed":
      return <Badge className="bg-blue-500">Completed</Badge>;
    case "expired":
      return <Badge variant="secondary">Expired</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const MyRequests = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">My Requests & Donations</h1>
        
        <Tabs defaultValue="requests" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="requests">My Blood Requests</TabsTrigger>
            <TabsTrigger value="donations">My Donations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="requests">
            <div className="space-y-4">
              {myRequests.map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{request.patientName}</CardTitle>
                        <CardDescription>Blood Group: <span className="font-semibold">{request.bloodGroup}</span></CardDescription>
                      </div>
                      <div>
                        {getStatusBadge(request.status)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Hospital</p>
                        <p className="font-medium">{request.hospital}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{request.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Responses</p>
                        <p className="font-medium">{request.responses} donors</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Request ID</p>
                        <p className="font-medium">{request.id}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end gap-2">
                      {request.status === "active" && (
                        <>
                          <Button variant="outline" size="sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                            Cancel
                          </Button>
                        </>
                      )}
                      <Button size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {myRequests.length === 0 && (
                <div className="text-center p-8">
                  <p className="text-muted-foreground">You haven't made any blood requests yet.</p>
                  <Button className="mt-4">Create a Request</Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="donations">
            <div className="space-y-4">
              {myDonations.map((donation) => (
                <Card key={donation.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>Donation to {donation.recipient}</CardTitle>
                        <CardDescription>Blood Group: <span className="font-semibold">{donation.bloodGroup}</span></CardDescription>
                      </div>
                      <div>
                        {getStatusBadge(donation.status)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Hospital</p>
                        <p className="font-medium">{donation.hospital}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{donation.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Donation ID</p>
                        <p className="font-medium">{donation.id}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <path d="M14 2v6h6"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                          <path d="M10 9H8"></path>
                        </svg>
                        Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {myDonations.length === 0 && (
                <div className="text-center p-8">
                  <p className="text-muted-foreground">You haven't made any donations yet.</p>
                  <Button className="mt-4">Find Donation Requests</Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default MyRequests;
