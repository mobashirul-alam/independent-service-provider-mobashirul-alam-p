import { useEffect, useState } from 'react';

const useGetServiceData = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices];
};

export default useGetServiceData;