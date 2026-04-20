import { PostApi } from "https://jscroot.github.io/api/croot.js";

window.handleCredentialResponse = (response) => {

    const target_url = "https://zahra-auth-croot.sgp.dom.my.id/login";
    
    const data_dikirim = {
        token: response.credential
    };

    PostApi(target_url, data_dikirim, (result) => {
        console.log(result);
        alert("Respon dari Backend: " + result.message);
    });
}