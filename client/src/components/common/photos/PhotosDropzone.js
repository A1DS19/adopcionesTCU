"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosDropzone = void 0;
const react_1 = __importDefault(require("react"));
const react_dropzone_uploader_1 = __importDefault(require("react-dropzone-uploader"));
const PhotosDropzone = ({ handleSubmit, setFiles }) => {
    const handleChangeStatus = ({ meta, remove }, status) => {
        setFiles(meta);
    };
    const styles = {
        submitButton: { backgroundColor: 'orange' },
        inputLabel: { color: 'black' },
        inputLabelWithFiles: { color: 'black' },
    };
    return (<react_dropzone_uploader_1.default onChangeStatus={handleChangeStatus} onSubmit={handleSubmit} maxFiles={3} accept='image/*' inputContent='Arrastre o click aqui para subir foto' inputWithFilesContent={(files) => `Puede agregar ${3 - files.length} mas`} styles={styles}/>);
};
exports.PhotosDropzone = PhotosDropzone;
