import { postJSON } from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/api.js";

window.handleCredentialResponse = (response) => {
    console.log("Token diterima dari Google");

    const target_url = "https://login-crootjs-go.vercel.app/api";
    const data_dikirim = { token: response.credential };

    const loginForm = document.getElementById('login-form');
    const successState = document.getElementById('success-state');
    const backendMsg = document.getElementById('backend-message');

    postJSON(target_url, data_dikirim, (result) => {
        console.log("Berhasil dapat respon backend:", result);
        if (loginForm) loginForm.style.display = 'none';
        if (successState) successState.style.display = 'flex';
        if (backendMsg) {
            backendMsg.innerText = result?.message || "Berhasil masuk ke sistem!";
        }
    });
};