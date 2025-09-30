document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const devName = document.getElementById('devName').value.trim();

  if (devName === '') {
    alert('المرجو إدخال اسمك كمطور');
    return;
  }

  // حفظ اسم المطور في localStorage
  localStorage.setItem('dev_name', devName);

  // تحويل إلى لوحة التحكم
  window.location.href = 'dashboard.html';
});
