import { useRef, useEffect } from 'react';

export default () => {
  const whiteList = ['http://localhost:4001', 'http://localhost:4002'];
  const employeeRef = useRef(null);
  const receiveMessage = (event) => { 
    if(!whiteList.includes(event.origin)){
      return;
    } 
    const selectedDepartment = event.data;
    frames[1].postMessage(selectedDepartment, 'http://localhost:4001')
  };

  useEffect(()=> {
    window.addEventListener('message',receiveMessage);
    return () => {
      window.removeEventListener('message',receiveMessage);
    }
  }, [receiveMessage]);
  

  return(
    <div>
        <iframe src="http://localhost:4002/" frameborder="0" className="department"/>
        <iframe src="http://localhost:4001/" frameborder="0" className="employee"/>
        <style global jsx>
          {`
             body {
              background-color: #f4f5f2;
             }
          `}
        </style>
        <style jsx>
          {`
            div {
              padding: 1rem;
            }
            iframe{
              width: 100%;
              margin: auto;
            }

            .department {
              height: 4rem;
            }

            .employee{
              height: 30rem;
            }
           
        `}
        </style>
    </div>
  )
}