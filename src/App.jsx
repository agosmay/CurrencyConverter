import './App.css'
import { useState , useEffect } from 'react';
import axios from 'axios';

const App = () => {
	
	const [valor, setValor] = useState("")
	const [data, setData] = useState()

	const [isLoading, setIsLoading] = useState(true)
	const [valorVenta, setValorVenta]= useState("")
	const [valorCompra, setValorCompra]= useState("")
	
	const [error, setError]= useState(false)
	
	const fetchingData = async () => {
	
		
		try {
			const res = await axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
			const parseo = parseFloat(res.data[0].casa.compra);
			
			const importeTotal = parseo * valor;
			setData(importeTotal);
			
		
			
		}catch{
			setError(true)
			
		}finally {
			setIsLoading(false)
		}
		
		setValor("")
		
	}
	

	const handleChange = (e) => {
		
		const numeroIngresado = parseFloat(e.target.value)
		setValor(numeroIngresado)
	}
	
	
	const fetchingValores = async () => {
		try {
			const res= await axios('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
			setValorCompra(res.data[0].casa.compra)
			setValorVenta(res.data[0].casa.venta)
		
			
		}catch {
			setError(true)
			
			
		}finally {
			setIsLoading(false)
			
		}
		
		
	}
	
		
		useEffect(()=> {
			
			fetchingValores();
		},[])
		
		const handleReset= () => {
			setData("")
		}

  return (
	<>
		 <div className="App">
			<div className="container text-center">
				<p className="price">Precio de Venta : {valorVenta}</p>
				<p className="price">Precio de Compra : {valorCompra}</p>
			</div>
				
			  <div className="container text-center">
				  <h1>Welcome to Currency App</h1>
				  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Insert amount of money in USD" onChange={handleChange} value={valor} />
				  
				  <div className="botonera">
					  <button type="submit" className="btn btn-primary" onClick={()=>fetchingData()}>Calculate pesos</button>  
					  <button type="reset" className="btn btn-danger" onClick={()=> handleReset()}> Reset </button>
				  </div>
			  </div>
			  {
					
					data ?  <p className="price text-center">su conversion es ${data}</p> : <p>{""}</p>
					
				}
			
			
		</div>
	</>
  )
}

export default App