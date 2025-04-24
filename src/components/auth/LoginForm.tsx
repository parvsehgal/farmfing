
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes only - in a real app, validate credentials before showing success
      toast({
        title: "Login Successful",
        description: "Welcome back to Farmfing!",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login to your account</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="your@email.com" 
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-farmfing-primary hover:underline">
                Forgot Password?
              </Link>
            </div>
            <Input 
              id="password" 
              name="password"
              type="password" 
              placeholder="••••••••" 
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="h-4 w-4 rounded border-gray-300 text-farmfing-primary focus:ring-farmfing-primary"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <Label htmlFor="rememberMe" className="text-sm font-normal cursor-pointer">
              Remember me
            </Label>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <Button variant="outline" type="button" className="w-full">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
            <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.74 18.2 13.48 18.58 12 18.58C9.12 18.58 6.69 16.67 5.76 14.1H2.08V16.94C3.89 20.53 7.67 23 12 23Z" fill="#34A853" />
            <path d="M5.76 14.09C5.54 13.47 5.42 12.8 5.42 12.12C5.42 11.44 5.54 10.78 5.76 10.16V7.32H2.08C1.24 8.82 0.75 10.61 0.75 12.5C0.75 14.39 1.24 16.18 2.08 17.68L5.76 14.09Z" fill="#FBBC05" />
            <path d="M12 5.42C13.62 5.42 15.06 5.96 16.21 7.05L19.36 3.9C17.46 2.14 14.97 1 12 1C7.67 1 3.89 3.47 2.08 7.07L5.76 9.91C6.69 7.34 9.12 5.42 12 5.42Z" fill="#EA4335" />
          </svg>
          Sign in with Google
        </Button>
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-farmfing-primary hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
