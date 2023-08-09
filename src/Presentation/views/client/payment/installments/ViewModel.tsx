import React, { useContext, useState, useEffect } from 'react'
import { GetInstallmentsMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/GetInstallmentsMercadoPago';
import { ResponseMercadoPagoCardTocken } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoCardTocken';
import { ShoppingBagContext } from '../../../../context/ShoppingBagContext';
import { PayerCost, ResponseMercadoPagoInstallments } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoInstallments';
import { PaymentParams } from '../../../../../Data/sources/remote/models/PaymentParams';
import { CreatePaymentMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/CreatePaymentMercadoPago';
import { UserContext } from '../../../../context/UserContext';

interface DropDownProps {
    label: string,
    value: string
}

const PaymentInstallmentsViewModel = (cardToken: ResponseMercadoPagoCardTocken) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const {total, shoppingBag} = useContext(ShoppingBagContext);
    const { user } = useContext(UserContext);
    const [installments, setInstallments] = useState<PayerCost[]>([]);
    const [installmentData, setInstallmentData] = useState<ResponseMercadoPagoInstallments>()
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (installments.length > 0) {
            setDropDownItems();
        }
    }, [installments])
    
    const createPayment = async () => {
        const data: PaymentParams = {
            installments: value!,
            issuer_id: installmentData?.issuer.id!,
            payment_method_id: installmentData?.payment_method_id!,
            transaction_amount: (total + 10000), // Pasar total solo, pero como esta en pesos el metodo de pago da error
            token: cardToken.id,
            payer: {
                email: user.email,
                identification: {
                    number: cardToken.cardholder.identification.number,
                    type: cardToken.cardholder.identification.type,
                }
            },
            order: {
                id_client: user.id!,
                id_address: user.address?.id!,
                products: shoppingBag,
            }
        }
        setLoading(true);
        const result = await CreatePaymentMercadoPagoUseCase(data);
        setLoading(false);
        setResponseMessage(result.message);
    }

    const getInstallments = async () => {
        const result = await GetInstallmentsMercadoPagoUseCase(cardToken.first_six_digits, (10000+total)); // Pasar total solo, pero como esta en pesos el metodo de pago da error
        setInstallments(result.payer_costs);
        setInstallmentData(result);
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
        responseMessage,
        loading,
        setOpen,
        setValue,
        setItems,
        getInstallments,
        createPayment,
    }
}

export default PaymentInstallmentsViewModel;