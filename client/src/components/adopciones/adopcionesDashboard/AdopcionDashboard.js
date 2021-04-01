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
exports.AdopcionDashboard = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_redux_1 = require("react-redux");
const AdopcionFilter_1 = require("./AdopcionFilter");
const AdopcionList_1 = require("./AdopcionList");
const AdopcionLoader_1 = require("./AdopcionLoader");
const petsActions = __importStar(require("../../../actions/pets/pets"));
const AdopcionDashboard = () => {
    const dispatch = react_redux_1.useDispatch();
    const { petsData, page, totalPages } = react_redux_1.useSelector((state) => state.pets);
    const { loading } = react_redux_1.useSelector((state) => state.loading);
    react_1.useEffect(() => {
        dispatch(petsActions.fetchPets(page));
    }, [dispatch, page]);
    return (<semantic_ui_react_1.Grid>
      <semantic_ui_react_1.Grid.Column width={10}>
        {loading && (<react_1.Fragment>
            <AdopcionLoader_1.AdopcionLoader />
            <AdopcionLoader_1.AdopcionLoader />
            <AdopcionLoader_1.AdopcionLoader />
            <AdopcionLoader_1.AdopcionLoader />
          </react_1.Fragment>)}
        <AdopcionList_1.AdopcionList loading={loading} petsData={petsData}/>
      </semantic_ui_react_1.Grid.Column>

      <semantic_ui_react_1.Grid.Column width={6}>
        <AdopcionFilter_1.AdopcionFilters />
      </semantic_ui_react_1.Grid.Column>

      <semantic_ui_react_1.Pagination activePage={page + 1} totalPages={totalPages} onPageChange={(event, data) => {
            dispatch(petsActions.updatePageNumber(data.activePage - 1));
        }} 
    // firstItem={null}
    // lastItem={null}
    pointing secondary/>
    </semantic_ui_react_1.Grid>);
};
exports.AdopcionDashboard = AdopcionDashboard;
