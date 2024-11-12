document.getElementById('registerForm').addEventListener('submit', function(event) {
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;
    const reason = document.getElementById('reason').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      event.preventDefault();
    }
  
    if (!reason) {
      alert("Please select a reason for your visit.");
      event.preventDefault();
    }
  });
  