module.exports = class Database {
    constructor(model) {
        this.model = model;
    }

    saveData = async (data, errorCallback) => {
        return this.model.create(data, (error, data) => {

            if (error) return errorCallback(error)
            return data;
        });
    }


}