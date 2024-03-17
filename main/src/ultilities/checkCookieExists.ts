function checkCookieExists(cookieName:string) {
    // Get all cookies
    var cookies = document.cookie.split(';');

    // Iterate over each cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // Check if cookie starts with the specified name
        if (cookie.indexOf(cookieName + '=') === 0) {
            return true; // Cookie exists
        }
    }
    return false; // Cookie does not exist
}

export default checkCookieExists;