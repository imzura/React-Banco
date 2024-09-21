import React from "react";

export const AddClient = async (clientData) => {
    const response = await fetch('https://apibanco.onrender.com/api/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
    });

    if (!response.ok) {
        throw new Error('Error al agregar cliente');
    }

    return await response.json();
};
