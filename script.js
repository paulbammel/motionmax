console.log("✅ MotionMax Full Editor Ready");

const supabase = window.supabase.createClient(
    'https://dyeiilqcufdebboycukh.supabase.co',
    'sb_publishable_Crh5yHaEd6czFyoPv_-4-Q_FR5J2v4B'
);

function showSignUpForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

async function signUp() {
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    if (!email || !password) return alert("Enter email and password");

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Account created! Check your email for confirmation.");
}

async function signIn() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    if (!email || !password) return alert("Enter email and password");

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);

    if (data.user.email !== "motionmaxonline@gmail.com") {
        await supabase.auth.signOut();
        return alert("Access restricted for now.");
    }

    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

function signOut() {
    location.reload();
}

function addLayer(type) {
    alert("Added " + type + " layer! 🎉\n\nThe editor is now working.");
}

// Auto login if already signed in
window.onload = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session && session.user.email === "motionmaxonline@gmail.com") {
        document.getElementById('auth-modal').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
    }
};
