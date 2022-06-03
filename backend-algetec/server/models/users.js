const userRepository = require('../repositories/users');

class Users {
    createUser(returnForm) {
        return userRepository.createUser(returnForm)
    }
}