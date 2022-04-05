import {useEffect, useState} from 'react';
const useFirebase = () =>{
    const [user, setUser] = useState({});

    useEffect( () =>{

    }, []);

    const singInWithGoogle = () =>{
        console.log('singing in soon');
    }

    return [user, setUser];
}

export default useFirebase;