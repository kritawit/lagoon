"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var register_component_1 = require('./components/register.component');
var login_component_1 = require('./components/login.component');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.Login
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map