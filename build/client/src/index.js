"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("semantic-ui-css/semantic.min.css");
require("react-toastify/dist/ReactToastify.min.css");
require("react-responsive-carousel/lib/styles/carousel.min.css");
require("react-dropzone-uploader/dist/styles.css");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const redux_1 = require("redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const react_redux_1 = require("react-redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const react_router_dom_1 = require("react-router-dom");
const index_1 = require("./reducers/index");
const autoScrollTop_1 = require("./scripts/autoScrollTop");
const App_1 = __importDefault(require("./components/App"));
const composeEnhancers = redux_devtools_extension_1.composeWithDevTools({});
const store = redux_1.createStore(index_1.reducers, {
    auth: {
        authenticated: localStorage.getItem('token') ? true : false,
        userId: localStorage.getItem('userId'),
    },
}, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
react_dom_1.default.render(<react_redux_1.Provider store={store}>
    <react_router_dom_1.BrowserRouter>
      <autoScrollTop_1.ScrollToTop />
      <App_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_redux_1.Provider>, document.getElementById('root'));
