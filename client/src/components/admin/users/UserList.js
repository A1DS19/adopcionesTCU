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
exports.UserList = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const users_1 = require("../../../actions/users/users");
const Error_1 = require("../../common/Error");
const Loader_1 = require("../../common/Loader");
const UserTableBody_1 = require("./UserTableBody");
const UserList = () => {
    const dispatch = react_redux_1.useDispatch();
    const { usersData } = react_redux_1.useSelector((state) => state.users);
    const { loading, error } = react_redux_1.useSelector((state) => state.loading);
    const [filter, setFilter] = react_1.useState('');
    const history = react_router_1.useHistory();
    react_1.useEffect(() => {
        dispatch(users_1.fetchUsers());
    }, [dispatch]);
    if (error) {
        return <Error_1.ErrorComponent />;
    }
    if (loading || (!usersData && !error)) {
        return <Loader_1.LoaderComponent />;
    }
    const buscarUsuario = () => {
        let user = usersData.filter((user) => (user === null || user === void 0 ? void 0 : user.displayName.toLowerCase()) === filter.toLowerCase());
        if (!user || user.length === 0) {
            return usersData;
        }
        return user;
    };
    return (<react_1.Fragment>
      <semantic_ui_react_1.Input type='text' placeholder='Buscar Usuario' onChange={(e) => setFilter(e.target.value)}/>

      <semantic_ui_react_1.Table celled>
        <semantic_ui_react_1.Table.Header>
          <semantic_ui_react_1.Table.Row>
            <semantic_ui_react_1.Table.HeaderCell>ID</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>EMAIL</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>CONTRASENA</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>NOMBRE</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>APELLIDO</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>ADMIN</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>USUARIO</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>CREADO</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>FOTO</semantic_ui_react_1.Table.HeaderCell>
            <semantic_ui_react_1.Table.HeaderCell>ACCION</semantic_ui_react_1.Table.HeaderCell>
          </semantic_ui_react_1.Table.Row>
        </semantic_ui_react_1.Table.Header>

        <semantic_ui_react_1.Table.Body>
          <UserTableBody_1.UsersTableBody usersData={usersData}/>
        </semantic_ui_react_1.Table.Body>
      </semantic_ui_react_1.Table>

      <semantic_ui_react_1.Button onClick={() => history.push(`/admin/users/create`)} color='orange' icon='plus' content='AGREGAR USUARIO'/>
    </react_1.Fragment>);
};
exports.UserList = UserList;
