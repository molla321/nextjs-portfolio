import  { useEffect, useState } from 'react';

const useScrollyProgres = () => {
    const [completion, setCompletion] = useState()

    useEffect( ()=> {
        const updataScrollComption = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight;

            if (scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100) ;
            }

        };
        window.addEventListener('scroll', updataScrollComption)
    }, [])
    return completion

};

export default useScrollyProgres;