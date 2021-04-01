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
exports.sendEmail = exports.addPetsPictures = exports.updatePageNumber = exports.clearSelectedPet = exports.deletePet = exports.updatePet = exports.createPet = exports.fetchSelectedPet = exports.fetchPets = void 0;
const react_toastify_1 = require("react-toastify");
const loading_1 = require("../loading/loading");
const types_1 = require("../types");
//test api
const axios_1 = require("../../config/axios");
const fetchPets = (page, filtro) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.get(`/adoptions/pets?page=${page}`);
            let filterData;
            switch (filtro) {
                case 'disponible':
                    filterData = [...data.pets.filter((pet) => pet.adopted === 'false')];
                    return dispatch({
                        type: types_1.types.FETCH_PETS_DATA,
                        payload: { pets: filterData, totalPages: data.totalPages },
                    });
                case 'adoptado':
                    filterData = [...data.pets.filter((pet) => pet.adopted === 'true')];
                    return dispatch({
                        type: types_1.types.FETCH_PETS_DATA,
                        payload: { pets: filterData, totalPages: data.totalPages },
                    });
                default:
                    return dispatch({
                        type: types_1.types.FETCH_PETS_DATA,
                        payload: { pets: data.pets, totalPages: data.totalPages },
                    });
            }
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.fetchPets = fetchPets;
const fetchSelectedPet = (pet) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.get(`/adoptions/pet/${pet}`);
            dispatch({ type: types_1.types.FETCH_SELECTED_PET, payload: data });
        }
        catch (error) {
            react_toastify_1.toast.error(error.response.data.msg);
        }
        finally {
            dispatch(loading_1.asyncActionFinish());
        }
    });
};
exports.fetchSelectedPet = fetchSelectedPet;
const createPet = (pet, cb) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.post('/adoptions/pet', pet);
            dispatch({ type: types_1.types.CREATE_PET, payload: data });
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
exports.createPet = createPet;
const updatePet = (petId, pet, cb) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.put(`/adoptions/pet/${petId}`, pet);
            dispatch({ type: types_1.types.UPDATE_PET, payload: data });
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
exports.updatePet = updatePet;
const deletePet = (id) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.delete(`/adoptions/pet/${id}`);
            dispatch({ type: types_1.types.DELETE_PET, payload: id });
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
exports.deletePet = deletePet;
const clearSelectedPet = () => {
    return {
        type: types_1.types.CLEAR_SELECTED_PET,
        payload: undefined,
    };
};
exports.clearSelectedPet = clearSelectedPet;
const updatePageNumber = (page) => {
    return (dispatch, getState) => {
        //let { page } = getState().pets;
        dispatch({ type: types_1.types.UPDATE_PAGE_NUMBER, payload: page });
    };
};
exports.updatePageNumber = updatePageNumber;
const addPetsPictures = (petId, images, cb) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            formData.append('images[]', images[i]);
        }
        // formData.append('images[]', images[0]);
        // formData.append('images[]', images[1]);
        // formData.append('images[]', images[2]);
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.post(`/adoptions/pet/upload/${petId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            dispatch({
                type: types_1.types.UPDATE_PET,
                payload: data,
            });
            react_toastify_1.toast.success(data.msg);
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
exports.addPetsPictures = addPetsPictures;
const sendEmail = (petId, emailData) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        let newEmailData = {};
        newEmailData = Object.assign(Object.assign({}, emailData), { petId });
        try {
            dispatch(loading_1.asyncActionStart());
            const { data } = yield axios_1.api.post(`/adoptions/send`, newEmailData);
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
exports.sendEmail = sendEmail;
