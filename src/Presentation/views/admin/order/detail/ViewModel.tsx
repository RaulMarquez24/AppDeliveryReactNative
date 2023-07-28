import React, { useContext, useEffect, useState } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';

interface DropDownProps {
    label: string,
    value: string
}

const AdminOrderDetailViewModel = (order: Order) => {

    const [total, setTotal] = useState(0.0);
    const [deliveryMen, setDeliveryMen] = useState<User[]>([]);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);

    useEffect(() => {
        setDropDownItems();
    }, [deliveryMen])

    const dispatchOrder = () => {
        console.log('REPARTIDOR SELECCIONADO: ', value);
        
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
        getTotal,
        getDeliveryMen,
        setOpen,
        setValue,
        setItems,
        dispatchOrder,
    }
}

export default AdminOrderDetailViewModel;