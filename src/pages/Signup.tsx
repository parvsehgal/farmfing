import Layout from "../components/layout/Layout";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
              Create Your Farmfing Account
            </h1>
            <SignupForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
