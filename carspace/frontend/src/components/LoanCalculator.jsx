import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanData, setLoanData] = useState({
    totalAmount: '',
    downPayment: '',
    amortizationPeriod: '',
    interest: ''
  });

  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanData.totalAmount) - parseFloat(loanData.downPayment);
    const monthlyInterest = parseFloat(loanData.interest) / 100 / 12;
    const numberOfPayments = parseFloat(loanData.amortizationPeriod) * 12;

    const monthly = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
                   (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    setMonthlyPayment(monthly);
  };

  const handleReset = () => {
    setLoanData({
      totalAmount: '',
      downPayment: '',
      amortizationPeriod: '',
      interest: ''
    });
    setMonthlyPayment(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="w-1 h-8 bg-red-600 mr-2"></span>
          Loan Calculator
        </h2>

        {/* Calculator Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Total Amount */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Total Amount
            </label>
            <input
              type="number"
              name="totalAmount"
              value={loanData.totalAmount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Enter total amount"
            />
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Down Payment
            </label>
            <input
              type="number"
              name="downPayment"
              value={loanData.downPayment}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Enter down payment"
            />
          </div>

          {/* Amortization Period */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Amortization period
            </label>
            <input
              type="number"
              name="amortizationPeriod"
              value={loanData.amortizationPeriod}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Enter period in years"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Interest
            </label>
            <input
              type="number"
              name="interest"
              value={loanData.interest}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              placeholder="Enter interest rate"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={calculateLoan}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 text-red-600 hover:text-red-700 transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Results */}
        {monthlyPayment && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Monthly Payment:</h3>
            <p className="text-2xl text-red-600">
              ${monthlyPayment.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;