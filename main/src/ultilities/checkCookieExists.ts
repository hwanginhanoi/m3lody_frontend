function checkCookieExists() {
    let cookieName:string = "connect.sid"
    // Get all cookies
    let cookies = document.cookie.split(';');

    // Iterate over each cookie
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        console.log(cookie);
        // Check if cookie starts with the specified name
        if (cookie.indexOf(cookieName + '=') === 0) {
            console.log("cookie exists")
            return true; // Cookie exists
        }
    }
    console.log("cookie does not exist")
    return false; // Cookie does not exist
}

export default checkCookieExists;