export const WithdrawAccount = async (numberAccount, amount, accessKey) => {
    console.log(JSON.stringify({ amount, accessKey }));
    const response = await fetch(`https://apibanco.onrender.com/api/cuenta/retirar/${numberAccount}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, accessKey }),
    });

    if (!response.ok) {
        throw new Error('No se pudo retirar el dinero.');
    }

    return response.json();
};
