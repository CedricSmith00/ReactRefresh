export function expireCookie(key) {
    document.cookie = key + "=; expires=Wed, 26 May 1999 00:00:00 UTC; path =/;"
}