import { useEffect } from 'react';

function useSessionStorage(key, obj) {
 let data = JSON.stringify(obj);
  useEffect(() => {
   window.sessionStorage.setItem(key, data);
  }, [key, data]);
 
}

export default useSessionStorage;