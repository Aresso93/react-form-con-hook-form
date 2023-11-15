import { useFormContext } from "react-hook-form";
import EditModal from "./edit-modal";
import { LocationForm } from "./location-form";
import { PreferencesForm } from "./preference-form";
import TravellerForm from "./traveller-form";
import { Button, Checkbox, FormControlLabel } from "@mui/material";

export default function Recap(){
   const formContext = useFormContext()
   const stringBirthDate = formContext.getValues("date of birth").toString();
   const stringDepartureDate = formContext.getValues("date of departure").toString();
   const stringReturnDate = formContext.getValues("date of return").toString();
    return (
    <>
      <h3>
         Terms and conditions
      </h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        provident consequatur sint quibusdam, quam distinctio tempore excepturi
        aperiam nam eius culpa mollitia possimus illum aliquid numquam? Omnis
        illum molestiae saepe.

        <small>
         PLEASE NOTE: by submitting your data you confirm that we can steal all
          of your gummy bears
        </small>
        <hr />
        <FormControlLabel control={<Checkbox/>} label="I accept" /><br />
        <Button
        variant="outlined"
        >
         Submit
        </Button>
    <div className="recap-modal">
      Your personal information: <br></br>
      <span>Full name: {formContext.getValues("fullName")}</span>
      <span>Email address: {formContext.getValues("email")}</span>
      <span>Gender: {formContext.getValues("gender")}</span>
      <span>Date of birth: {stringBirthDate}</span>
     <EditModal>
        <TravellerForm/>
     </EditModal>
    </div>
    <div className="recap-modal">
      Information about your travel: <br></br>
      <span>Destination: {formContext.getValues("destination")}</span>
      <span>Date of departure: {stringDepartureDate}</span>
      <span>Date of return: {stringReturnDate}</span>
     <EditModal>
        <LocationForm/>
     </EditModal>
     </div>
     <div className="recap-modal">
      Information about your preferences: <br></br>
      <span>Method of accommodation: {formContext.getValues("accommodation")}</span>
      <span>Selected meals: </span>
     <EditModal>
        <PreferencesForm/>
     </EditModal>
      </div>

    </>
    )
}