function login() {
  const role = document.getElementById('userRole').value;
  const mobile = document.getElementById('mobile').value;

  if (!role || !mobile) {
    alert('Please select a role and enter your mobile number.');
    return;
  }

  // Example logic for role-based redirection
  if (role === 'customer') {
    window.location.href = 'customer-dashboard.html';
  } else if (role === 'manager') {
    window.location.href = 'manager-dashboard.html';
  } else if (role === 'admin') {
    window.location.href = 'admin-dashboard.html';
  }
}
