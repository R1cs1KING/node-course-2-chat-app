const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Room'
        }, {
            id: '2',
            name: 'Jen',
            room: 'Room2'
        }, {
            id: '3',
            name: 'Mickey',
            room: 'Room'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Hilter',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '42';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '42';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Room', () => {
        var userList = users.getUserList('Room');

        expect(userList).toEqual(['Mike', 'Mickey']);
    });

    it('should return names for Room2', () => {
        var userList = users.getUserList('Room2');

        expect(userList).toEqual(['Jen']);
    });
    
});