import React, { useContext, useEffect, useState } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';
import { UpdateToDispatchedOrderUseCase } from '../../../../../Domain/useCases/order/UpdateToDispatchedOrder';
import { OrderContext } from '../../../../context/OrderContext';

interface DropDownProps {
    label: string,
    value: string
}

const DeliveryOrderDetailViewModel = (order: Order) => {

    const [total, setTotal] = useState(0.0);
    const [deliveryMen, setDeliveryMen] = useState<User[]>([]);
    const [responseMessage, setResponseMessage] = useState('')
    const {updateToDispatched} = useContext(OrderContext);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);

    useEffect(() => {
        setDropDownItems();
    }, [deliveryMen])

    const dispatchOrder = async () => {
        if (value !== null) {
            order.id_delivery = value!;
            const result = await updateToDispatched(order);
            setResponseMessage(result.message);
        } else {
            setResponseMessage('Selecciona el repartidor');
        }
    }

    const setDropDownItems = () => {
        let itemDeliveryMen: DropDownProps[] = [];
        deliveryMen.forEach(delivery => {
            itemDeliveryMen.push({
                label: delivery.name + '' + delivery.lastname,
                value: delivery.id!
            })
        });
        setItems(itemDeliveryMen);
    }

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
        open,
        value,
        items,
        responseMessage,
        getTotal,
        getDeliveryMen,
        setOpen,
        setValue,
        setItems,
        dispatchOrder,
        setResponseMessage,
    }
}

export default DeliveryOrderDetailViewModel;