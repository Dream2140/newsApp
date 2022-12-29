module.exports = class Database {
    constructor(model) {
        this.model = model;
    }

    saveData = async (data) => {
        return this.model.create(data);
    }

    deleteDataItemById = async (data) => {
        return this.model.findByIdAndDelete(data);
    }

    updateDataItemById = async (id, data) => {
        return this.model.findByIdAndUpdate(id, data, {new: true})
    }
}