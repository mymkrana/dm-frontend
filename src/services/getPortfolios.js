import axios from "axios"
var Cookies = require('js-cookie')
export const getPortfolios = () => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.common["session"] = JSON.stringify(Cookies.getJSON());

        axios.defaults.withCredentials = true;
        axios("https://designmocha-dev.el.r.appspot.com/designer/portfolio/all", {

        method: "GET",
        withCredentials: true,
        credentials: "include"

        }).then(res => {
            resolve(res)
            console.log(res.data);
        }).catch(err => {
            reject(err)
            console.log(err.response);
        })
    })
}