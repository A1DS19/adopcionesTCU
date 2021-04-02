"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoDropzone = void 0;
const react_1 = __importDefault(require("react"));
const react_dropzone_1 = require("react-dropzone");
const PhotoDropzone = ({ setFiles }) => {
    const { getRootProps, getInputProps } = react_dropzone_1.useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles.map((file) => Object.assign(file, {
                preview: URL.createObjectURL(file),
            })));
        },
    });
    return (react_1.default.createElement("div", { style: { marginTop: '10px' } },
        react_1.default.createElement("section", null,
            react_1.default.createElement("div", Object.assign({}, getRootProps({ style })),
                react_1.default.createElement("input", Object.assign({}, getInputProps())),
                react_1.default.createElement("p", { style: { textAlign: 'center', marginTop: '20px' } }, "Arrastre o click aqui para subir foto")))));
};
exports.PhotoDropzone = PhotoDropzone;
const style = { border: 'dashed', height: '100px', cursor: 'pointer' };
//# sourceMappingURL=PhotoDropzone.js.map