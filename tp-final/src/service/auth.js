const TOKEN_KEY = "authToken"

export function getToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
    return localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
    localStorage.removeItem(TOKEN_KEY)
}


export function isAuthenticated(){
    return Boolean(getToken());
}