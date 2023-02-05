import React,{useState, useRef, useMemo, useEffect} from "react";


function App(){
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries =>{
        const [entry]=entries; //const entry = entries[0];
        setIsVisible(entry.isIntersecting);
    }

    const options=useMemo(()=>{
        return {
            root:null,
            rootMargin:'0px',
            threshold:0.3
        } 
    },[]);
    // {
    //     root:null,
    //     rootMargin:'0px',
    //     threshold:0.3
    // }
    
    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options);
        const currentTarget = targetRef.current;
        if(currentTarget) observer.observer(currentTarget);

        return()=>{
            if(currentTarget) observer.unobserve(currentTarget);
        }
    }, [targetRef, options]);


    return (
        <>
        <h1 className="header"><p>{!isVisible?'not in viewport':'in viewport'}</p></h1>
        <div className="gap"></div>
        <img alt="temp" src="Img/port.PNG" ref={targetRef}></img>
        </>
    );
}

export default App;