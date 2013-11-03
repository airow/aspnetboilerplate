﻿define(['plugins/router', 'session', 'plugins/dialog'], function (router, session, dialogs) {
    return {
        currentUser: session.getCurrentUser(),
        router: router,
        
        activate: function () {
            router.map([
                { route: '', title: 'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'user/:id', title: 'User Profile', moduleId: 'viewmodels/user', nav: true },
                { route: 'friends', title: 'My Friends', moduleId: 'viewmodels/friends', nav: true },
                { route: 'task/:id', moduleId: 'viewmodels/task', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        },
        
        createTask: function () {
            dialogs.show('viewmodels/createTaskDialog');
        }
    };
});