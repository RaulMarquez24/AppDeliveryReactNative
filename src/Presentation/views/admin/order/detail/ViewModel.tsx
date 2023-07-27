import React, { useContext, useEffect, useState } from 'react'
import { Order } from '../../../../../Domain/entities/Order';

const AdminOrderDetailViewModel = (order: Order) => {

    const [total, setTotal] = useState(0.0)

    useEffect(() => {
        if (total == 0.0) {
            getTotal();
        }
    }, [])


    const getTotal = () => {

        let calculatedTotal = 0.0;
        order.products.forEach((p) => {
            calculatedTotal += p.price * p.quantity!;
        });
        setTotal(calculatedTotal);
    };

    return {
        total,
        getTotal,
    }
}

export default AdminOrderDetailViewModel;