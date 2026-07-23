// Hexa Studio Prototype — shared behavior for the Login -> Dashboard click-through.
// This simulates a real login for usability testing only: one fixed test credential,
// no real backend, no real account data. Never wire this pattern to anything real.

const TEST_CREDENTIALS = {
  userId: 'testuser',
  password: 'Test1234',
};

function initPasswordToggle(inputId, toggleBtnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(toggleBtnId);
  if (!input || !btn) return;

  btn.addEventListener('click', () => {
    const showing = input.getAttribute('type') === 'text';
    input.setAttribute('type', showing ? 'password' : 'text');
    btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    btn.querySelector('.eye-open').classList.toggle('hidden', !showing);
    btn.querySelector('.eye-closed').classList.toggle('hidden', showing);
  });
}

function initLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;

  const userIdField = document.getElementById('field-userid');
  const passwordField = document.getElementById('field-password');
  const userIdInput = document.getElementById('input-userid');
  const passwordInput = document.getElementById('input-password');
  const submitBtn = document.getElementById('login-submit');

  function clearError() {
    passwordField.classList.remove('has-error');
    userIdField.classList.remove('has-error');
  }

  userIdInput.addEventListener('input', clearError);
  passwordInput.addEventListener('input', clearError);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError();

    const enteredId = userIdInput.value.trim();
    const enteredPw = passwordInput.value;

    if (enteredId === TEST_CREDENTIALS.userId && enteredPw === TEST_CREDENTIALS.password) {
      trackEvent('login_success');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Logging in...';
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 350);
    } else {
      trackEvent('login_error');
      passwordField.classList.add('has-error');
      passwordInput.focus();
    }
  });
}

// Microsoft Clarity fires its own events automatically once the snippet loads
// (see the <script> tag in each page's <head>). This helper just tags a couple
// of extra named events (login_success / login_error) so they're easy to find
// in Clarity's dashboard, without needing anything beyond the base snippet.
function trackEvent(name) {
  if (typeof clarity === 'function') {
    clarity('event', name);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initPasswordToggle('input-password', 'toggle-password');
  initLoginForm();
});
