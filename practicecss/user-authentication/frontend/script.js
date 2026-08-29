const API_URL = "http://localhost:8080/api/auth";


const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;


            if (password !== confirmPassword) {

                alert("Passwords do not match!");

                return;
            }


            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            const user = {

                name: name,

                email: email,

                phone: phone,

                password: password

            };


            try {

                const response =
                    await fetch(
                        `${API_URL}/register`,
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify(user)

                        }
                    );


                const data =
                    await response.json();


                if (response.ok) {

                    alert(
                        "Registration successful!"
                    );

                    registerForm.reset();

                    window.location.href =
                        "index.html";

                } else {

                    alert(
                        data.message ||
                        "Registration failed."
                    );

                }

            } catch (error) {

                console.error(error);

                alert(
                    "Unable to connect to the server."
                );

            }

        }
    );

}


const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const loginData = {

                email: email,

                password: password

            };


            try {

                const response =
                    await fetch(
                        `${API_URL}/login`,
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(loginData)

                        }
                    );


                const data =
                    await response.json();


                if (response.ok) {

                    alert(
                        "Login successful!"
                    );

                    loginForm.reset();

                } else {

                    alert(
                        data.message ||
                        "Invalid email or password."
                    );

                }

            } catch (error) {

                console.error(error);

                alert(
                    "Unable to connect to the server."
                );

            }

        }
    );

}