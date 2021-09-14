import { useEffect, useState } from "react";

export const useForm = (formInitial, initData = null) => {
    const [form, setForm] = useState(formInitial);
    const [isValidForm, setIsValidForm] = useState(false);

    const setInitialData = () => {
        if (initData !== null && typeof initData !== 'undefined') {
            let intiForm = { ...formInitial };

            for (var [key, value] of Object.entries(initData)) {
                intiForm[key].value = value;
            }

            setForm(intiForm);
            validForm(intiForm);
        }
    };

    useEffect(() => {
        setInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputValue = (event) => {
        const { name, value } = event.target;
        let { msg: error } = form[name].validator(value);

        const setNewForm = (newForm) => {
            setForm(newForm);
            validForm(newForm);
        }

        setNewForm({
            ...form,
            [name]: {
                ...form[name],
                error,
                value
            }
        });
    };

    const validForm = (newForm) => {
        let ret = true;

        if (newForm) {
            for (var [, value] of Object.entries(newForm)) {
                ret = value.error === null;

                ret = value.required ? ret && value.value !== "" : ret;

                if (!ret)
                    break;
            }
        } else {
            ret = false;
        }

        setIsValidForm(ret);
    }

    return {
        form,
        handleInputValue,
        isValidForm
    };
};