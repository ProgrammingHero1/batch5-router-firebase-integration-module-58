import {useState} from 'react';
const useFirebase = () =>{
    const [user, setUser] = useState({});

    const singInWithGoogle = () =>{
        console.log('singing in soon');
    }
    
    return {
        user, 
        singInWithGoogle
    }
}

export default useFirebase;