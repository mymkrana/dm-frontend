import axios from "axios"
var Cookies = require('js-cookie')
export const ProfileOne = (user) => {
    return new Promise((resolve, reject) => {
        var data = {
            full_name: "John Doe",
            first_name: "string",
            last_name: "string",
            date_of_birth: "2021-05-09T01:52:07.372Z",
            profile_name: "jogn doe",
            mobile_number: "8787878787"
        }
        axios.defaults.withCredentials = true;
        const baseURL = "https://designmocha-dev.el.r.appspot.com/public/"
        const app = axios.create({
            baseURL,
            withCredentials: true
        })
        console.log("session", Cookies.get("session"))
        app.post('profile', data)
            .then(res => console.log(res))
            .catch(err => console.log("error", err))
        // axios.post("https://designmocha-dev.el.r.appspot.com/public/profile/", data, { withCredentials: true })
        //     .then((res) => {
        //         resolve(res)
        //     })
        //     .catch((error) => {
        //         reject(error)
        //     })
    })
}