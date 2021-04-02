"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetList = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const pets_1 = require("../../../actions/pets/pets");
const Error_1 = require("../../common/Error");
const Loader_1 = require("../../common/Loader");
const PetsTableBody_1 = require("./PetsTableBody");
const PetList = () => {
    const dispatch = react_redux_1.useDispatch();
    const { petsData, page, totalPages } = react_redux_1.useSelector((state) => state.pets);
    const { loading, error } = react_redux_1.useSelector((state) => state.loading);
    const [filter, setFilter] = react_1.useState('');
    const history = react_router_1.useHistory();
    react_1.useEffect(() => {
        dispatch(pets_1.fetchPets(page));
    }, [dispatch, page]);
    if (error) {
        return react_1.default.createElement(Error_1.ErrorComponent, null);
    }
    if (loading || (!petsData && !error)) {
        return react_1.default.createElement(Loader_1.LoaderComponent, null);
    }
    const buscarMascota = () => {
        let pet = petsData.filter((pet) => pet.name.toLowerCase() === filter.toLowerCase());
        if (!pet || pet.length === 0) {
            return petsData;
        }
        return pet;
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Input, { type: 'text', placeholder: 'Buscar Mascota', onChange: (e) => setFilter(e.target.value) }),
        react_1.default.createElement(semantic_ui_react_1.Table, { celled: true },
            react_1.default.createElement(semantic_ui_react_1.Table.Header, null,
                react_1.default.createElement(semantic_ui_react_1.Table.Row, null,
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "ID"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "NOMBRE"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "UBICACION"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "RAZA"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "ADOPTADO"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "FOTOS"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "DESCRIPCCION"),
                    react_1.default.createElement(semantic_ui_react_1.Table.HeaderCell, null, "ACCION"))),
            react_1.default.createElement(semantic_ui_react_1.Table.Body, null,
                react_1.default.createElement(PetsTableBody_1.PetsTableBody, { petsData: buscarMascota() })),
            react_1.default.createElement(semantic_ui_react_1.Table.Footer, null,
                react_1.default.createElement(semantic_ui_react_1.Pagination, { activePage: page + 1, totalPages: totalPages, onPageChange: (event, data) => {
                        dispatch(pets_1.updatePageNumber(data.activePage - 1));
                    } }))),
        react_1.default.createElement(semantic_ui_react_1.Button, { onClick: () => history.push(`/admin/pets/create`), color: 'orange', icon: 'plus', content: 'AGREGAR MASCOTA' })));
};
exports.PetList = PetList;
//# sourceMappingURL=PetList.js.map