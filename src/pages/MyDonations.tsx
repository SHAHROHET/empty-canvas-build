
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getCurrentUser } from '@/services/firebase';

type Donation = {
  id: string;
  date: string;
  recipient: string;
  hospital: string;
  bloodGroup: string;
  status: 'completed' | 'scheduled';
}

const MyDonations = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const loadDonations = async () => {
      setIsLoading(true);
      try {
        // This would normally fetch from Firebase
        // For now, using mock data
        const mockDonations: Donation[] = [
          {
            id: '1',
            date: '2025-04-15',
            recipient: 'Jane Smith',
            hospital: 'City General Hospital',
            bloodGroup: 'O+',
            status: 'completed'
          },
          {
            id: '2',
            date: '2025-04-28',
            recipient: 'Robert Johnson',
            hospital: 'Community Medical Center',
            bloodGroup: 'A-',
            status: 'scheduled'
          }
        ];
        
        // Simulate API delay
        setTimeout(() => {
          setDonations(mockDonations);
          setIsLoading(false);
        }, 1000);
        
      } catch (error) {
        console.error('Error loading donations:', error);
        toast({
          title: 'Error',
          description: 'Failed to load donation history',
          variant: 'destructive'
        });
        setIsLoading(false);
      }
    };
    
    loadDonations();
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Donations</h1>
      
      {isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blood"></div>
        </div>
      ) : donations.length === 0 ? (
        <Card className="text-center p-8">
          <CardContent>
            <p className="text-muted-foreground">You haven't made any donations yet.</p>
            <p className="mt-2">When you donate blood, your history will appear here.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {donations.map((donation) => (
            <Card key={donation.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">
                    Donation for {donation.recipient}
                  </CardTitle>
                  <span className={`text-sm px-2 py-1 rounded ${donation.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {donation.status === 'completed' ? 'Completed' : 'Scheduled'}
                  </span>
                </div>
                <CardDescription>
                  {new Date(donation.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Hospital</p>
                    <p>{donation.hospital}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Blood Group</p>
                    <p className="font-medium text-blood">{donation.bloodGroup}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
