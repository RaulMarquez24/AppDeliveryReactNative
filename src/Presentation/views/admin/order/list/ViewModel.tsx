import React, { useContext, useEffect, useState } from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/order/GetByStatusOrder';
import { Order } from '../../../../../Domain/entities/Order';

const AdminOrderListViewModel = () => {

    const [orders, setOrders] = useState<Order[]>([])

    const getOrders = async (status: string) => {
        const result = await GetByStatusOrderUseCase(status);
        setOrders(result);
        // console.log('ORDENES '+ JSON.stringify(result, null, 3));
    }

    return {
        orders,
        getOrders
    }
}

export default AdminOrderListViewModel;