export const DeleteClient = async (clientId) => {
    const response = await fetch(`https://apibanco.onrender.com/api/cliente/${clientId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Error al eliminar el cliente');
    }

    return response.json();
};
