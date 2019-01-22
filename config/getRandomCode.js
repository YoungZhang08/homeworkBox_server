module.exports = {
    async getRandomCode(max, min) {
        const range = max - min;
        let num = min + Math.floor(Math.random() * range);
        return num;
    }
}