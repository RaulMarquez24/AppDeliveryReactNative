import React, { useContext, useEffect, useState } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';

const AdminOrderDetailViewModel = (order: Order) => {

    const [total, setTotal] = useState(0.0);
    const [deliveryMen, setDeliveryMen] = useState<User[]>([]);

    const getDeliveryMen = async () => {
        const result = await GetDeliveryMenUserUseCase();
        setDeliveryMen(result);
    }

    const getTotal = () => {

        let calculatedTotal = 0.0;
        order.products.forEach((p) => {
            calculatedTotal += p.price * p.quantity!;
        });
        setTotal(calculatedTotal);
    };

    return {
        total,
        deliveryMen,
        getTotal,
        getDeliveryMen,
    }
}

export default AdminOrderDetailViewModel;