"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailComments = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionDetailComments = ({ selectedPet, authenticated, }) => {
    return (react_1.default.createElement(semantic_ui_react_1.Segment, { style: { marginTop: '25px' } },
        react_1.default.createElement(semantic_ui_react_1.Comment.Group, null,
            react_1.default.createElement(semantic_ui_react_1.Header, { as: 'h3', dividing: true },
                "Comentarios acerca de ", selectedPet === null || selectedPet === void 0 ? void 0 :
                selectedPet.name),
            react_1.default.createElement(semantic_ui_react_1.Comment, null,
                react_1.default.createElement(semantic_ui_react_1.Comment.Avatar, { src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' }),
                react_1.default.createElement(semantic_ui_react_1.Comment.Content, null,
                    react_1.default.createElement(semantic_ui_react_1.Comment.Author, { as: 'a' }, "Elliot Fu"),
                    react_1.default.createElement(semantic_ui_react_1.Comment.Metadata, null,
                        react_1.default.createElement("div", null, "Yesterday at 12:30AM")),
                    react_1.default.createElement(semantic_ui_react_1.Comment.Text, null,
                        react_1.default.createElement("p", null, "This has been very useful for my research. Thanks as well!")),
                    react_1.default.createElement(semantic_ui_react_1.Comment.Actions, null,
                        react_1.default.createElement(semantic_ui_react_1.Comment.Action, null, "Reply"))),
                react_1.default.createElement(semantic_ui_react_1.Comment.Group, null,
                    react_1.default.createElement(semantic_ui_react_1.Comment, null,
                        react_1.default.createElement(semantic_ui_react_1.Comment.Avatar, { src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' }),
                        react_1.default.createElement(semantic_ui_react_1.Comment.Content, null,
                            react_1.default.createElement(semantic_ui_react_1.Comment.Author, { as: 'a' }, "Jenny Hess"),
                            react_1.default.createElement(semantic_ui_react_1.Comment.Metadata, null,
                                react_1.default.createElement("div", null, "Just now")),
                            react_1.default.createElement(semantic_ui_react_1.Comment.Text, null, "Elliot you are always so right :)"))))),
            authenticated ? (react_1.default.createElement(semantic_ui_react_1.Form, { reply: true },
                react_1.default.createElement(semantic_ui_react_1.Form.TextArea, null),
                react_1.default.createElement(semantic_ui_react_1.Button, { content: 'Add Reply', labelPosition: 'left', icon: 'edit', color: 'orange' }))) : (react_1.default.createElement(semantic_ui_react_1.Header, { color: 'orange', sub: true, content: 'Debe iniciar sesion para comentar' })))));
};
exports.AdopcionDetailComments = AdopcionDetailComments;
//# sourceMappingURL=AdopcionDetailComments.js.map