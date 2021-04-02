"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionLoader = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionLoader = () => {
    return (<semantic_ui_react_1.Placeholder fluid>
      <semantic_ui_react_1.Card.Group itemsPerRow={2} doubling stackable>
        <semantic_ui_react_1.Card>
          <semantic_ui_react_1.Placeholder>
            <semantic_ui_react_1.Placeholder.Image />
            <semantic_ui_react_1.Card.Content textAlign='center'>
              <semantic_ui_react_1.Card.Header>
                <semantic_ui_react_1.Placeholder.Line />
              </semantic_ui_react_1.Card.Header>
              <semantic_ui_react_1.Card.Meta>
                <semantic_ui_react_1.Placeholder.Line />
              </semantic_ui_react_1.Card.Meta>
              <semantic_ui_react_1.Card.Description>
                <semantic_ui_react_1.PlaceholderParagraph>
                  <semantic_ui_react_1.Placeholder.Line />
                  <semantic_ui_react_1.Placeholder.Line />
                </semantic_ui_react_1.PlaceholderParagraph>
              </semantic_ui_react_1.Card.Description>
            </semantic_ui_react_1.Card.Content>
          </semantic_ui_react_1.Placeholder>
        </semantic_ui_react_1.Card>

        <semantic_ui_react_1.Card>
          <semantic_ui_react_1.Placeholder>
            <semantic_ui_react_1.Placeholder.Image />
            <semantic_ui_react_1.Card.Content textAlign='center'>
              <semantic_ui_react_1.Card.Header>
                <semantic_ui_react_1.Placeholder.Line />
              </semantic_ui_react_1.Card.Header>
              <semantic_ui_react_1.Card.Meta>
                <semantic_ui_react_1.Placeholder.Line />
              </semantic_ui_react_1.Card.Meta>
              <semantic_ui_react_1.Card.Description>
                <semantic_ui_react_1.PlaceholderParagraph>
                  <semantic_ui_react_1.Placeholder.Line />
                  <semantic_ui_react_1.Placeholder.Line />
                </semantic_ui_react_1.PlaceholderParagraph>
              </semantic_ui_react_1.Card.Description>
            </semantic_ui_react_1.Card.Content>
          </semantic_ui_react_1.Placeholder>
        </semantic_ui_react_1.Card>
      </semantic_ui_react_1.Card.Group>
    </semantic_ui_react_1.Placeholder>);
};
exports.AdopcionLoader = AdopcionLoader;
