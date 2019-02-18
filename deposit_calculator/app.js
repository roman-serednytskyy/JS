// Listen for submit
document.getElementById('deposit-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1000);

  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const termDeposit = document.getElementById('months');
  const monthlyIncome = document.getElementById('monthly-income');
  const totalIncome = document.getElementById('total-income');
  const totalAmount = document.getElementById('total-interest');

	// Compute
  const calculatedAmount = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100;
  const calculatedMonths = parseFloat(termDeposit.value);
  const calculatedMonthlyIncome = (calculatedAmount*calculatedInterest/12);

  if(isFinite(calculatedMonthlyIncome)) {
    monthlyIncome.value = calculatedMonthlyIncome.toFixed(2);
    totalIncome.value = (calculatedMonthlyIncome * calculatedMonths).toFixed(2);
    totalAmount.value = ((calculatedMonthlyIncome * calculatedMonths)+calculatedAmount).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }
}

// Show Error
function showError(error){
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Hide loader
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}
