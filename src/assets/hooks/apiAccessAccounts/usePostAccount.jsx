export const AddAccount = async (accountData) => {
    try {
        console.log('Datos enviados al servidor:', accountData);

        const response = await fetch('https://apibanco.onrender.com/api/cuenta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accountData),
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            console.error('Error del servidor:', errorDetails);
            throw new Error('Error al crear cuenta');
        }

        const result = await response.json();
        console.log('Respuesta del servidor:', result);

        return result;
    } catch (error) {
        console.error('Error al crear cuenta:', error);
        throw error;
    }
};
