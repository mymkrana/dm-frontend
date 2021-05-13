import axios from "axios"
var Cookies = require("js-cookie")
export const uploadPortfolio = (data) => {
    return new Promise((resolve, reject) => {
        // var data = new FormData()
        // data.append('pic', file)
        var pdata = new FormData()
        pdata.append("portfolio_metadata", data.portfolio_metadata)
        pdata.append("media", data.media[0])
        var headers = {
            session: JSON.stringify(Cookies.getJSON())
        }
        console.log(data.media)
        axios.post("https://designmocha-dev.el.r.appspot.com/designer/portfolio/", pdata, { headers: headers })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}