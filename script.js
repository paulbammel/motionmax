// ==================== MOTIONMAX v8 - FORCE NEW VERSION ====================
console.log("✅ v8 CLEAN BUILD - No Supabase Duplicates");

function showSignUpForm() {
    console.log("✅ Create one clicked - v8");
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function signUp() {
    alert("✅ Sign Up button is working (v8)");
    showLoginForm();
}

function signIn() {
    alert("✅ Sign In successful (v8) - Loading editor...");
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

window.onload = () => console.log("✅ v8 Page loaded");
