import React, { useState } from 'react'

const AdminCategoryCreateViewModel = () => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        image: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    return {
        ...values,
        onChange
    }
}

export default AdminCategoryCreateViewModel;