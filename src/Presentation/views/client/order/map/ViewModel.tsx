import React, { useContext, useState, useEffect, useRef } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/category/CreateCategory'
import { CategoryContext } from '../../../../context/CategoryContext';
import * as Location from 'expo-location';
import MapView, { Camera } from 'react-native-maps';
import { Order } from '../../../../../Domain/entities/Order';
import { OrderContext } from '../../../../context/OrderContext';
import socket from '../../../../utils/SocketIO';

const ClientOrderMapViewModel = (order: Order) => {

    const [messagePermissions, setMessagePermissions] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [refPoint, setRefPoint] = useState({
        name: '',
        latitude: 0.0,
        longitude: 0.0,
    });
    const [postion, setPostion] = useState({
            latitude: 0.0,
            longitude: 0.0,
        });
    const [origin, setOrigin] = useState({
        latitude: 0.0, //default origin point to
        longitude: 0.0,
    });
    const [destination, setDestination] = useState({
        latitude: order.address?.lat!,
        longitude: order.address?.lng!,
    });
    const mapRef = useRef<MapView | null>(null);
    let positionSuscription: Location.LocationSubscription;

    useEffect(() => {
        socket.connect();
        socket.on('connect', ()=> {
            console.log('------------ SOCKET IO CONNECTION ------------');
        });
        socket.on(`position/${order.id!}`, (data) =>{
            setPostion({latitude: data.lat, longitude: data.lng});
        });
        const requestPermissions = async () => {
            const foreground = await Location.requestForegroundPermissionsAsync();

            if (foreground.granted) {
                startForegroundUpdate();
            }
        }

        requestPermissions();

    }, [])

    const startForegroundUpdate = async () => {
        const { granted } = await Location.getForegroundPermissionsAsync();

        if (!granted) {
            setMessagePermissions('Permiso de ubicacion denegado');
            return;
        }

        const location = await Location.getLastKnownPositionAsync(); // UBICACION UNA SOLA VEZ
        setOrigin({
            latitude: location?.coords.latitude!,
            longitude: location?.coords.longitude!,
        });
        const newCamera: Camera = {
            center: { latitude: location?.coords.latitude!, longitude: location?.coords.longitude! },
            zoom: 15,
            heading: 0,
            pitch: 0,
            altitude: 0
        };
        mapRef.current?.animateCamera(newCamera, { duration: 2000 });
    }

    return {
        messagePermissions,
        postion,
        mapRef,
        ...refPoint,
        origin,
        destination,
        responseMessage,
        socket,
    }
}

export default ClientOrderMapViewModel;