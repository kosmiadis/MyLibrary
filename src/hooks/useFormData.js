import { FormDataCtx } from "../contexts/FormDataContext";
import { useContext } from "react";

export function useFormData () {
    const formDataCtx = useContext(FormDataCtx);
    return formDataCtx;
}