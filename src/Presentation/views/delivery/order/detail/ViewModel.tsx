import React, { useContext, useEffect, useState } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';
import { OrderContext } from '../../../../context/OrderContext';

interface DropDownProps {
    label: string,
    value: string
}

const DeliveryOrderDetailViewModel = (order: Order) => {

    const [total, setTotal] = useState(0.0);
    const [responseMessage, setResponseMessage] = useState('')
    const { updateToOnTheWay } = useContext(OrderContext);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);

    const updateToOnTheWayOrder = async () => {
        const result = await updateToOnTheWay(order);
        setResponseMessage(result.message);
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
        open,
        value,
        items,
        responseMessage,
        getTotal,
        setOpen,
        setValue,
        setItems,
        updateToOnTheWayOrder,
        setResponseMessage,
    }
}

export default DeliveryOrderDetailViewModel;