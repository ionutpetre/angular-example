angular
    .module('demo')
    .factory('$mockData', mockData);

function mockData($q) {

    var userDocs = [{
            id: 1,
            username: 'ionut.petre@ro.ibm.com',
            fullName: 'Ionut Petre',
            password: '123',
            imgUrl: 'http://icons.iconarchive.com/icons/designbolts/free-male-avatars/128/Male-Avatar-icon.png'
        }, {
            id: 2,
            username: 'john.doe@ro.ibm.com',
            fullName: 'John Doe',
            password: '123',
            imgUrl: 'http://icons.iconarchive.com/icons/designbolts/free-male-avatars/128/Male-Avatar-Cool-Cap-icon.png'
        }],

        activityDocs = [{
            id: 1,
            title: 'First activity title',
            description: 'First activity description',
            date: 1459101098,
            seen: false,
            user: userDocs[0]
        }, {
            id: 2,
            title: 'Second activity title',
            description: 'Second activity description',
            date: 1459102029,
            seen: false,
            user: userDocs[0]
        }, {
            id: 3,
            title: 'Third activity title',
            description: 'Third activity description',
            date: 1459102112,
            seen: false,
            user: userDocs[1]
        }];

    function authUser(username, password) {
        var deferred = $q.defer();
        setTimeout(function() {
            deferred.notify('Searching user...');
            for (idx in userDocs) {
                if (userDocs[idx].username === username &&
                    userDocs[idx].password === password) {
                    deferred.resolve(userDocs[idx]);
                }
            }
            deferred.reject(null);
        }, 500);
        return deferred.promise;
    }

    function getUserById(userId) {
        var deferred = $q.defer();
        setTimeout(function() {
            deferred.notify('Searching user...');
            for (idx in userDocs) {
                if (userDocs[idx].id == userId) {
                    deferred.resolve(userDocs[idx]);
                }
            }
            deferred.reject(null);
        }, 500);
        return deferred.promise;
    }

    function getActivities() {
        var deferred = $q.defer();
        setTimeout(function() {
            deferred.notify('Loading activities...');
            deferred.resolve(activityDocs);
        }, 500);
        return deferred.promise;
    }

    function getActivityById(activityId) {
        var deferred = $q.defer();
        setTimeout(function() {
            deferred.notify('Searching activity...');
            for (idx in activityDocs) {
                if (activityDocs[idx].id == activityId) {
                    deferred.resolve(activityDocs[idx]);
                }
            }
            deferred.reject(null);
        }, 500);
        return deferred.promise;
    }

    return {
        authUser: authUser,
        getUserById: getUserById,
        getActivities: getActivities
    };
}

mockData.$inject = ['$q'];
