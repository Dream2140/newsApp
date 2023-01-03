module.exports = class UserDto {
    email;
    id;
    nickname;
    role;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.nickname = model.nickname;
        this.role = model.role;
    }
}
