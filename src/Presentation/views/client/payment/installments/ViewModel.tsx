import React, { useContext, useState, useEffect } from 'react'
import { GetInstallmentsMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/GetInstallmentsMercadoPago';
import { ResponseMercadoPagoCardTocken } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoCardTocken';
import { ShoppingBagContext } from '../../../../context/ShoppingBagContext';
import { PayerCost } from '../../../../../Data/sources/remote/models/ResponseMecadoPagoInstallments';

interface DropDownProps {
    label: string,
    value: string
}

const PaymentInstallmentsViewModel = (CardToken: ResponseMercadoPagoCardTocken) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const {total} = useContext(ShoppingBagContext);
    const [installments, setInstallments] = useState<PayerCost[]>([])

    useEffect(() => {
        if (installments.length > 0) {
            setDropDownItems();
        }
    }, [installments])
    

    const getInstallments = async () => {
        const result = await GetInstallmentsMercadoPagoUseCase(CardToken.first_six_digits, (10000+total)); // Pasar total solo, pero como esta en pesos el metodo de pago da error
        setInstallments(result.payer_costs);
        
    }

    const setDropDownItems = () => {
        let itemInstallments: DropDownProps[] = [];
        installments.forEach(i => {
            itemInstallments.push({
                label: i.recommended_message,
                value: i.installments.toString()
            })
        });
        setItems(itemInstallments);
    }

    return {
        open,
        value,
        items,
        installments,
        setOpen,
        setValue,
        setItems,
        getInstallments,
    }
}

export default PaymentInstallmentsViewModel;