import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const onboardingSteps = [
  {
    title: "No More Guessing Sizes",
    description: "Our AI technology analyzes your measurements to ensure the perfect fit every time.",
    image: "PLACEHOLDER",
    imageRequest: "fashion AI analyzing body measurements, minimalist clean design"
  },
  {
    title: "Tailored Before Delivery",
    description: "Every item is custom altered to your exact measurements before it leaves our facility.",
    image: "PLACEHOLDER",
    imageRequest: "tailor altering clothes in a modern studio, professional setting"
  },
  {
    title: "Shop with Confidence",
    description: "Say goodbye to returns. Get clothes that fit perfectly the first time, every time.",
    image: "PLACEHOLDER",
    imageRequest: "happy person receiving package with perfect fitting clothes, lifestyle"
  }
];

const OnboardingScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  
  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const completeOnboarding = () => {
    onComplete();
    navigate('/');
  };
  
  const goToLogin = () => {
    onComplete();
    navigate('/login');
  };
  
  const step = onboardingSteps[currentStep];
  
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Skip button */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={completeOnboarding}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Skip
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Progress indicators */}
          <div className="flex justify-center mb-8 space-x-2">
            {onboardingSteps.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? 'w-10 bg-primary-600' 
                    : 'w-6 bg-gray-200'
                }`}
              />
            ))}
          </div>
          
          {/* Image */}
          <div className="mb-8 h-64 rounded-xl overflow-hidden animate-fade-in">
            <img src="https://images.unsplash.com/photo-1596993100471-c3905dafa78e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw2fHxoYXBweSUyMGZhc2hpb24lMjBtb2RlbCUyMHdlYXJpbmclMjBwZXJmZWN0JTIwZml0dGluZyUyMHN0eWxpc2glMjBjbG90aGVzJTJDJTIwbGlmZXN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzQyOTc5MDc2fDA&ixlib=rb-4.0.3&q=80&w=1080" 
              src={step.image} 
              alt={step.title} 
              data-image-request={step.imageRequest}
              className="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-app">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <CategoryCard
              title="Women"
              imageUrl="PLACEHOLDER"
              imageRequest="elegant women's fashion collection, minimal photography"
              link="/women"
            />
            <CategoryCard
              title="Men"
              imageUrl="PLACEHOLDER"
              imageRequest="stylish men's fashion collection, minimal photography"
              link="/men"
            />
            <CategoryCard
              title="Kids"
              imageUrl="PLACEHOLDER"
              imageRequest="adorable kids fashion collection, bright and playful"
              link="/kids"
            />
            <CategoryCard
              title="Trending"
              imageUrl="PLACEHOLDER"
              imageRequest="trending fashion pieces for 2023, lifestyle photography"
              link="/trending"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Products */}
      <FeaturedSection />
      
      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-app">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">What Our Customers Say</h2>
          <p className="text-gray-600 text-center mb-12">Real people, real perfect fits</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwZGl2ZXJzZSUyMHdvbWFuJTIwaW4lMjBoZXIlMjAzMHMlMjBzbWlsaW5nfGVufDB8fHx8MTc0Mjk3OTA3Nnww&ixlib=rb-4.0.3&q=80&w=1080" 
                     
                    alt="Customer" 
                    data-image-request="professional headshot of diverse woman in her 30s smiling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I've always struggled with finding clothes that fit my unique body shape. Fyne has completely changed my shopping experience. Every piece fits perfectly!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwZGl2ZXJzZSUyMG1hbiUyMGluJTIwaGlzJTIwNDBzJTIwc21pbGluZ3xlbnwwfHx8fDE3NDI5NzkwNzd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                     
                    alt="Customer" 
                    data-image-request="professional headshot of diverse man in his 40s smiling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Michael Chen</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone who's tall with long arms, I've always had issues with sleeve length. The tailoring service is amazing - everything fits like it was made for me."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwZGl2ZXJzZSUyMHdvbWFuJTIwaW4lMjBoZXIlMjAyMHMlMjBzbWlsaW5nfGVufDB8fHx8MTc0Mjk3OTA3N3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                     
                    alt="Customer" 
                    data-image-request="professional headshot of diverse woman in her 20s smiling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Priya Patel</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The sizing AI is spot on! I've ordered multiple dresses and they all fit perfectly. Plus, knowing they're altered before shipping gives me so much confidence."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container-app text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for clothes that actually fit?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who never worry about returns or ill-fitting clothes again.
          </p>
          <Link to="/signup" className="btn-primary text-center inline-block cursor-pointer px-8 py-3">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;