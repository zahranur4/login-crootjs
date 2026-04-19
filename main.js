import { postJSON } from "https://cdn.jsdelivr.net/gh/crootjs/api@0.0.1/api.js";
import { setInner } from "https://cdn.jsdelivr.net/gh/crootjs/element@0.0.1/element.js";

window.handleCredentialResponse = (response) => {
    console.log("ID Token dari Google: " + response.credential);

    const backendUrl = "https://your-app.alwaysdata.net/login"; 
    
    postJSON(backendUrl, "Authorization", "token-bebas", response, (result) => {
        console.log("Respon dari Backend:", result);
        setInner("hasil", `Status: ${result.status} - Selamat datang!`);
    });
};

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "875902107302-7k4aljcte5iior4f1t1euqpltisq8ni5.apps.googleusercontent.com",
        callback: window.handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "250" }
    );
};