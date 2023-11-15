import { useFormContext } from "react-hook-form";
import EditModal from "./edit-modal";
import { LocationForm } from "./location-form";
import { PreferencesForm } from "./preference-form";
import TravellerForm from "./traveller-form";


export default function Recap(){
   const formContext = useFormContext()
   console.log('CCCCCCCCCCC', formContext.getValues("date of birth".$L))

    return (
    <>
    <div className="recap-modal">
      Your personal information: <br></br>
      <span>Full name: {formContext.getValues("fullName")}</span>
      <span>Email address: {formContext.getValues("email")}</span>
      <span>Gender: {formContext.getValues("gender")}</span>
      {/* <span>Date of birth: {formContext.getValues("date of birth".$d)}</span> */}
     <EditModal>
        <TravellerForm/>
     </EditModal>
    </div>

     <EditModal>
        <LocationForm/>
     </EditModal>

     <EditModal>
        <PreferencesForm/>
     </EditModal>


    </>
    )
}