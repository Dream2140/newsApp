export default class Helper {
    static formatDate(date) {
        const timestamp = new Date(date);
        return timestamp.toLocaleDateString();
    }
}