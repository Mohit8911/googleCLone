import {useEffect, useState} from 'react';
const API_KEY = "AIzaSyA_-uRbQCMjjSQnOsVVJt7Y4g4bT2btBNc";
const CONTEXT_KEY = "b6c3ebd9a5fb14292";

const useGoogleSearch = (term) => {
    const [data,setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response) => response.json()).then((result) => {
                setData(result);
            })
        }
        fetchData();
    }, [term])
    
    return { data };
}

export default useGoogleSearch;
