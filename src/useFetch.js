//custom hook is a fun start with use takes url as arg so fun can be reusable
//use link into navbar provided by react router  to prevent hit server for each route 
// but when we switch so fast it may cause error because of the old page still running in the background so we gonna use clear effect . 
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); //cleanup //which stop fetching data in back ground if u swithed another page 

    setTimeout(() => { //just to test loading page 
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') { // make condition first to check the error .
                    console.log('fetch aborted')
                  } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                  }
      })
    }, 100);
     // abort the fetch
     return () => abortCont.abort(); //will stop fetching here in that moment within switching exactly .
     //   but it will stop fetching only not catch block so catch still work and state changes with same error so (look up)


  }, [url]) // means watch url and render for every change of it 

  //  to use when fun call 
  return { data, isPending, error };
  
}
 
export default useFetch;





 
