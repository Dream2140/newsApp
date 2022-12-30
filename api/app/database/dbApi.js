module.exports = class Database {
    constructor(model) {
        this.model = model;
    }

    saveData = async (data,errorCallback) => {
        return  this.model.create(data,(err) => errorCallback);
    }

    deleteDataItemById = async (data) => {
        return  this.model.findByIdAndDelete(data);
    }

    updateDataItemById = async (id, data) => {
        return this.model.findByIdAndUpdate(id, data, {new: true})
    }

    getDataByRegex = async (criteria) => {
        return await this.model.find(criteria);
    }

    checkExistence = async (criteria)=>{
        return await this.model.findOne(criteria)
    }

    getAllData = async (page, limit)=>{
        return await this.model.find()
        .skip((page - 1) * limit)
        .limit(limit);
    }
}