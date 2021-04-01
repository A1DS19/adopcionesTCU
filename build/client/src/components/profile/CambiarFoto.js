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
exports.PhotoUpload = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const auth_1 = require("../../actions/auth");
const PhotoDropzone_1 = require("../common/photos/PhotoDropzone");
const PhotoUpload = ({ currentUser }) => {
    const [files, setFiles] = react_1.useState([]);
    const [loading, setLoading] = react_1.useState(false);
    const dispatch = react_redux_1.useDispatch();
    const history = react_router_1.useHistory();
    const ifPreview = () => {
        if (!files || !files.length) {
            return false;
        }
        else {
            return true;
        }
    };
    const renderPreview = () => {
        return files.map((file) => (<semantic_ui_react_1.Image key={file.name} style={{ marginTop: '10px' }} src={file.preview}/>));
    };
    const handlePhotoSubmit = () => {
        var _a;
        try {
            setLoading(true);
            dispatch(auth_1.updateUserPFP((_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) === null || _a === void 0 ? void 0 : _a.toString(), files, () => {
                history.go(0);
            }));
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };
    return (<react_1.Fragment>
      <semantic_ui_react_1.Header textAlign='center' content='Cambiar Foto de Perfil'/>
      <semantic_ui_react_1.Grid divided style={{ marginTop: '10px' }}>
        <semantic_ui_react_1.Grid.Column width={8}>
          <semantic_ui_react_1.Header textAlign='center' color='orange' sub content='agregar una foto'/>
          <PhotoDropzone_1.PhotoDropzone setFiles={setFiles}/>
        </semantic_ui_react_1.Grid.Column>
        <semantic_ui_react_1.Grid.Column width={8}>
          <semantic_ui_react_1.Header textAlign='center' sub color='orange' content={!ifPreview() ? 'foto actual' : 'vista previa'}/>
          {ifPreview() ? (renderPreview()) : (<semantic_ui_react_1.Image style={{ marginTop: '10px' }} src={(currentUser === null || currentUser === void 0 ? void 0 : currentUser.photoURL) || '/assets/user.png'}/>)}
        </semantic_ui_react_1.Grid.Column>
        {ifPreview() && (<semantic_ui_react_1.Button loading={loading} disabled={loading} style={{ marginTop: '10px' }} onClick={handlePhotoSubmit} fluid color='orange' content='ACTUALIZAR FOTO'/>)}
      </semantic_ui_react_1.Grid>
    </react_1.Fragment>);
};
exports.PhotoUpload = PhotoUpload;
