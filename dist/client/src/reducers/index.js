"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
const users_1 = require("./users");
const loading_1 = require("./loading");
const pets_1 = require("./pets");
const redux_1 = require("redux");
const modals_1 = require("./modals");
const auth_1 = require("./auth");
exports.reducers = redux_1.combineReducers({
    modals: modals_1.modalsReducer,
    auth: auth_1.authReducer,
    users: users_1.usersReducer,
    pets: pets_1.petsReducer,
    loading: loading_1.loadingReducer,
});
