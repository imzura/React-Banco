export const UpdateClient = async (id, updatedClient) => {
    try {
        const response = await fetch(`https://apibanco.onrender.com/api/cliente/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedClient),
        });

        if (!response.ok) {
            throw new Error('Error updating client');
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating client:', error);
        throw error; 
    }
};