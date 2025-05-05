import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-farmfing-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant's Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of restaurants that are saving time and money with
            Farmfing's smart procurement solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 bg-white text-farmfing-primary hover:bg-gray-100"
              >
                Get Started Free
              </Button>
            </Link>
            <Link to="/demo">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-blue-600"
              >
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
