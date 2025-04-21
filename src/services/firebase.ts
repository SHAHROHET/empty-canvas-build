// This is a mock Firebase service that simulates the functionality for the prototype
// In a real implementation, this would be replaced with actual Firebase SDK calls

// Authentication
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate successful login
  if (email && password) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({
      uid: 'user123',
      email,
      name: 'John Doe',
      bloodGroup: 'O+',
      photoURL: null
    }));
    return { success: true };
  }
  
  throw new Error('Invalid email or password');
};

export const signUpWithEmailAndPassword = async (email: string, password: string, name: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate successful registration
  if (email && password && name) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({
      uid: 'user' + Math.random().toString(36).substring(2, 9),
      email,
      name,
      bloodGroup: null,
      photoURL: null,
      profileComplete: false
    }));
    return { success: true };
  }
  
  throw new Error('Registration failed');
};

export const signInWithGoogle = async () => {
  // First, simulate opening a popup window for Google authentication
  const confirmAuth = window.confirm("This would normally open Google's authentication page. Click OK to simulate successful authentication with Google.");
  
  if (!confirmAuth) {
    throw new Error("Google authentication was cancelled by user");
  }
  
  // Simulate API delay for the authentication process
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Simulate successful Google login
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('user', JSON.stringify({
    uid: 'google123',
    email: 'john.doe@gmail.com',
    name: 'John Doe',
    bloodGroup: null,
    photoURL: null,
    profileComplete: false
  }));
  return { success: true };
};

export const signInWithApple = async () => {
  // First, simulate opening a popup window for Apple authentication
  const confirmAuth = window.confirm("This would normally open Apple's authentication page. Click OK to simulate successful authentication with Apple.");
  
  if (!confirmAuth) {
    throw new Error("Apple authentication was cancelled by user");
  }
  
  // Simulate API delay for the authentication process
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Simulate successful Apple login
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('user', JSON.stringify({
    uid: 'apple123',
    email: 'john.doe@icloud.com',
    name: 'John Doe',
    bloodGroup: null,
    photoURL: null,
    profileComplete: false
  }));
  return { success: true };
};

export const signOut = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Clear local storage
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  return { success: true };
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// Firestore
export const createDonorProfile = async (userId: string, profileData: any) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Update user data in local storage
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    const updatedUser = {
      ...user,
      ...profileData,
      profileComplete: true
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  }
  
  return { success: true };
};

export const createBloodRequest = async (requestData: any) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, this would save to Firebase
  console.log('Blood request created:', requestData);
  
  return { 
    success: true,
    requestId: 'req-' + Math.random().toString(36).substring(2, 9)
  };
};

export const getNearbyDonors = async (location: any, bloodGroup: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock donor data
  return [
    {
      id: 'donor1',
      name: 'Alice Smith',
      bloodGroup: 'A+',
      distance: '1.2 km',
      available: true,
      location: { lat: location.lat + 0.01, lng: location.lng - 0.01 }
    },
    {
      id: 'donor2',
      name: 'Bob Johnson',
      bloodGroup: 'O-',
      distance: '2.5 km',
      available: true,
      location: { lat: location.lat - 0.015, lng: location.lng + 0.02 }
    },
    {
      id: 'donor3',
      name: 'Carol Williams',
      bloodGroup: bloodGroup,
      distance: '3.7 km',
      available: true,
      location: { lat: location.lat + 0.022, lng: location.lng + 0.018 }
    }
  ];
};

// Cloud Messaging
export const subscribeToNotifications = async (userId: string, topics: string[]) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  console.log(`User ${userId} subscribed to topics:`, topics);
  return { success: true };
};

export const sendNotificationToNearbyDonors = async (requestData: any, radius: number = 10) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  console.log(`Notification sent to donors within ${radius}km for request:`, requestData);
  return { success: true, notifiedDonors: 23 };
};

// Location Services
export const getUserLocation = async () => {
  return new Promise<{lat: number, lng: number}>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          // Return a default location if geolocation fails
          resolve({ lat: 18.5204, lng: 73.8567 });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Return a default location if geolocation is not supported
      resolve({ lat: 18.5204, lng: 73.8567 });
    }
  });
};

export const calculateDistance = (location1: any, location2: any) => {
  // Simple mock distance calculation
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(location2.lat - location1.lat);
  const dLng = deg2rad(location2.lng - location1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(location1.lat)) * Math.cos(deg2rad(location2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
