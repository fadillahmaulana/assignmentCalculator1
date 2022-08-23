import { useState } from 'react';
import './App.css';

function App() {
  const [hasilAkhir, setHasilAkhir] = useState('');

  const handleClick = (e) => {
    if(hasilAkhir === "Syntax Error"){
      setHasilAkhir('')
    }
    else
      setHasilAkhir(hasilAkhir.concat(e.target.value))
    
  }  
  const clearAll=()=>{
    setHasilAkhir('')
  }

  const clearEntry=()=>{
    try {
      if(hasilAkhir === "Syntax Error"){
        setHasilAkhir('')
      }
      else
      setHasilAkhir(hasilAkhir.slice(0,-1))
    } catch (error) {

    }
  }

  const handleClick0 = (e) =>{
    if(hasilAkhir !== "0"){
      setHasilAkhir(hasilAkhir.concat(e.target.value))
    }
  }

  const handleClickequal = ()=>{
    try{
    setHasilAkhir(hasilAkhir.concat("=").concat(eval(hasilAkhir).toString()))
  } catch (error) {
    setHasilAkhir("Syntax Error")
  }
  }
  

   return (
    <div className='calcu'>
      <input type="text" id="hasil" value={hasilAkhir}></input>
      <input type="button" value="AC" className='btnDigit' onClick={clearAll}></input>
      <input type="button" value="CE" className='btnDigit' onClick={clearEntry}></input>
      <input type="button" value="/" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="*" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="7" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="8" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="9" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="-" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="4" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="5" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="6" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="+" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="1" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="2" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="3" className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="." className='btnDigit' onClick={handleClick}></input>
      <input type="button" value="0" className='btnDigit0' onClick={handleClick0}></input>
      <input type="button" value="=" className='btnDigitequal' onClick={handleClickequal}></input>

      
    </div>
  );
}

export default App;
