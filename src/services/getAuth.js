var Cookies = require('js-cookie')
export const getAuth = () => {
    var session = Cookies.get("session")
    console.log("session auth", session)
    if(session !== undefined) {
        return true
    }
    else {
        return false
    }
}