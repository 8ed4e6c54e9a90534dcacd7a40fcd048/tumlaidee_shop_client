import BaseModel from './BaseModel'

export default class UserModel extends BaseModel {
    
    async checkLogin(data) {
        return this.directFetch({
            url: 'user/checkLogin',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async getUserMaxCode(data) {
        return this.authFetch({
            url: 'user/getUserMaxCode',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async getUserBy(data) {
        return this.authFetch({
            url: 'user/getUserBy',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async getUserByCode(data) {
        return this.authFetch({
            url: 'user/getUserByCode',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async updateUserBy(data) {
        return this.authFetch({
            url: 'user/updateUserBy',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async insertUser(data) {
        return this.authFetch({
            url: 'user/insertUser',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    async deleteUserBy(data) {
        return this.deleteUserBy({
            url: 'user/deleteUserBy',
            method: 'POST',
            body: JSON.stringify(data),
        })
    }
}