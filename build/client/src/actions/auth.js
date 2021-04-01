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
exports.updateUserPFP = exports.deleteUser = exports.updateUserPassword = exports.signOutUser = exports.updateCurrentUser = exports.fetchCurrentUser = exports.registerUser = exports.signInUser = void 0;
const loading_1 = require("./loading/loading");
const types_1 = require("./types");
const axios_1 = require("../config/axios");
const react_toastify_1 = require("react-toastify");
const modals_1 = require("./modals");
const signInUser = (user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.post('/auth/login', user);
            dispatch({ type: types_1.types.SIGNED_IN, payload: data });
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.id);
            dispatch(modals_1.closeModal());
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.signInUser = signInUser;
const registerUser = (user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.post('/auth/register', user);
            dispatch({ type: types_1.types.SIGNED_IN, payload: data });
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.id);
            dispatch(modals_1.closeModal());
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.registerUser = registerUser;
const fetchCurrentUser = (userId) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.get(`/auth/user/${userId}`);
            dispatch({ type: types_1.types.FETCH_CURRENT_USER, payload: data });
        }
        catch (error) {
            throw error;
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.fetchCurrentUser = fetchCurrentUser;
const updateCurrentUser = (userId, user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.put(`/auth/user/${userId}`, user);
            dispatch({
                type: types_1.types.UPDATE_CURRENT_USER,
                payload: data,
            });
            react_toastify_1.toast.success('Datos actualizados');
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.updateCurrentUser = updateCurrentUser;
const signOutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return { type: types_1.types.SIGNED_OUT };
};
exports.signOutUser = signOutUser;
const updateUserPassword = (userId, password) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.put(`/auth/user-password/${userId}`, password);
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
exports.updateUserPassword = updateUserPassword;
const deleteUser = (userId) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.delete(`/auth/user/${userId}`);
            react_toastify_1.toast.success(data.msg);
            exports.signOutUser();
        }
        catch (err) {
            react_toastify_1.toast.error(err.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.deleteUser = deleteUser;
const updateUserPFP = (userId, image, cb) => {
    const formData = new FormData();
    formData.append('image', image[0]);
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.post(`/auth/user/upload/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            dispatch({
                type: types_1.types.UPDATE_CURRENT_USER,
                payload: data,
            });
            cb();
        }
        catch (err) {
            react_toastify_1.toast.error(err.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.updateUserPFP = updateUserPFP;
