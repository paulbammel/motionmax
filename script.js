// ==================== MOTIONMAX - WORKING VERSION (NO DUPLICATES) ====================
console.log("✅ FINAL CLEAN VERSION - NO SUPABASE DUPLICATES");

function showSignUpForm() {
    console.log("✅ Create one clicked");
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function signUp() {
    alert("✅ Sign Up works! (We'll add real Supabase later)");
    showLoginForm();
}

function signIn() {
    alert("✅ Sign In successful! Loading editor...");
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

window.onload = () => {
    console.log("✅ Page loaded successfully");
};
