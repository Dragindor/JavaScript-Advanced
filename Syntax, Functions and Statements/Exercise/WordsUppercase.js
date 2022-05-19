function wordsUpperCase(str) {
    return str.match(/\w+/g).join(", ").toLocaleUpperCase()
}