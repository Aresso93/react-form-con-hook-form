import { PropsWithChildren, createContext, useContext } from "react";
import { useValidation } from "./custom-hooks/use-validation";

export const ValidationContext = createContext({
    states:{
        errors: {}
    }
})

export const ValidationProvider = ({children}: PropsWithChildren) => {
    const validation = useValidation()

    return (
        <ValidationContext.Provider value={validation}>
            {children}
        </ValidationContext.Provider>
    )
}

export const useValidationContext = () => useContext(ValidationContext)