export const DeleteAccount = async (accountId) => {
    const response = await fetch(`https://apibanco.onrender.com/api/cuenta/${accountId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('No se puede eliminar una cuenta con saldo mayor a 0');
    }

    return response.json();
}