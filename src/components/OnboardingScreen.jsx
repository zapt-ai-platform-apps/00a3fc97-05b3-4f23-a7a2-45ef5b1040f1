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
            <img 
              src={step.image} 
              alt={step.title} 
              data-image-request={step.imageRequest}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text content */}
          <div className="text-center animate-slide-up">
            <h1 className="text-2xl font-bold mb-4">{step.title}</h1>
            <p className="text-gray-600 mb-8">{step.description}</p>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            <button 
              onClick={prevStep} 
              className={`text-gray-500 hover:text-gray-700 font-medium cursor-pointer ${currentStep === 0 ? 'invisible' : ''}`}
            >
              Back
            </button>
            
            <button 
              onClick={nextStep}
              className="btn-primary cursor-pointer"
            >
              {currentStep < onboardingSteps.length - 1 ? 'Next' : 'Get Started'}
            </button>
          </div>
          
          {/* Sign in link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button 
                onClick={goToLogin}
                className="text-primary-600 hover:text-primary-700 font-medium cursor-pointer"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;