export function convertFormDataToObject (formData) {
    let obj = {}
    for (const [key,value] of formData) {
        obj[key] = value
    }
    return obj;
}