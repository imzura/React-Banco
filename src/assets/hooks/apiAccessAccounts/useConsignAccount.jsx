export const ConsignAccount = async (numberAccount, amount, accessKey) => {
    console.log(JSON.stringify({ amount, accessKey }));
    const response = await fetch(`https://apibanco.onrender.com/api/cuenta/consignar/${numberAccount}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, accessKey }),
    });

    if (!response.ok) {
        throw new Error('No se pudo consignar dinero.');
    }

    return response.json();
};
