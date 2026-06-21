// v12 - MINIMAL WORKING VERSION
console.log("✅ v12 MINIMAL WORKING VERSION LOADED");

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
    alert("Sign Up button is working!");
    showLoginForm();
}

function signIn() {
    alert("Sign In successful! (You would enter the editor here)");
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

window.onload = () => console.log("✅ Page ready");
