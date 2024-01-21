import React ,{useId} from 'react'


function InputBox({
  label, // these are function inputs 
  amount,
  onAmountChange,
  // currency is form array list
  onCurrencyChange,
  currencyOptions =[],
  selectCurrency = "inr", // by default selected currency 
  amountDisable = false, // if somne user don't want to give amount 
  currencyDisable = false,

  className = "",// this is use for when user to give their custom css
}) {
const amountInputId = useId();// use for optimzation

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled ={amountDisable}
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}// && here this use for checking that onAmountChange is existing or Not js not we prove a default value, Number use for currency converter 
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // default value
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled = {currencyDisable}
        >
          {currencyOptions.map((currency)=>( // we are using map here to select multiple currency 
          // here we are using key for performance optimzation
            <option key ={currency} value={currency}>   
            {currency}
          </option>
          )

          )}
          

        </select>
      </div>
    </div>
  );
}

export default InputBox;
