import { useFormContext } from "react-hook-form";
import EditModal from "./edit-modal";
import { LocationForm } from "./location-form";
import { PreferencesForm } from "./preference-form";
import TravellerForm from "./traveller-form";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useEffect } from "react";


export default function Recap(){
   const {watch} = useFormContext();
   useEffect(() => {
      console.log('HHHHHHHHHHH')
    }, []);
    
   const formContext = useFormContext()
   const stringDepartureDate = formContext.getValues("date of departure").toString();
   const stringReturnDate = formContext.getValues("date of return").toString();

    return (
    <>
    <div className="recap-container">
      <h3>
         Terms and conditions
      </h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        provident consequatur sint quibusdam, quam distinctio tempore excepturi
        aperiam nam eius culpa mollitia possimus illum aliquid numquam? Omnis
        illum molestiae saepe.
        <hr />

        <small>
         PLEASE NOTE: by submitting your data you confirm that we can steal all
          of your gummy bears
        </small>
        <FormControlLabel control={<Checkbox/>} label="I accept" /><br />
        <Button
        variant="outlined"
        >
         Submit
        </Button>

    </div>
    <div className="recap-modal">
      Your personal information<br></br>
      <span>Full name: {watch("fullName")}</span>
      <span>Email address: {watch("email")}</span>
      <span>Gender: {watch("gender")}</span>
      <span>Date of birth: {watch("date of birth").toString()}</span>
     <EditModal>
        <TravellerForm/>
     </EditModal>
    </div>
    <div className="recap-modal">
      Information about your travel<br></br>
      <span>Destination: {watch("destination")}</span>
      <span>Date of departure: {watch("date of departure").toString()}</span>
      <span>Date of return: {watch("date of return").toString()}</span>
     <EditModal>
        <LocationForm/>
     </EditModal>
     </div>
     <div className="recap-modal">
      Information about your preferences<br></br>
      <span>Method of accommodation: {watch("accommodation")}</span>
      <span>Selected meals: </span>
     <EditModal>
        <PreferencesForm/>
     </EditModal>
      </div>

    </>
    )
}