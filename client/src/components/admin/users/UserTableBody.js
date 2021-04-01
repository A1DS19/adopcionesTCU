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
exports.UsersTableBody = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const users_1 = require("../../../actions/users/users");
const date_fns_1 = require("date-fns");
const UsersTableBody = ({ usersData }) => {
    const [openConfirm, setConfirm] = react_1.useState(false);
    const [userToDelete, setUserToDelete] = react_1.useState({ id: 0, name: '' });
    const history = react_router_1.useHistory();
    const dispatch = react_redux_1.useDispatch();
    const openDeleteConfirm = (id, name) => {
        setUserToDelete({ id, name });
        setConfirm(true);
    };
    const handleDelete = (id) => {
        dispatch(users_1.deleteUser(id === null || id === void 0 ? void 0 : id.toString()));
    };
    return (<react_1.Fragment>
      {usersData.map((user) => {
            var _a;
            return (<semantic_ui_react_1.Table.Row key={user._id}>
          <semantic_ui_react_1.Table.Cell content={user._id.slice(0, 5) + '...'}/>
          <semantic_ui_react_1.Table.Cell content={user.email}/>
          <semantic_ui_react_1.Table.Cell content={user.password.slice(0, 7) + '...'}/>
          <semantic_ui_react_1.Table.Cell content={user.name}/>
          <semantic_ui_react_1.Table.Cell content={user.lastName}/>
          <semantic_ui_react_1.Table.Cell content={JSON.parse(user === null || user === void 0 ? void 0 : user.isAdmin) ? (<semantic_ui_react_1.Icon color='green' name='check'/>) : (<semantic_ui_react_1.Icon color='red' name='x'/>)}/>
          <semantic_ui_react_1.Table.Cell content={((_a = user.displayName) === null || _a === void 0 ? void 0 : _a.slice(0, 5)) + '...'}/>
          <semantic_ui_react_1.Table.Cell content={date_fns_1.format(new Date(user.createdAt), 'dd/mm/yyyy')}/>
          <semantic_ui_react_1.Table.Cell content={(user === null || user === void 0 ? void 0 : user.photoURL) ? (user.photoURL ? (<semantic_ui_react_1.Icon color='green' name='check'/>) : (<semantic_ui_react_1.Icon color='red' name='x'/>)) : (<semantic_ui_react_1.Icon color='red' name='x'/>)}/>
          <semantic_ui_react_1.Table.Cell>
            <semantic_ui_react_1.Icon link onClick={() => history.push(`/admin/users/${user._id}`)} size='large' name='edit'/>
            <semantic_ui_react_1.Icon link onClick={() => openDeleteConfirm(user._id, user.name || user.email)} size='large' color='red' name='delete'/>
          </semantic_ui_react_1.Table.Cell>
        </semantic_ui_react_1.Table.Row>);
        })}
      <semantic_ui_react_1.Confirm content={`Esta seguro que desea eliminar a ${userToDelete.name}?`} cancelButton='CANCELAR' confirmButton='ELIMINAR' size='small' open={openConfirm} onCancel={() => setConfirm(false)} onConfirm={() => handleDelete(userToDelete.id)}/>
    </react_1.Fragment>);
};
exports.UsersTableBody = UsersTableBody;
