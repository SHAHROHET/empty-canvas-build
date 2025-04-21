
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import AuthForm from "@/components/auth/AuthForm";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  // Check if user is already logged in 
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <section className="relative py-12 md:py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-muted -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Donate Blood, <span className="text-blood">Save Lives</span>
              </h1>
              <p className="text-lg mb-8 text-muted-foreground max-w-lg mx-auto md:mx-0">
                LifeLink connects blood donors with those in need. Join our community to help save lives through blood donation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button size="lg" className="bg-blood hover:bg-blood/90">
                  Register as a Donor
                </Button>
                <Button size="lg" variant="outline">
                  Request Blood
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <p className="text-3xl font-bold text-blood">1000+</p>
                  <p className="text-sm text-muted-foreground">Registered Donors</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-3xl font-bold text-blood">500+</p>
                  <p className="text-sm text-muted-foreground">Lives Saved</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-3xl font-bold text-blood">24/7</p>
                  <p className="text-sm text-muted-foreground">Emergency Support</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <AuthForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How LifeLink Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blood/10 text-blood flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-medium mb-2">Register as a Donor</h3>
              <p className="text-muted-foreground">Sign up and create your donor profile with your blood type and location.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blood/10 text-blood flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-medium mb-2">Receive Notifications</h3>
              <p className="text-muted-foreground">Get alerts when someone near you needs your blood type.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blood/10 text-blood flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-medium mb-2">Save a Life</h3>
              <p className="text-muted-foreground">Respond to requests and coordinate with the recipient to donate blood.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blood flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M14 2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1h4z"></path>
                    <path d="M12 8v7"></path>
                    <path d="M8.5 11.5L15.5 11.5"></path>
                  </svg>
                </div>
                <span className="font-semibold text-lg">LifeLink</span>
              </div>
              <p className="text-sm mt-2">Connecting blood donors with people in need</p>
            </div>
            
            <div className="text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} LifeLink. All rights reserved.</p>
              <p className="mt-1">A project created with ❤️ to save lives</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
