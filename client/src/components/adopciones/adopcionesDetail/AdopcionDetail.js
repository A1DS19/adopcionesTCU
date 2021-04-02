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
exports.AdopcionDetail = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_responsive_carousel_1 = require("react-responsive-carousel");
const react_redux_1 = require("react-redux");
const pets_1 = require("../../../actions/pets/pets");
const AdopcionDetailInfo_1 = require("./AdopcionDetailInfo");
const AdopcionDetailSidebar_1 = require("./AdopcionDetailSidebar");
const AdopcionDetailContact_1 = require("./AdopcionDetailContact");
const AdopcionDetailPetBreedList_1 = require("./AdopcionDetailPetBreedList");
const Loader_1 = require("../../common/Loader");
const Error_1 = require("../../common/Error");
const AdopcionDetail = ({ match }) => {
    const petId = match.params.id;
    const { petsData, selectedPet } = react_redux_1.useSelector((state) => state.pets);
    const { authenticated } = react_redux_1.useSelector((state) => state.auth);
    const { loading, error } = react_redux_1.useSelector((state) => state.loading);
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        dispatch(pets_1.fetchSelectedPet(petId.toString()));
        return () => {
            dispatch(pets_1.clearSelectedPet());
        };
    }, [dispatch, petId]);
    if (error) {
        return react_1.default.createElement(Error_1.ErrorComponent, null);
    }
    if (loading || (!petsData && !error)) {
        return react_1.default.createElement(Loader_1.LoaderComponent, null);
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Grid, { columns: 3, relaxed: 'very' },
            react_1.default.createElement(semantic_ui_react_1.Grid.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 16 }, (selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.photosUrl) && (react_1.default.createElement(react_responsive_carousel_1.Carousel, { autoPlay: true, 
                    // {dynamicHeight}
                    infiniteLoop: true, showStatus: false, showThumbs: false }, selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.photosUrl.map((photo, index) => (react_1.default.createElement("div", { style: { height: '320px' }, key: index },
                    react_1.default.createElement("img", { src: photo, alt: 'pic' })))))))),
            react_1.default.createElement(semantic_ui_react_1.Grid.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
                    react_1.default.createElement(AdopcionDetailInfo_1.AdopcionDetailInfo, { selectedPet: selectedPet })),
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
                    react_1.default.createElement(AdopcionDetailSidebar_1.AdopcionDetailSidebar, { selectedPet: selectedPet }))),
            react_1.default.createElement(semantic_ui_react_1.Grid.Row, { id: 'contact-form' },
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 16 },
                    react_1.default.createElement(AdopcionDetailContact_1.AdopcionDetailContact, { authenticated: authenticated, selectedPet: selectedPet }))),
            react_1.default.createElement(semantic_ui_react_1.Grid.Row, null,
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 16 },
                    react_1.default.createElement(AdopcionDetailPetBreedList_1.AdopcionDetailPetBreedList, { petsData: petsData, selectedPet: selectedPet }))))));
};
exports.AdopcionDetail = AdopcionDetail;
//# sourceMappingURL=AdopcionDetail.js.map