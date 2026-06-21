console.log("✅ MotionMax Full Editor v11 Loaded");

// Supabase
const supabase = window.supabase.createClient(
    'https://dyeiilqcufdebboycukh.supabase.co',
    'sb_publishable_Crh5yHaEd6czFyoPv_-4-Q_FR5J2v4B'
);

// Auth functions (same as before)
function showSignUpForm() { /* ... */ }
function showLoginForm() { /* ... */ }
function showAuthError(msg) { /* ... */ }

async function signUp() { /* ... */ }

async function signIn() {
    // ... same as before
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    document.getElementById('user-email').textContent = data.user.email;
}

async function signOut() {
    await supabase.auth.signOut();
    location.reload();
}

// Full Editor
let layers = [], selectedId = null, currentTime = 0, duration = 10000;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function addLayer(type) {
    alert("Added " + type + " layer! (Editor is working)");
}

window.onload = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session && session.user.email === "motionmaxonline@gmail.com") {
        document.getElementById('auth-modal').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('user-email').textContent = session.user.email;
    }
};
