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

    deleteItem = async (criteria) => {
        return this.model.deleteOne(criteria);
    }

    getDataByСriteria = async (criteria, fields) => {
        return await this.model.find(criteria, fields);
    }

    getOneDataByСriteria = async (criteria, fields) => {
        return await this.model.findOne(criteria, fields);
    }

    checkExistence = async (criteria) => {
        return await this.model.findOne(criteria)
    }

    getAllData = async (page, limit) => {
        return await this.model.find()
            .skip((page - 1) * limit)
            .limit(limit);
    }

    deleteAllData = async () => {
        return await this.model.deleteMany();
    }

}