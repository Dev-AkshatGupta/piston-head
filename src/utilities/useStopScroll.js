const { useEffect } = require("react")

const useStopScroll=()=>{
    useEffect(()=>{
        document.querySelector("body").scroll()
    },[]);

}