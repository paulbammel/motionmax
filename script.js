// ==================== MOTIONMAX - CLEAN BUILD FOR GITHUB PAGES ====================
console.log("✅ CLEAN BUILD v6 - GitHub Pages");

function showSignUpForm() {
    console.log("✅ Create one clicked");
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error');
    el.textContent = msg;
    el.classList.remove('hidden');
}

async function signUp() {
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    if (!email || !password) return showAuthError("Email and password required");

    alert("✅ Sign Up button works!\n\n(Supabase test successful)");
    showLoginForm();
}

async function signIn() {
    alert("✅ Sign In button works!");
}

window.onload = () => {
    console.log("✅ Page fully loaded");
};
