import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useApi = () => {
    
    const [data, setData] = useState("");
    const serverUrl = 'http://localhost:5000';

    const { getAccessTokenSilently } = useAuth0();

    useEffect(  () => {
       const x = async () => {
        try {
            const token = await getAccessTokenSilently();
            console.log('in useApi :>> ', token);

            const response = await fetch(
                `${serverUrl}/api/messages/protected-message`,
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                }
            );

            const responseData = await response.json();

            setData(responseData);
            } catch (error) {
                console.log('error :>> ', error);
                setData(null);
            }
       } 
       x()
    }, [])
    return [data, setData]

}