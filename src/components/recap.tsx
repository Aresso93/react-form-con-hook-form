import EditModal from "./edit-modal";
import { LocationForm } from "./location-form";
import { PreferencesForm } from "./preference-form";
import TravellerForm from "./traveller-form";

export default function Recap(){

    return (
    <>
     <EditModal>
        <TravellerForm/>
     </EditModal>

     <EditModal>
        <LocationForm/>
     </EditModal>

     <EditModal>
        <PreferencesForm/>
     </EditModal>

    </>
    )
}