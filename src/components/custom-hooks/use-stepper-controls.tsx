import { useState } from "react";

export function useStepperControls() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log('666666666666')
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return {
    actions: {
      handleNext,
      handleBack,
      handleReset,
    },
    states: { activeStep },
  };
}

// se step è 1 e errori pagina 1 tutti undefined, allora avanti

  // altrimenti se step è 2 e errori pagina 2 tutti undefined, allora avanti

  // altrimenti se step è 3 e errori pagina 3 tutti undefined, allora avanti


  if (stepperControls.states.activeStep === 0 && errors.page1 === undefined){
    stepperControls.actions.handleNext()
  } else if (stepperControls.states.activeStep === 1 && errors.page2 === undefined){
    stepperControls.actions.handleNext()
  } else if (stepperControls.states.activeStep === 2 && errors.page3 === undefined){
    stepperControls.actions.handleNext()
  }