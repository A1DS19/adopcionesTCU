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
exports.AdopcionFilters = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_redux_1 = require("react-redux");
const pets_1 = require("../../../actions/pets/pets");
const AdopcionFilters = ({ loading }) => {
    const dispatch = react_redux_1.useDispatch();
    const { authenticated } = react_redux_1.useSelector((state) => state.auth);
    const { page } = react_redux_1.useSelector((state) => state.pets);
    return (<react_1.Fragment>
      <semantic_ui_react_1.Menu fluid vertical size='large' style={{ width: '100%' }}>
        <semantic_ui_react_1.Header icon='filter' attached color='orange' content='Filtros'/>
        <semantic_ui_react_1.Menu.Item disabled={loading} active={false} onClick={() => dispatch(pets_1.fetchPets(page))} content='Todas las Mascotas'/>
        <semantic_ui_react_1.Menu.Item disabled={loading} active={false} onClick={() => dispatch(pets_1.fetchPets(page, 'disponible'))} content='Mascotas Disponibles'/>
        <semantic_ui_react_1.Menu.Item disabled={loading} active={false} onClick={() => dispatch(pets_1.fetchPets(page, 'adoptado'))} content='Mascotas Adoptadas'/>
      </semantic_ui_react_1.Menu>
    </react_1.Fragment>);
};
exports.AdopcionFilters = AdopcionFilters;
