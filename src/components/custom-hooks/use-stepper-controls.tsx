import { useState } from "react";

export function useStepperControls() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
  