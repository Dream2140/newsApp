module.exports = class Utils {
    static clearHtmlTags(string) {
        return string.replace(/<[^>]*>?/gm, '')
    }

    static convertTimestampToDate(timestamp) {
        return new Date(timestamp * 1000);
    }

    static formatUrlString = str => str.split('/').pop();
}