export function saveFormData (formData) {
    sessionStorage.setItem('formData', JSON.stringify(formData))
}

export function getFormData () {
    return sessionStorage.getItem('formData');
}

export function deleteFormData () {
    sessionStorage.removeItem('formData');
}