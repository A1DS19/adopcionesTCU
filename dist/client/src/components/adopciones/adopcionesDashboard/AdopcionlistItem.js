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
    return (<semantic_ui_react_1.Card fluid as={react_router_dom_1.Link} to={`/adoption/${pet._id}`}>
      <semantic_ui_react_1.Image fluid label={{
        color: `${JSON.parse(pet.adopted) ? 'red' : 'green'}`,
        content: `${JSON.parse(pet.adopted) ? 'Adoptado' : 'Disponible'}`,
        ribbon: 'right',
    }} src={((_a = pet === null || pet === void 0 ? void 0 : pet.photosUrl) === null || _a === void 0 ? void 0 : _a.length) > 0 ? pet.photosUrl[0] : '/assets/pet-house.png'}/>
      <semantic_ui_react_1.Card.Content textAlign='center'>
        <semantic_ui_react_1.Card.Header>
          {' '}
          <p style={{ color: 'orange' }}>{pet.name}</p>{' '}
        </semantic_ui_react_1.Card.Header>
        <semantic_ui_react_1.Card.Meta>
          <semantic_ui_react_1.Icon name='point'/> {pet.location}
        </semantic_ui_react_1.Card.Meta>
        <semantic_ui_react_1.Card.Description>{pet.description}</semantic_ui_react_1.Card.Description>
      </semantic_ui_react_1.Card.Content>
    </semantic_ui_react_1.Card>);
};
exports.AdopcionListItem = AdopcionListItem;
