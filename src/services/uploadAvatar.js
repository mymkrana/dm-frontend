import axios from "axios"
export const uploadAvatar = (file) => {
    return new Promise((resolve, reject) => {
        var data = new FormData()
        data.append('avatar', file)
        axios.post("https://designmocha-dev.el.r.appspot.com/avatar-images", data)
        .then((res) => {
            resolve(res)
        })
        .catch((error) => {
            reject(error)
        })
    }) 
}