import React, { useRef, useState, useEffect, useCallback, useContext } from 'react'
import { log } from 'react-native-reanimated';
import { GetIdentificationTypesMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/GetIdentificationTypesMercadoPago';
import { IdentificationType } from '../../../../../Domain/entities/IdentificationType';
import { CreateCardTokenMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/CreateCardTokenMercadoPago';
import { CardTokenParams, Cardholder, Identification } from '../../../../../Data/sources/remote/models/CardTokenParams';
import { ResponseMercadoPagoCardTocken } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoCardTocken';
// @ts-ignore
import stripe from 'react-native-stripe-client'
import { CreatePaymentStripeUseCase } from '../../../../../Domain/useCases/stripe/CreatePaymentStripe';
import { ShoppingBagContext } from '../../../../context/ShoppingBagContext';
import { UserContext } from '../../../../context/UserContext';
import { ResponseStripePayment } from '../../../../../Data/sources/remote/models/ResponseStripePayment';

interface DropDownProps {
  label: string,
  value: string
}

const ClientPaymentFormViewModel = () => {

  const creditCardRef = useRef() as any;
  const [values, setValues] = useState({
    brand: '',
    cvv: '',
    expiration: '',
    holder: '',
    number: '',
  });

  const stripeClient = stripe("pk_test_51NZZSkLbwhf8X80Xv86TY9frkJfl9EDZxSGoVFUy5S4RO1hxuTyVEnYM54Z6kONmYBlVVdoyGj7cpdz6Pndpgfvz00faOS1wEi");
  const { total, shoppingBag } = useContext(ShoppingBagContext);
  const { user } = useContext(UserContext);

  const [identificationValues, setIdentificationValues] = useState({
    identificationNumber: '',
    identificationType: '',
  });

  const [identificationTypeList, setIdentificationTypeList] = useState<IdentificationType[]>([])

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<DropDownProps[]>([]);
  const [cardToken, setCardToken] = useState<ResponseMercadoPagoCardTocken>();
  const [payMethod, setPayMethod] = useState('mercadopago');
  const [loading, setLoading] = useState(false);
  const [stripePaymentData, setStripePaymentData] = useState<ResponseStripePayment>();
  const [paySucces, setPaySucces] = useState(true);

  useEffect(() => {
    onChange('identificationType', value);
  }, [value])


  useEffect(() => {
    // console.log('VALUES FORM: ', JSON.stringify(values, null, 3));
    // console.log('iIDENTIFICATION VALUES FORM: ', JSON.stringify(identificationValues, null, 3));
    if (values.brand !== '' && values.cvv !== '' && values.expiration !== '' && values.holder !== '' && values.number !== '') {
      if (payMethod === 'mercadopago') {
        createCardToken();
      }else if (payMethod === 'stripe') {
        createTokenStripe();
      }
    }
  }, [values])

  useEffect(() => {
    setDropDownItems();
  }, [identificationTypeList])

  const createTokenStripe = async () => {
    const response = await stripeClient.createPaymentMethod("card", {
      number: values.number.replace(/\s/g,''),
      exp_month: parseInt(values.expiration.split('/')[0]),
      exp_year: parseInt(values.expiration.split('/')[1]),
      cvc: values.cvv
    });

    console.log('RESPONSE STRIPE: ' + JSON.stringify(response, null, 3));

    if (response.id !== undefined && response.id !== null) {
      setLoading(true);
      const result = await CreatePaymentStripeUseCase(response.id, (total * 100), { //pasar los € a centimos!!
        id_client: user.id!,
        id_address: user.address?.id!,
        products: shoppingBag
      });
      setStripePaymentData(response);
      setPaySucces(result.success);

      console.log('RESPONSE: ' + JSON.stringify(result, null, 3));
      setLoading(false);
    }
  }

  const changeMethod = (method: string) => {
    if (method === 'mercadopago') {
      setPayMethod('mercadopago')
    }else if (method === 'stripe') {
      setPayMethod('stripe');
    }
  }

  const createCardToken = async () => {

    const data: CardTokenParams = {
      card_number: values.number.replace(/\s/g,''),
      expiration_year: values.expiration.split('/')[1],
      expiration_month: parseInt(values.expiration.split('/')[0]),
      security_code: values.cvv,
      cardholder: {
        name: values.holder,
        identification: {
          number: identificationValues.identificationNumber,
          type: identificationValues.identificationType
        }
      }
    }
    const result = await CreateCardTokenMercadoPagoUseCase(data);
    if (result) {
      if (result.id !== '') {
        setCardToken(result);
      }
    }
    console.log('MERCADO PAGO CARD TOKEN', JSON.stringify(result, null, 3));

  }

  const getIdentificationTypes = async () => {
    const result = await GetIdentificationTypesMercadoPagoUseCase();
    setIdentificationTypeList(result);
  }

  const onChange = (property: string, value: any) => {
    setIdentificationValues({ ...identificationValues, [property]: value });
  }

  const setDropDownItems = () => {
    let itemsIdentification: DropDownProps[] = [];
    identificationTypeList.forEach(identification => {
      itemsIdentification.push({
        label: identification.name,
        value: identification.id
      })
    });
    setItems(itemsIdentification);
  }

  const handleSubmit = useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      if (error === null && data !== null) {
        setValues(data);
      }
      console.log('ERROR: ', error);
      console.log('CARD DATA: ', data);
    }
  }, []);

  return {
    creditCardRef,
    identificationTypeList,
    ...identificationValues,
    open,
    value,
    items,
    cardToken,
    payMethod,
    loading,
    stripePaymentData,
    paySucces,
    handleSubmit,
    getIdentificationTypes,
    setOpen,
    setValue,
    setItems,
    onChange,
    createCardToken,
    changeMethod,
  }
}

export default ClientPaymentFormViewModel;