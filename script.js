function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Basic Operations
  function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('basic-result').textContent = `Result: ${num1 + num2}`;
  }
  
  function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('basic-result').textContent = `Result: ${num1 - num2}`;
  }
  
  function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('basic-result').textContent = `Result: ${num1 * num2}`;
  }
  
  function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
      document.getElementById('basic-result').textContent = 'Error: Division by zero';
    } else {
      document.getElementById('basic-result').textContent = `Result: ${num1 / num2}`;
    }
  }
  
  // Currency Conversion
  function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
  
    const conversionRates = {
      USD: { INR: 83.0, EUR: 0.92 },
      INR: { USD: 0.012, EUR: 0.011 },
      EUR: { USD: 1.09, INR: 90.0 }
    };
  
    if (fromCurrency in conversionRates && toCurrency in conversionRates[fromCurrency]) {
      const result = amount * conversionRates[fromCurrency][toCurrency];
      document.getElementById('currency-result').textContent = `Converted Amount: ${result.toFixed(2)}`;
    } else {
      document.getElementById('currency-result').textContent = 'Error: Invalid currency or conversion rate unavailable';
    }
  }
  
  // BMI Calculator
  function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (weight <= 0 || height <= 0) {
      document.getElementById('bmi-result').textContent = 'Error: Weight and height must be positive values.';
    } else {
      const bmi = (weight / (height * height)).toFixed(2);
      let category;
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 24.9) category = 'Normal';
      else if (bmi < 29.9) category = 'Overweight';
      else category = 'Obese';
      document.getElementById('bmi-result').textContent = `BMI: ${bmi}, Category: ${category}`;
    }
  }
  
  // Age Calculator
  function calculateAge() {
    const birthYear = parseInt(document.getElementById('birth-year').value);
    const currentYear = new Date().getFullYear();
    if (birthYear > currentYear) {
      document.getElementById('age-result').textContent = 'Error: Birth year cannot be in the future.';
    } else {
      document.getElementById('age-result').textContent = `Your age is: ${currentYear - birthYear} years`;
    }
  }
  
  // EMI Calculator
  function calculateEMI() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const tenure = parseInt(document.getElementById('tenure').value);
    if (principal <= 0 || rate <= 0 || tenure <= 0) {
      document.getElementById('emi-result').textContent = 'Error: Principal, rate, and tenure must be positive values.';
    } else {
      const monthlyRate = rate / (12 * 100);
      const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
      const totalInterest = (emi * tenure) - principal;
      document.getElementById('emi-result').textContent = `EMI: ${emi.toFixed(2)}, Total Interest: ${totalInterest.toFixed(2)}`;
    }
  }
  
  // Area Calculator
  function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    if (length <= 0 || width <= 0) {
      document.getElementById('area-result').textContent = 'Error: Length and width must be positive values.';
    } else {
      document.getElementById('area-result').textContent = `Area: ${(length * width).toFixed(2)}`;
    }
  }
  
  // Volume Calculator
  function calculateVolume() {
    const length = parseFloat(document.getElementById('v-length').value);
    const width = parseFloat(document.getElementById('v-width').value);
    const height = parseFloat(document.getElementById('v-height').value);
    if (length <= 0 || width <= 0 || height <= 0) {
      document.getElementById('volume-result').textContent = 'Error: Length, width, and height must be positive values.';
    } else {
      document.getElementById('volume-result').textContent = `Volume: ${(length * width * height).toFixed(2)}`;
    }
  }
  
  // Scientific Calculator
  function calculateSquareRoot() {
    const num = parseFloat(prompt('Enter number:'));
    if (num < 0) {
      document.getElementById('scientific-result').textContent = 'Error: Cannot calculate square root of a negative number.';
    } else {
      document.getElementById('scientific-result').textContent = `Square root of ${num} = ${Math.sqrt(num).toFixed(2)}`;
    }
  }
  
  function calculatePower() {
    const base = parseFloat(prompt('Enter base:'));
    const exponent = parseFloat(prompt('Enter exponent:'));
    document.getElementById('scientific-result').textContent = `${base}^${exponent} = ${Math.pow(base, exponent).toFixed(2)}`;
  }
  
  function calculateLog() {
    const num = parseFloat(prompt('Enter number:'));
    if (num <= 0) {
      document.getElementById('scientific-result').textContent = 'Error: Logarithm is undefined for non-positive numbers.';
    } else {
      document.getElementById('scientific-result').textContent = `log10(${num}) = ${Math.log10(num).toFixed(2)}`;
    }
  }