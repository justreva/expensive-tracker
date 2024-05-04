import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"

export const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map(transactions => transactions.amount)
	
	return <div className='balance'>
		<h4>Your Balance</h4>
		<h1>${amounts.reduce((acc, elem)=> acc += elem,0)}</h1>
		</div>
}
