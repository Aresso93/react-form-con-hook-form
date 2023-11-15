import { useFormContext } from "react-hook-form";
import EditModal from "./edit-modal";
import { LocationForm } from "./location-form";
import { PreferencesForm } from "./preference-form";
import TravellerForm from "./traveller-form";


export default function Recap(){
   const formContext = useFormContext()

    return (
    <>
    <div className="recap-modals">
      Your information: formContext
     <EditModal>
        <TravellerForm/>
     </EditModal>

     <EditModal>
        <LocationForm/>
     </EditModal>

     <EditModal>
        <PreferencesForm/>
     </EditModal>

    </div>

    </>
    )
}