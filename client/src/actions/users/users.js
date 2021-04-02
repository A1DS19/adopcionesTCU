"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearSelectedUser = exports.fetchUsers = exports.fetchSelectedUser = exports.deleteUser = exports.updateUserData = exports.createUser = void 0;
const axios_1 = require("../../config/axios");
const loading_1 = require("../loading/loading");
const types_1 = require("../types");
const react_toastify_1 = require("react-toastify");
const createUser = (user, cb) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.post('/admin/user', user);
            dispatch({ type: types_1.types.CREATE_USER, payload: data });
            react_toastify_1.toast.success(`Usuario ${data.name} ${data.lastName} creado`);
            cb();
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.createUser = createUser;
const updateUserData = (userId, user, cb) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.put(`/admin/user/${userId}`, user);
            dispatch({ type: types_1.types.UPDATE_USER, payload: data });
            react_toastify_1.toast.success(data.msg);
            cb();
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.updateUserData = updateUserData;
const deleteUser = (userId) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.delete(`/admin/user/${userId}`);
            dispatch({ type: types_1.types.DELETE_USER, payload: userId });
            react_toastify_1.toast.success(data.msg);
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.deleteUser = deleteUser;
const fetchSelectedUser = (userId) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.get(`/admin/user/${userId}`);
            dispatch({ type: types_1.types.FETCH_SELECTED_USER, payload: data });
        }
        catch (error) {
            react_toastify_1.toast.error(error.response);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.fetchSelectedUser = fetchSelectedUser;
const fetchUsers = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.get('/admin/users');
            dispatch({ type: types_1.types.FETCH_USERS_DATA, payload: data });
        }
        catch (error) {
            react_toastify_1.toast.error(error.response);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.fetchUsers = fetchUsers;
const clearSelectedUser = () => {
    return {
        type: types_1.types.CLEAR_SELECTED_USER,
        payload: undefined,
    };
};
exports.clearSelectedUser = clearSelectedUser;
//# sourceMappingURL=users.js.map