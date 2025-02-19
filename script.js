document.addEventListener('DOMContentLoaded', () => {
    //signup
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const phone = document.getElementById('phone');
    const gender = document.getElementById('gender');
    const signupEmail = document.getElementById('signup-email');
    const signupPasswd = document.getElementById('signup-password');
    const signupForm = document.getElementById('signup-form');

    //signin
    const signinEmail = document.getElementById('signin-email');
    const signinPasswd = document.getElementById('signin-password');
    const signinForm = document.getElementById('signin-form');
    const signinButton = document.getElementById('signin-button');

    //index
    const viewHostel = document.getElementById('viewHostel');
    const navSignIn = document.getElementById('navSignIn');
    const navSignUp = document.getElementById('navSignUp');
    const navSignOut = document.getElementById('navSignOut');
    const cta= document.getElementById('cta');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let signedin = JSON.parse(localStorage.getItem('signedin')) || 0;
    console.log('Signed in:', signedin);

    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
    console.log('Current user:', currentUser);


    const signUp = (event) => {
        event.preventDefault();

        users.push({ email: signupEmail.value, password: signupPasswd.value, name: name.value, age: age.value, phone: phone.value, gender: gender.value });
        localStorage.setItem('users', JSON.stringify(users));

        signedin = 1;
        localStorage.setItem('signedin', JSON.stringify(signedin));
        currentUser = { name: users[users.length - 1].name, gender: users[users.length - 1].gender };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        
        window.location.href = 'index.html';
    }

    const signIn = (event) => {
        event.preventDefault();

        const user = users.find((user) => {
            return user.email === signinEmail.value && user.password === signinPasswd.value;
        });

        const emailError = users.some((user) => {
            return user.email === signinEmail.value;
        });

        const passwdError = users.some((user) => {
            return user.password === signinPasswd.value;
        });

        if (user) {
            currentUser = { name: user.name, gender: user.gender };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signedin = 1;
            localStorage.setItem('signedin', JSON.stringify(signedin));

            
            window.location.href = 'index.html';
        } else {
            if (emailError == 0 && passwdError == 0) {
                alert('USER NOT FOUND! Create a new account');
            }
            if (emailError == 1 && passwdError == 0) {
                alert('Wrong Password! Try Again...');
            }
        }
    }

    const buttonFun = (event) => {
        event.preventDefault();
        console.log('Signed in:', signedin);
        console.log('Current user:', currentUser);

        if (signedin == 1) {
            if (currentUser.gender == 'male') {
                window.location.href = 'boys.html';
            } else {
                window.location.href = 'girls.html';
            }
        } else {
            window.location.href = 'signin.html';
        }
    }

    const signOut =(event) =>{
        event.preventDefault();

        currentUser =[];
        localStorage.setItem('currentUser',JSON.stringify(currentUser));
        console.log(currentUser)
        signedin=0;
        console.log(signedin)
        localStorage.setItem('signedin',JSON.stringify(signedin));
        window.location.href='index.html';
    }

    if (signupForm) {
        signupForm.addEventListener('submit', signUp);
    }

    if (signinForm) {
        signinForm.addEventListener('submit', signIn);
    }

    

    if (viewHostel) {
        viewHostel.addEventListener('click', buttonFun);
    }

    if(signedin==1){
        navSignIn.style.display='none';
        navSignUp.style.display='none';
        navSignOut.style.display='block';
        cta.style.display='none';
    }
    else{
        navSignIn.style.display='block';
        navSignUp.style.display='block';
        navSignOut.style.display='none';
        cta.style.display='block';
    }

    navSignOut.addEventListener('click',signOut);
});
