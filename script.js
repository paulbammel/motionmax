// ==================== MOTIONMAX - CLEAN SINGLE FILE ====================
console.log("✅ CLEAN SINGLE FILE - v7");

const SUPABASE_URL = 'https://dyeiilqcufdebboycukh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Crh5yHaEd6czFyoPv_-4-Q_FR5J2v4B';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) showAuthError(error.message);
    else {
        alert("✅ Account created!\n\nCheck motionmaxonline@gmail.com for confirmation email.");
        showLoginForm();
    }
}

async function signIn() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) return showAuthError("Email and password required");

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return showAuthError(error.message);

    if (data.user.email !== "motionmaxonline@gmail.com") {
        await supabase.auth.signOut();
        return showAuthError("Access restricted for now.");
    }

    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    document.getElementById('user-email').textContent = data.user.email;
}

window.onload = async () => {
    console.log("✅ Page loaded");
    const { data: { session } } = await supabase.auth.getSession();
    if (session && session.user.email === "motionmaxonline@gmail.com") {
        document.getElementById('auth-modal').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        document.getElementById('user-email').textContent = session.user.email;
    }
};
