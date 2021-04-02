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
exports.AdopcionList = void 0;
const react_1 = __importStar(require("react"));
const AdopcionlistItem_1 = require("./AdopcionlistItem");
const AdopcionLoader_1 = require("./AdopcionLoader");
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionList = ({ petsData, loading, }) => {
    if (loading) {
        return (<react_1.Fragment>
        <AdopcionLoader_1.AdopcionLoader />
        <AdopcionLoader_1.AdopcionLoader />
        <AdopcionLoader_1.AdopcionLoader />
      </react_1.Fragment>);
    }
    const renderPets = petsData === null || petsData === void 0 ? void 0 : petsData.map((pet) => {
        return <AdopcionlistItem_1.AdopcionListItem key={pet._id} pet={pet}/>;
    });
    const renderLoader = () => {
        return (<semantic_ui_react_1.Message icon>
        <semantic_ui_react_1.Icon name='circle notched' loading={loading}/>
        <semantic_ui_react_1.Message.Content>
          <semantic_ui_react_1.Message.Header>Espere un segundo...</semantic_ui_react_1.Message.Header>
          Estamos cargando mas contenido
        </semantic_ui_react_1.Message.Content>
      </semantic_ui_react_1.Message>);
    };
    const renderEndMessage = () => {
        return <semantic_ui_react_1.Message icon='warning' header='Ya no hay mas contenido'/>;
    };
    return (<react_1.Fragment>
      {petsData.length !== 0 ? (<semantic_ui_react_1.Card.Group itemsPerRow={2} doubling stackable>
          {renderPets}
        </semantic_ui_react_1.Card.Group>) : (<semantic_ui_react_1.Message icon='warning' header='Ya no hay mas contenido'/>)}
    </react_1.Fragment>);
};
exports.AdopcionList = AdopcionList;
