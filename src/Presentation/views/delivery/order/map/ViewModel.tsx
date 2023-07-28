import React, { useContext, useState, useEffect, useRef } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/category/CreateCategory'
import { CategoryContext } from '../../../../context/CategoryContext';
import * as Location from 'expo-location';
import MapView, { Camera } from 'react-native-maps';
import { Order } from '../../../../../Domain/entities/Order';

const DeliveryOrderMapViewModel = (order: Order) => {

    const [messagePermissions, setMessagePermissions] = useState('');
    const [refPoint, setRefPoint] = useState({
        name: '',
        latitude: 0.0,
        longitude: 0.0,
    });
    const [postion, setPostion] = useState<Location.LocationObjectCoords>();
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

        const requestPermissions = async () => {
            const foreground = await Location.requestForegroundPermissionsAsync();

            if (foreground.granted) {
                startForegroundUpdate();
            }
        }

        requestPermissions();

    }, [])

    const onRegionChangeComplete = async (latitude: number, longitude: number) => {
        try {
            const place = await Location.reverseGeocodeAsync({
                latitude: latitude,
                longitude: longitude,
            });

            let city;
            let street;
            let streetNumber;

            place.find(p => {
                city = p.city;
                street = p.street;
                streetNumber = p.streetNumber;
                setRefPoint({
                    name: `${street}, ${streetNumber}, ${city}`,
                    latitude: latitude,
                    longitude: longitude
                });
            })

        } catch (error) {
            console.log('ERROR: ' + error);

        }
    }

    const startForegroundUpdate = async () => {
        const { granted } = await Location.getForegroundPermissionsAsync();

        if (!granted) {
            setMessagePermissions('Permiso de ubicacion denegado');
            return;
        }

        const location = await Location.getLastKnownPositionAsync(); // UBICACION UNA SOLA VEZ
        setPostion(location?.coords);
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

        positionSuscription?.remove();

        positionSuscription = await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.BestForNavigation
            },
            location => {
                // console.log('POSITION: ' + JSON.stringify(location?.coords, null, 3));
                
                setPostion(location?.coords);
            }
        )
    }

    const stopForegroundUpdate = () => {
        positionSuscription?.remove();
        setPostion(undefined);
    }

    return {
        messagePermissions,
        postion,
        mapRef,
        ...refPoint,
        origin,
        destination,
        onRegionChangeComplete,
        stopForegroundUpdate,
    }
}

export default DeliveryOrderMapViewModel;