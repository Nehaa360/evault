import { auth, firestore, createUserWithEmailAndPassword } from './firebase-auth.js';

// Get the registration form element
const registrationForm = document.getElementById('registrationForm');

// Define the function to register a user
let registerUser = evt => {
    evt.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const caseNo = document.getElementById('caseNo').value;
    const role = document.getElementById('role').value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User registered successfully
            const user = userCredential.user;
            console.log('User registered:', user);
            window.location.href = 'login.html';
            // Store additional user data in Firebase Firestore
            firestore.collection('users').add({
                userId: user.uid, // Store user ID as a separate field
                email: email,
                caseNo: caseNo,
                role: role
            })
                .then((docRef) => {
                    console.log('User data stored successfully with ID:', docRef.id);
                    window.location.href = 'login.html'; // Redirect to login page after successful registration
                })
                .catch((error) => {
                    console.error('Error storing user data:', error);
                    // Handle error (e.g., display error message to the user)
                });
        })
        .catch((error) => {
            // Handle registration errors
            console.error('Registration error:', error);
            // You can display an error message to the user if registration fails
        });


}