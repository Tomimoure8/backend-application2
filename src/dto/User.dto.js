export class UserDTO {
    constructor(user) {
        this.id = user._id;
        this.fullName = `${user.first_name} ${user.last_name}`;
        this.email = user.email;
        this.role = user.role;
    }
}
