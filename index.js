import { PostApi } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.1/croot.js";

window.handleCredentialResponse = (response) => {
    console.log("Token diterima dari Google");

    const target_url = "https://login-crootjs-go.vercel.app/api";
    
    const data_dikirim = {
        token: response.credential
    };

    // Panggil API Backend Vercel
    PostApi(target_url, data_dikirim, (result) => {
        console.log("Berhasil dapat respon:", result);
        
        // Pastikan result.message ada, kalau tidak munculkan result-nya saja
        if (result && result.message) {
            alert("Respon dari Backend: " + result.message);
        } else {
            alert("Berhasil terhubung ke Backend!");
        }
    });
};