import axios from "axios"
var Cookies = require('js-cookie')
export const ProfileOne = (user) => {
    return new Promise((resolve, reject) => {
        // var data = {
        //     full_name: "John Doe",
        //     first_name: "string",
        //     last_name: "string",
        //     date_of_birth: "2021-05-09T01:52:07.372Z",
        //     profile_name: "jogn doe",
        //     mobile_number: "8787878787"
        // }
        axios.defaults.withCredentials = true;
        const baseURL = "https://designmocha-dev.el.r.appspot.com/public/"
        const app = axios.create({
            baseURL,
            withCredentials: true
        })
        console.log("session", Cookies.get("session"))
        const headers = {
            Cookie: "session=" + Cookies.get('session') + "; userProfile=true",
            XVersion: "1"
          }
        app.get('profile', {headers: headers})
            .then(res => console.log(res))
            .catch(err => console.log("error", err))
            
        // var config = {
        //     method: 'get',
        //     url: 'https://designmocha-dev.el.r.appspot.com/designer/portfolio',
        //     headers: {
        //         'Cookie': 'session=eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9kZXNpZ25tb2NoYS1kZXYiLCJhdWQiOiJkZXNpZ25tb2NoYS1kZXYiLCJhdXRoX3RpbWUiOjE2MjA1NjQ0MTcsInVzZXJfaWQiOiI4eVNoaTU3RXdPY3lJRG5xNkdKMzVxTzdlOVkyIiwic3ViIjoiOHlTaGk1N0V3T2N5SURucTZHSjM1cU83ZTlZMiIsImlhdCI6MTYyMDU2NDQzNiwiZXhwIjoxNjIwOTk2NDM2LCJlbWFpbCI6ImtAazEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImtAazEuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Y1obCDqB-p0acDiuyYtrJ4pm0kytfcfKprkU2rF14m2agiRnVeFTI0C_gttMKSjiEYHOAzEpTLfkcUJLG8DjTwBXW0Aan1apTkF9Z08vCpvZuhKtYHWtdkeofw00vn0WGfmfC5m-8F_KCSGPFb8JYzbxqMlDVzU1Q7dJz6e58RD8azBBlrnC3RW8IixUbPUy0lHCfBd3_cVi3uqtguP_zg_twT507RykEylExlmcv4Ztv-rQ9Fu2OeJRqlWVybS_cIMyuF61m18EG39IUepDou81JaP3ti7EMgzH455-waBsj7MrAszCog1zUzG2Xyx6NgyukaG8JQanwsU5Ch43QQ; userProfile=true'
        //     }
        // };
        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    })
}