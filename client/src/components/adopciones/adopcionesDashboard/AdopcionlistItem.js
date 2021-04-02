"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionListItem = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_toastify_1 = require("react-toastify");
const AdopcionListItem = ({ pet }) => {
    var _a;
    const dispatch = react_redux_1.useDispatch();
    const handleDelete = (eventId) => {
        try {
            console.log(eventId);
        }
        catch (error) {
            react_toastify_1.toast.error(error.message);
        }
    };
    return (react_1.default.createElement(semantic_ui_react_1.Card, { fluid: true, as: react_router_dom_1.Link, to: `/adoption/${pet._id}` },
        react_1.default.createElement(semantic_ui_react_1.Image, { fluid: true, label: {
                color: `${JSON.parse(pet.adopted) ? 'red' : 'green'}`,
                content: `${JSON.parse(pet.adopted) ? 'Adoptado' : 'Disponible'}`,
                ribbon: 'right',
            }, src: ((_a = pet === null || pet === void 0 ? void 0 : pet.photosUrl) === null || _a === void 0 ? void 0 : _a.length) > 0 ? pet.photosUrl[0] : '/assets/pet-house.png' }),
        react_1.default.createElement(semantic_ui_react_1.Card.Content, { textAlign: 'center' },
            react_1.default.createElement(semantic_ui_react_1.Card.Header, null,
                ' ',
                react_1.default.createElement("p", { style: { color: 'orange' } }, pet.name),
                ' '),
            react_1.default.createElement(semantic_ui_react_1.Card.Meta, null,
                react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'point' }),
                " ",
                pet.location),
            react_1.default.createElement(semantic_ui_react_1.Card.Description, null, pet.description))));
};
exports.AdopcionListItem = AdopcionListItem;
//# sourceMappingURL=AdopcionlistItem.js.map