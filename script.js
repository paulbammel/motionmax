// v9 - MINIMAL TEST
console.log("✅ v9 MINIMAL TEST LOADED");

function showSignUpForm() {
    console.log("✅ Create one clicked - v9");
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function signUp() {
    alert("Sign Up button works - v9");
}

function signIn() {
    alert("Sign In works - v9");
}

window.onload = () => console.log("✅ v9 Page ready");
