import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LocationForm } from "./location-form";
import { PreferencesForm } from "./preference-form";
import TravellerForm from "./traveller-form";
import Recap from "./recap";
import { useFormContext } from "react-hook-form";
import { useStepperControls } from "./custom-hooks/use-stepper-controls";

const steps = ["You", "Your destination", "Your preferences"];
const onSubmit = (data) => console.log("AAAAAAAA", data);

export default function TravellerStepper() {
  const {handleSubmit}= useFormContext();
  const stepperControls = useStepperControls();
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepperControls.states.activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepperControls.states.activeStep === steps.length ? (
        <React.Fragment>
          <Recap />
          <div className="reset-button-container">
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={stepperControls.actions.handleReset}>
                Go back to page 1
              </Button>
            </Box>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {stepperControls.states.activeStep + 1}/{steps.length}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
            {stepperControls.states.activeStep === 0 && <TravellerForm />}

            {stepperControls.states.activeStep === 1 && <LocationForm />}

            {stepperControls.states.activeStep === 2 && <PreferencesForm />}
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
            <Button
              onClick={() => {
                stepperControls.actions.handleNext();
                handleSubmit(onSubmit);
              }}
            >
              {stepperControls.states.activeStep === steps.length - 1
                ? "Finish"
                : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      <Button
        color="inherit"
        disabled={stepperControls.states.activeStep === 0}
        onClick={stepperControls.actions.handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
    </Box>
  );
}
