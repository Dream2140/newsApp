module.exports = class Utils {
    static clearHtmlTags(string){
        return string.replace(/<[^>]*>?/gm, '')
    }
}