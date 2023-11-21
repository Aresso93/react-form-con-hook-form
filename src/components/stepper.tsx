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
export default function TravellerStepper() {
  const {
    formState: { errors },
    trigger,
  } = useFormContext();
  const stepperControls = useStepperControls();
  let step1 = stepperControls.states.activeStep === 0;
  let step2 = stepperControls.states.activeStep === 1;
  let step3 = stepperControls.states.activeStep === 2;

  function conditionalStepper() {
    if (step1 && errors.page1 === undefined) {
      stepperControls.actions.handleNext();
    } else if (step2 && errors.page2 === undefined) {
      stepperControls.actions.handleNext();
    } else if (step3 && errors.page3 === undefined) {
      stepperControls.actions.handleNext();
    }
  }

  async function nextStep() {
    if (step1) {
      if (await trigger("page1")) {
        conditionalStepper();
      }
    } else if (step2) {
      if (await trigger("page2")) {
        conditionalStepper();
      }
    } else if (step3) {
      if (await trigger("page3")) {
        conditionalStepper();
      }
      //bruttarello, questo. Non farlo se non assolutamente necessario
      // trigger("page3");
      // let dirtyForm3Length = Object.keys(dirtyFields.page3).length;
      // if (dirtyForm3Length === 1 && errors.page3 === undefined) {
      //   conditionalStepper();
      // }
    }
  }

  return (
    <Box className="mat-box">
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
            {step1 && <TravellerForm />}

            {step2 && <LocationForm />}

            {step3 && <PreferencesForm />}
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
            <Button onClick={nextStep}>
              {stepperControls.states.activeStep === steps.length - 1
                ? "Finish"
                : "Next"}
            </Button>
            {/* //tutti campi dirty e errori undefined, vai avanti */}
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
