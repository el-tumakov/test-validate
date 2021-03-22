import React from "react";
import ValidateComponent from "../ValidateComponent/ValidateComponent";
import SomeComponent from "../SomeComponent/SomeComponent";

const style = {
  display: "flex",
};

const MainComponent = () => {
  return (
    <div style={style}>
      <ValidateComponent number={1}>
        <SomeComponent>
          <ValidateComponent number={2}></ValidateComponent>
        </SomeComponent>
        <SomeComponent>
          <ValidateComponent number={3}>
            <ValidateComponent number={4}></ValidateComponent>
          </ValidateComponent>
        </SomeComponent>
        <ValidateComponent number={5}>
          <SomeComponent />
        </ValidateComponent>
      </ValidateComponent>
    </div>
  );
};

export default MainComponent;
