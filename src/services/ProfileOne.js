import axios from "axios"
const { REACT_APP_BASE_URL } = process.env;
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
        axios.post("https://designmocha-dev.el.r.appspot.com/public/profile/", data, { withCredentials: true })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}