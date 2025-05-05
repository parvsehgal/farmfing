import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content:
      "Farmfing ने हमारे रेस्तरां के इन्वेंट्री मैनेजमेंट को पूरी तरह बदल दिया है। AI की सिफारिशों से हमारा खाद्य अपव्यय केवल दो महीनों में 30% कम हो गया है।",
    author: "राजेश शर्मा",
    role: "रेस्तरां मालिक",
    company: "स्पाइस गार्डन",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    content:
      "Our most-used masalas and ingredients are now automatically scheduled for delivery. This has freed up our kitchen staff to focus on what they do best - creating authentic Indian dishes.",
    author: "Priya Patel",
    role: "Executive Chef",
    company: "Royal Thali House",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    content:
      "As a procurement manager for multiple outlets, Farmfing's bulk ordering system for Indian spices and ingredients has streamlined our entire supply chain. The pricing transparency is excellent.",
    author: "Amit Malhotra",
    role: "Procurement Head",
    company: "Desi Flavours Group",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of Indian restaurants that are transforming their
            operations with Farmfing's solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-t-4 border-farmfing-primary"
            >
              <CardContent className="pt-6">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-base text-gray-500">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
