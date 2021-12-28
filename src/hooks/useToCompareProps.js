import { useEffect, useRef } from 'react';

function useToCompareProps(value) {
 
  const prevRef = useRef();
  const curRef = useRef(value);
  
  useEffect(() => {
    prevRef.current = curRef.current;
    curRef.current = value;
  },[value]);
  console.log("prev:", prevRef, "cur:", curRef);
 
  if (prevRef.current!==curRef.current) {
    return false
  } else { return true };
}

export default useToCompareProps;