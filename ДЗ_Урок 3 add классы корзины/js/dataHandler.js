export default {
    _url: 'api/v1/',
    arrApi: null,

    getCatalog(errorCallback) {
        return fetch(`${this._url}catalogData.json`)
            .then((response) => {
                if(response.ok) {
                    return response.json()
                } else {
                    return errorCallback()
                }
            })
            .then((data) => {
                // console.log(data);
                this.arrApi = data;
            })
            .catch((error) => {
                return errorCallback()
            })
    },

    getCart(errorCallback) {
        return fetch(`${this._url}getCart.json`)
            .then((response) => {
                if(response.ok) {
                    return response.data
                } else {
                    return errorCallback(response.status)
                }
            })
            .catch((error) => {
                return errorCallback(error)
            })
    },

    addToCart(errorCallback, data) {
        return fetch(`${url}addToCart`, {
            method: 'POST',
            body: data
        })
        .then((response) => {
            if(response.ok) {
                return true;
            } else {
                return errorCallback(response.status)
            }
        })
        .catch((error) => {
            return errorCallback(error)
        })
    }
}

// setTimeout(() => 'ok', 2000)

// const x = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//         resolve('ok')
//     // }, 2000)
// })
// .then((data) => {
//     console.log(data)
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ok2')
//         }, 2000)
//     })
// })
// .then((data) => {
//     console.log(data, 'then2')
// })
// .catch((e) => {
//     console.log(e, 'rej')
// })

// console.log(x)