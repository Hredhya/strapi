function isDevEnv() {
    return process.env.NODE_ENV === "development"
}

module.exports = {
    isDevEnv,
}
