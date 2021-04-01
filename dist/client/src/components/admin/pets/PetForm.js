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
exports.PetForm = void 0;
const formik_1 = require("formik");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const pets_1 = require("../../../actions/pets/pets");
const Error_1 = require("../../common/Error");
const Loader_1 = require("../../common/Loader");
const SelectInput_1 = require("../../common/SelectInput");
const TextArea_1 = require("../../common/TextArea");
const TextInput_1 = require("../../common/TextInput");
const PetPhotos_1 = require("./PetPhotos");
const react_toastify_1 = require("react-toastify");
const validationSchemas_1 = require("../../common/validationSchemas");
const PetForm = ({ match, location }) => {
    const petId = match.params.id;
    const { selectedPet } = react_redux_1.useSelector((state) => state.pets);
    const { loading, error } = react_redux_1.useSelector((state) => state.loading);
    const history = react_router_1.useHistory();
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        if (location.pathname === '/admin/pets/create')
            return;
        dispatch(pets_1.fetchSelectedPet(petId.toString()));
        return () => {
            dispatch(pets_1.clearSelectedPet());
        };
    }, [dispatch, petId, location.pathname]);
    if (error) {
        return <Error_1.ErrorComponent />;
    }
    if (loading) {
        return <Loader_1.LoaderComponent />;
    }
    const initialValues = {
        id: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.id,
        name: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name,
        location: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.location,
        breed: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.breed,
        adopted: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.adopted,
        photosUrl: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.photosUrl,
        description: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.description,
    };
    const handleSubmit = (values, helpers) => {
        try {
            selectedPet
                ? dispatch(pets_1.updatePet(petId.toString(), values, () => {
                    history.push('/admin/pets');
                }))
                : dispatch(pets_1.createPet(values, () => {
                    history.push('/admin/pets');
                }));
        }
        catch (error) {
            react_toastify_1.toast.error(error);
        }
        finally {
            helpers.setSubmitting(false);
        }
    };
    return (<react_1.Fragment>
      <semantic_ui_react_1.Button onClick={() => history.goBack()} color='orange' inverted icon='arrow left' content='Volver'/>
      <semantic_ui_react_1.Segment clearing>
        <semantic_ui_react_1.Header content={selectedPet ? `Modificar Informacion de ${selectedPet.name}` : 'Crear Mascota'}/>
        <formik_1.Formik enableReinitialize initialValues={initialValues} validationSchema={validationSchemas_1.createPetValidationSchema} onSubmit={(values, helpers) => {
        handleSubmit(values, helpers);
    }}>
          {(props) => (<semantic_ui_react_1.Grid>
              <semantic_ui_react_1.Grid.Column width={8}>
                <formik_1.Form className='ui form'>
                  <TextInput_1.TextInput label='Nombre' name='name' placeholder='Nombre' value={props.values.name} onChange={props.handleChange} onBlur={props.handleBlur}/>

                  <TextInput_1.TextInput label='Ubicacion' name='location' placeholder='Ubicacion' value={props.values.location} onChange={props.handleChange} onBlur={props.handleBlur}/>

                  <TextInput_1.TextInput label='Raza' name='breed' placeholder='Raza' value={props.values.breed} onChange={props.handleChange} onBlur={props.handleBlur}/>

                  <SelectInput_1.SelectInput label='Adoptado' name='adopted' placeholder='Esta Adoptado' value={props.values.adopted} onChange={props.handleChange} onBlur={props.handleBlur} options={[
        { key: 0, value: 'true', text: 'Si' },
        { key: 1, value: 'false', text: 'No' },
    ]}/>

                  <TextArea_1.TextArea label='Descripccion' name='description' placeholder='Descripccion' value={props.values.description} onChange={props.handleChange} onBlur={props.handleBlur}/>

                  <semantic_ui_react_1.Button loading={props.isSubmitting} disabled={!props.isValid || !props.dirty || props.isSubmitting} type='submit' fluid size='large' color='orange' content={selectedPet ? 'ACTUALIZAR' : 'CREAR'}/>
                </formik_1.Form>
              </semantic_ui_react_1.Grid.Column>
              <semantic_ui_react_1.Grid.Column width={8}>
                {selectedPet && <PetPhotos_1.PetPhotos selectedPet={selectedPet}/>}
              </semantic_ui_react_1.Grid.Column>
            </semantic_ui_react_1.Grid>)}
        </formik_1.Formik>
      </semantic_ui_react_1.Segment>
    </react_1.Fragment>);
};
exports.PetForm = PetForm;
