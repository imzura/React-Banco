import React, { useState } from "react";

const useHookAccess = (initForm = {}) => {
    const [form, setForm] = useState(initForm)

    //guardar datos en el storage
    const onInputChange = (initForm) => {
        localStorage.setItem('user', JSON.stringify(initForm));
    }

    const onResetForm = () => {
        setForm(initForm)
    }
    return{
        setForm,
        onInputChange,
        onResetForm,
    }
}

export default useHookAccess;
