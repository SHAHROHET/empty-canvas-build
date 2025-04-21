
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/toast";

const DonorMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // This would be replaced with actual map initialization code
    if (mapRef.current) {
      toast({
        title: "Map loaded",
        description: "Donors in your area have been located",
      });
    }
  }, []);
  
  const handleBloodGroupFilter = (value: string) => {
    toast({
      title: "Filter Applied",
      description: `Showing donors with blood group: ${value.toUpperCase()}`,
    });
  };
  
  const handleAvailabilityFilter = (value: string) => {
    toast({
      title: "Filter Applied",
      description: `Showing donors who are ${value}`,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-center">
          <CardTitle>Donors Near You</CardTitle>
          <Badge variant="outline" className="text-sm font-normal">23 donors found</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Select onValueChange={handleBloodGroupFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Blood Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Blood Groups</SelectItem>
              <SelectItem value="a+">A+</SelectItem>
              <SelectItem value="a-">A-</SelectItem>
              <SelectItem value="b+">B+</SelectItem>
              <SelectItem value="b-">B-</SelectItem>
              <SelectItem value="ab+">AB+</SelectItem>
              <SelectItem value="ab-">AB-</SelectItem>
              <SelectItem value="o+">O+</SelectItem>
              <SelectItem value="o-">O-</SelectItem>
            </SelectContent>
          </Select>
          
          <Select onValueChange={handleAvailabilityFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Donors</SelectItem>
              <SelectItem value="available">Available Now</SelectItem>
              <SelectItem value="unavailable">Not Available</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div 
          ref={mapRef} 
          className="w-full h-[400px] rounded-lg bg-muted"
          style={{
            backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/73.8567,18.5204,9,0/600x400?access_token=pk.eyJ1IjoibG92YWJsZWRldiIsImEiOiJjbDdhbWk5c2EwNHVzM3BzNnRyZHk4cTJ5In0.sFn6GJl9Z_TRYqp_0hm_eQ')", 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Donor markers would be rendered here in an actual implementation */}
          <div className="relative h-full w-full p-4">
            <div className="absolute top-4 right-4">
              <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                My Location
              </Button>
            </div>
            
            {/* Simulated donor marker pins */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-blood text-white flex items-center justify-center font-medium animate-pulse">
                A+
              </div>
            </div>
            
            <div className="absolute bottom-1/3 right-1/3">
              <div className="w-8 h-8 rounded-full bg-blood text-white flex items-center justify-center font-medium">
                O-
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/4">
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-medium">
                AB+
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blood mr-2"></div>
            <span className="text-sm text-muted-foreground">Available</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
            <span className="text-sm text-muted-foreground">Unavailable</span>
          </div>
          
          <Button variant="link" className="text-sm" onClick={() => toast({ title: "Loading more donors..." })}>
            View all donors
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonorMap;
