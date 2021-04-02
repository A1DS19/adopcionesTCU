"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
var types;
(function (types) {
    //Modals
    types[types["OPEN_MODAL"] = 0] = "OPEN_MODAL";
    types[types["CLOSE_MODAL"] = 1] = "CLOSE_MODAL";
    //Auth
    types[types["SIGNED_IN"] = 2] = "SIGNED_IN";
    types[types["SIGNED_OUT"] = 3] = "SIGNED_OUT";
    types[types["FETCH_CURRENT_USER"] = 4] = "FETCH_CURRENT_USER";
    types[types["UPDATE_CURRENT_USER"] = 5] = "UPDATE_CURRENT_USER";
    //Pets
    types[types["FETCH_PETS_DATA"] = 6] = "FETCH_PETS_DATA";
    types[types["FETCH_SELECTED_PET"] = 7] = "FETCH_SELECTED_PET";
    types[types["CLEAR_SELECTED_PET"] = 8] = "CLEAR_SELECTED_PET";
    types[types["CREATE_PET"] = 9] = "CREATE_PET";
    types[types["DELETE_PET"] = 10] = "DELETE_PET";
    types[types["UPDATE_PET"] = 11] = "UPDATE_PET";
    types[types["UPDATE_PAGE_NUMBER"] = 12] = "UPDATE_PAGE_NUMBER";
    //loading
    types[types["ASYNC_ACTION_START"] = 13] = "ASYNC_ACTION_START";
    types[types["ASYNC_ACTION_FINISH"] = 14] = "ASYNC_ACTION_FINISH";
    types[types["ASYNC_ACTION_ERROR"] = 15] = "ASYNC_ACTION_ERROR";
    types[types["CLEAR_ERROR"] = 16] = "CLEAR_ERROR";
    types[types["APP_LOADED"] = 17] = "APP_LOADED";
    //users
    types[types["FETCH_USERS_DATA"] = 18] = "FETCH_USERS_DATA";
    types[types["FETCH_SELECTED_USER"] = 19] = "FETCH_SELECTED_USER";
    types[types["CLEAR_SELECTED_USER"] = 20] = "CLEAR_SELECTED_USER";
    types[types["CREATE_USER"] = 21] = "CREATE_USER";
    types[types["DELETE_USER"] = 22] = "DELETE_USER";
    types[types["UPDATE_USER"] = 23] = "UPDATE_USER";
})(types = exports.types || (exports.types = {}));
//# sourceMappingURL=types.js.map