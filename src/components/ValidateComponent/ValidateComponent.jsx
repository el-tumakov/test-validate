import React, {PureComponent, createContext} from "react";

const styleDiv = {
  position: "relative",
  display: "flex",
  gap: "20px",
  width: "100%",
  padding: "50px",
  backgroundColor: "lightblue",
  border: "1px solid blue",
};

const styleButton = {
  position: "absolute",
  top: "5px",
  left: "5px",
};

const Context = createContext({
  addChildValidation: () => {},
  removeChildValidation: () => {},
});

class ValidateComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      childValidations: [],
    };

    this.addChildValidation = this.addChildValidation.bind(this);
    this.removeChildValidation = this.removeChildValidation.bind(this);
    this.validate = this.validate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static contextType = Context;

  addChildValidation(item) {
    this.setState((oldState) => ({
      childValidations: [...oldState.childValidations, item],
    }));
  }

  removeChildValidation(item) {
    this.setState((oldState) => {
      const {childValidations} = oldState;
      const indexValidation = childValidations.lastIndexOf(item);

      return {
        childValidations: [
          ...childValidations.slice(0, indexValidation),
          ...childValidations.slice(indexValidation + 1),
        ],
      };
    });
  }

  validate() {
    console.log(`ValidateComponent ${this.props.number}: validate!`);
  }

  handleClick() {
    this.validate();
    this.state.childValidations.forEach((childValidate) => {
      childValidate();
    });
  }

  componentDidMount() {
    this.context.addChildValidation(this.validate);
  }

  componentWillUnmount() {
    this.context.removeChildValidation(this.validate);
  }

  render() {
    return (
      <Context.Provider
        value={{
          addChildValidation: this.addChildValidation,
          removeChildValidation: this.removeChildValidation,
        }}
      >
        <div style={styleDiv}>
          <button style={styleButton} onClick={this.handleClick}>
            ValidateComponent {this.props.number}
          </button>
          {this.props.children}
        </div>
      </Context.Provider>
    );
  }
}

export default ValidateComponent;
