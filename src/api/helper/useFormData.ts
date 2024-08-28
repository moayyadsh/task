export function appendData(formData:any, data:any) {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] === 'object' && data[key] !== null) {
                if (data[key] instanceof File || data[key] instanceof Blob) {
                    formData.append(key, data[key]);
                } else {
                    appendData(formData, data[key]);
                }
            } else {
                formData.append(key, data[key]);
            }
        }
    }
}   