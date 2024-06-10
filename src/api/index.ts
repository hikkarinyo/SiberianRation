export const sendApplication = async (formData: FormData) => {
    try {
        formData.append('sales_channel_id', '')
        const response = await fetch('', {
            method: 'PUT',
            body: JSON.stringify(Object.fromEntries(formData)),
        })
        return await response.json()
    } catch (error) {
        throw error
    }
}