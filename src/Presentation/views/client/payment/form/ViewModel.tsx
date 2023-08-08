import React, { useRef, useState, useEffect, useCallback } from 'react'
import { log } from 'react-native-reanimated';
import { GetIdentificationTypesMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/GetIdentificationTypesMercadoPago';
import { IdentificationType } from '../../../../../Domain/entities/IdentificationType';
import { CreateCardTokenMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/CreateCardTokenMercadoPago';
import { CardTokenParams, Cardholder, Identification } from '../../../../../Data/sources/remote/models/CardTokenParams';
import { ResponseMercadoPagoCardTocken } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoCardTocken';

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

  const [identificationValues, setIdentificationValues] = useState({
    identificationNumber: '',
    identificationType: '',
  });

  const [identificationTypeList, setIdentificationTypeList] = useState<IdentificationType[]>([])

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<DropDownProps[]>([]);
  const [cardToken, setCardToken] = useState<ResponseMercadoPagoCardTocken>();

  useEffect(() => {
    onChange('identificationType', value);
  }, [value])


  useEffect(() => {
    // console.log('VALUES FORM: ', JSON.stringify(values, null, 3));
    // console.log('iIDENTIFICATION VALUES FORM: ', JSON.stringify(identificationValues, null, 3));
    if (values.brand !== '' && values.cvv !== '' && values.expiration !== '' && values.holder !== '' && values.number !== '') {
      createCardToken();
    }
  }, [values])

  useEffect(() => {
    setDropDownItems();
  }, [identificationTypeList])

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
    handleSubmit,
    getIdentificationTypes,
    setOpen,
    setValue,
    setItems,
    onChange,
    createCardToken,
  }
}

export default ClientPaymentFormViewModel;