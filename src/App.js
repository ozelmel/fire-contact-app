import './App.css';
import {useState} from "react";
import FormComponent from './components/form/FormComponent';
const initialValues={username:"",phoneNumber:"",gender:"NO INFO"}
function App() {
 const [info,setInfo]=useState(initialValues);

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo}/>
    </div>
  );

    
          
            
    

          
    
    
  
}
export default App;