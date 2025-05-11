import Link from 'next/link'; // Import Link component

export default function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <header>
        <title>Chatbot for Fitness</title>
        <meta name="description" content="A chatbot to help you with your fitness routines." />
        <link rel="icon" href="/favicon.ico" />
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Transform Your Fitness with Our Chatbot</h1>
        <p className="mt-4 text-xl">
          Personalized fitness routines and expert advice, all at your fingertips.
        </p>

        {/* Use Link instead of router.push */}
        <Link href="/login">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg text-lg">
            Get Started
          </button>
        </Link>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 md:px-24 text-center bg-white">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <p className="mt-4 text-xl text-gray-600">
          Our chatbot helps you stay on track with your fitness goals. Whether you want to lose weight, build muscle, or improve your overall health, we've got you covered.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <img src="/images/chatbot-icon.svg" alt="Chatbot Icon" className="h-20 w-20 mb-4" />
            <h3 className="text-xl font-semibold">Personalized Routines</h3>
            <p className="mt-2 text-gray-500">
              Get workout plans tailored to your goals, whether you're a beginner or an expert.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/goal-icon.svg" alt="Goal Icon" className="h-20 w-20 mb-4" />
            <h3 className="text-xl font-semibold">Track Your Progress</h3>
            <p className="mt-2 text-gray-500">
              Keep track of your workouts and see your improvements over time.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/motivation-icon.svg" alt="Motivation Icon" className="h-20 w-20 mb-4" />
            <h3 className="text-xl font-semibold">Stay Motivated</h3>
            <p className="mt-2 text-gray-500">
              Receive daily motivation and reminders to stay on track with your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Our Chatbot?</h2>
        <div className="mt-8 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-16">
          <div className="flex items-center space-x-6">
            <img src="/images/benefit-1.svg" alt="Benefit 1" className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-semibold">Anytime, Anywhere</h3>
              <p className="text-gray-600 mt-2">
                Access your fitness plans and advice whenever you need it, from anywhere.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src="/images/benefit-2.svg" alt="Benefit 2" className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-semibold">No Equipment Required</h3>
              <p className="text-gray-600 mt-2">
                Start working out right at home with bodyweight exercises, no gym equipment needed.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src="/images/benefit-3.svg" alt="Benefit 3" className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-semibold">Customizable Plans</h3>
              <p className="text-gray-600 mt-2">
                The chatbot adapts your workouts based on progress, preferences, and goals.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src="/images/benefit-4.svg" alt="Benefit 4" className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="text-gray-600 mt-2">
                Receive expert advice on proper form, nutrition, and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold">Ready to Start Your Fitness Journey?</h2>
        <p className="mt-4 text-xl">Sign up today and let our chatbot help you achieve your fitness goals.</p>
        
        {/* Use Link here for navigation */}
        <Link href="/login">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg text-lg">
            Get Started
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2025 FitnessBot. All rights reserved.</p>
      </footer>
    </div>
  );
}
