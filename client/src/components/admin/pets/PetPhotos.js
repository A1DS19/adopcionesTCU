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
exports.PetPhotos = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const semantic_ui_react_1 = require("semantic-ui-react");
const pets_1 = require("../../../actions/pets/pets");
const PhotosDropzone_1 = require("../../common/photos/PhotosDropzone");
const PetPhotos = ({ selectedPet }) => {
    const [files, setFiles] = react_1.useState([]);
    const [loading, setLoading] = react_1.useState(false);
    const history = react_router_dom_1.useHistory();
    const dispatch = react_redux_1.useDispatch();
    const ifPreview = () => {
        if (!files || !files.length) {
            return false;
        }
        else {
            return true;
        }
    };
    const handlePhotosSubmit = (files, allFiles) => {
        var _a;
        try {
            setLoading(true);
            const images = files.map((f) => f.file);
            dispatch(pets_1.addPetsPictures((_a = selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.id) === null || _a === void 0 ? void 0 : _a.toString(), images, () => {
                allFiles.forEach((f) => f.remove());
                history.push(`/admin/pets`);
            }));
        }
        catch (err) {
            react_toastify_1.toast.error(err);
        }
        finally {
            setLoading(false);
        }
    };
    return (react_1.default.createElement(semantic_ui_react_1.Grid, { centered: true },
        react_1.default.createElement(semantic_ui_react_1.Grid.Row, null, loading ? (react_1.default.createElement(semantic_ui_react_1.Loader, null)) : (react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 16 },
            react_1.default.createElement(semantic_ui_react_1.Header, { as: 'h3', textAlign: 'center', content: selectedPet ? `Agregar mas Fotos a ${selectedPet.name}` : 'Agregar Fotos' }),
            react_1.default.createElement(PhotosDropzone_1.PhotosDropzone, { handleSubmit: handlePhotosSubmit, setFiles: setFiles }))))));
};
exports.PetPhotos = PetPhotos;
//# sourceMappingURL=PetPhotos.js.map