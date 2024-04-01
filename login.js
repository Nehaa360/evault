// Import Firebase authentication and Firestore modules
import { auth, firestore, signInWithEmailAndPassword } from './firebase-auth.js';

// Function to handle user login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const caseNoInput = document.getElementById('caseNo');

            if (emailInput && passwordInput) {
                const email = emailInput.value;
                const password = passwordInput.value;
                const caseNo = caseNoInput ? caseNoInput.value : '';

                // Sign in user with email and password
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in successfully
                        const user = userCredential.user;
                        // Retrieve user role from Firestore
                        const userRef = firestore.collection('users').doc(user.uid);
                        userRef.get()
                            .then((doc) => {
                                if (doc.exists) {
                                    const userData = doc.data();
                                    const role = userData.role;
                                    // Redirect based on user role
                                    switch (role) {
                                        case 'lawyer':
                                            window.location.href = 'lawyer_dashboard.html';
                                            break;
                                        case 'judge':
                                            window.location.href = 'judge_dashboard.html';
                                            break;
                                        case 'client':
                                            window.location.href = 'client_dashboard.html';
                                            break;
                                        case 'stakeholder':
                                            window.location.href = 'stakeholder_dashboard.html';
                                            break;
                                        default:
                                            console.error('Unknown role:', role);
                                            break;
                                    }
                                } else {
                                    console.error('User document not found');
                                }
                            })
                            .catch((error) => {
                                console.error('Error getting user document:', error);
                            });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error('Authentication error:', errorCode, errorMessage);
                    });
            } else {
                console.error('Email or password input element not found');
            }
        });
    } else {
        console.error('Login form element not found');
    }
});
