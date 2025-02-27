import React, { useState, useRef, useEffect } from 'react';
import heroImage from '../assets/Hero.png';

const Login = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(20);
  const [timerInterval, setTimerInterval] = useState(null);
  
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (currentPage === 'otp' && otpRefs[0].current) {
      otpRefs[0].current.focus();
    }
  }, [currentPage]);

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobileNumber && mobileNumber.length === 10) {
      setCurrentPage('otp');
      startOtpTimer();
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && mobileNumber && mobileNumber.length === 10) {
      setCurrentPage('otp');
      startOtpTimer();
    }
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    const otpCode = otpValues.join('');
    if (otpCode.length === 4) {
      alert(`OTP verification successful! OTP: ${otpCode}`);

      setCurrentPage('login');
      setOtpValues(['', '', '', '']);
      setMobileNumber('');
      setName('');
      setEmail('');
    }
  };

  const startOtpTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    

    setOtpValues(['', '', '', '']);
    
    let time = 20;
    setOtpTimer(time);
    
    const interval = setInterval(() => {
      time--;
      setOtpTimer(time);
      if (time <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    
    setTimerInterval(interval);
  };

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      
      if (value && index < otpRefs.length - 1) {
        otpRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (otpValues[index]) {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = '';
        setOtpValues(newOtpValues);
      } else if (index > 0) {
        otpRefs[index - 1].current.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      otpRefs[index - 1].current.focus();
    } else if (e.key === 'ArrowRight' && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.substring(0, 4).split('');
      const newOtpValues = [...otpValues];
      
      for (let i = 0; i < Math.min(digits.length, otpRefs.length); i++) {
        newOtpValues[i] = digits[i];
      }
      
      setOtpValues(newOtpValues);
      
      const nextEmptyIndex = newOtpValues.findIndex(val => val === '');
      if (nextEmptyIndex !== -1 && nextEmptyIndex < otpRefs.length) {
        otpRefs[nextEmptyIndex].current.focus();
      } else if (digits.length >= 4) {
        otpRefs[3].current.focus();
      }
    }
  };

  // Render the login page
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
          <div className="w-1/2 bg-gray-800 overflow-hidden">
            {/* Updated image source */}
            <img 
              src={heroImage} 
              alt="Luxury Car Hero Image" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-blue-500">Car</span>
                <span className="text-red-500">space</span>
              </div>
              <button type="button" className="text-red-500 text-xl">&times;</button>
            </div>
            
            <div className="flex mb-6">
              <button 
                type="button"
                className="w-1/2 py-2 px-4 bg-red-500 text-white rounded-md mr-1"
              >
                Login
              </button>
              <button A
                type="button"
                onClick={() => setCurrentPage('signup')} 
                className="w-1/2 py-2 px-4 bg-gray-200 text-gray-700 rounded-md ml-1"
              >
                Sign up
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="flex flex-col mt-4">
              <label htmlFor="login-mobile" className="mb-2 text-gray-700">Enter your Mobile Number</label>
              <div className="mb-4 flex">
                <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 mr-1">
                  <span>+91</span>
                  <span className="ml-1">▼</span>
                </div>
                <input
                  id="login-mobile"
                  className="flex-1 border rounded-md px-3 py-2 bg-gray-100"
                  type="tel"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  value={mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setMobileNumber(value);
                    }
                  }}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
                disabled={!mobileNumber || mobileNumber.length < 10}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  // Render the signup page
  if (currentPage === 'signup') {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
          <div className="w-1/2 bg-gray-800 overflow-hidden">
            {/* Updated image source */}
            <img 
              src={heroImage} 
              alt="Luxury Car Hero Image" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-blue-500">Car</span>
                <span className="text-red-500">space</span>
              </div>
              <button type="button" className="text-red-500 text-xl">&times;</button>
            </div>
            
            <div className="flex mb-6">
              <button 
                type="button"
                onClick={() => setCurrentPage('login')} 
                className="w-1/2 py-2 px-4 bg-gray-200 text-gray-700 rounded-md mr-1"
              >
                Login
              </button>
              <button 
                type="button"
                className="w-1/2 py-2 px-4 bg-red-500 text-white rounded-md ml-1"
              >
                Sign up
              </button>
            </div>
            
            <form onSubmit={handleSignup} className="flex flex-col mt-4">
              <label htmlFor="signup-name" className="mb-2 text-gray-700">Enter your Name</label>
              <input
                id="signup-name"
                className="mb-4 border rounded-md px-3 py-2 bg-gray-100"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              
              <label htmlFor="signup-email" className="mb-2 text-gray-700">Enter your Email ID</label>
              <input
                id="signup-email"
                className="mb-4 border rounded-md px-3 py-2 bg-gray-100"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ID"
                required
              />
              
              <label htmlFor="signup-mobile" className="mb-2 text-gray-700">Enter your Mobile Number</label>
              <div className="mb-4 flex">
                <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100 mr-1">
                  <span>+91</span>
                  <span className="ml-1">▼</span>
                </div>
                <input
                  id="signup-mobile"
                  className="flex-1 border rounded-md px-3 py-2 bg-gray-100"
                  type="tel"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  value={mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setMobileNumber(value);
                    }
                  }}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
                disabled={!name || !email || !mobileNumber || mobileNumber.length < 10}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  // Render the OTP page
  if (currentPage === 'otp') {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
          <div className="w-1/2 bg-gray-800 overflow-hidden">
            {/* Updated image source */}
            <img 
              src={heroImage} 
              alt="Luxury Car Hero Image" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-blue-500">Car</span>
                <span className="text-red-500">space</span>
              </div>
              <button 
                type="button" 
                onClick={() => setCurrentPage('login')}
                className="text-red-500 text-xl"
              >
                &times;
              </button>
            </div>
            
            <div className="my-6">
              <h2 className="text-2xl font-bold mb-2">Verify your Mobile</h2>
              <p className="text-gray-600">We have sent a 4 Digit OTP on +91 {mobileNumber}</p>
            </div>
            
            <form onSubmit={handleOtpVerification} className="flex flex-col">
              <div className="flex justify-between mb-6">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    ref={otpRefs[index]}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : null}
                    className="w-16 h-16 text-center text-xl font-semibold border-2 rounded-md bg-gray-100 focus:border-blue-500 focus:outline-none"
                    autoComplete="off"
                    aria-label={`OTP digit ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="mb-6 flex justify-between items-center">
                <div className="text-gray-600">
                  <span className="font-bold">00:{otpTimer < 10 ? `0${otpTimer}` : otpTimer}</span>
                </div>
                <button 
                  type="button" 
                  className={`text-blue-500 ${otpTimer > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => {
                    if (otpTimer <= 0) {
                      startOtpTimer();
                    }
                  }}
                  disabled={otpTimer > 0}
                >
                  Didn't receive OTP?
                </button>
              </div>
              
              <button 
                type="submit" 
                className={`bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition ${otpValues.some(val => val === '') ? 'opacity-70' : ''}`}
                disabled={otpValues.some(val => val === '')}
              >
                Verify & Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export default Login;