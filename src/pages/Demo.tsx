
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Demo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demo request submitted",
        description: "A member of our team will contact you shortly to schedule your demo.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Request a Demo</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              See how Farmfing can transform your restaurant's supply chain with a personalized demo.
            </p>
            
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Demo</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will reach out to schedule a personalized demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input id="email" type="email" placeholder="you@yourrestaurant.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Restaurant/Company Name</Label>
                    <Input id="company" placeholder="Your Restaurant" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input id="role" placeholder="Restaurant Manager" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us what you're looking for and any specific questions you have."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;
