import { useLocalStorageState } from "./localStorage";
import { useState } from 'react';
import initialBankList from '../initialBankList.json';

export const Calculator = () => {
  const [banksList] = useLocalStorageState('todos', initialBankList);
  const [loan, setLoan] = useState(10000);
  const [downPayment, setDownPayment] = useState(30);
  const [bank, setBank] = useState(banksList[0].name);

  
  const calculatePayment = () => {
    const bankInfo = banksList.find(bankName => bankName.name === bank)
    let amountBorrowed = loan - (loan * (downPayment / 100))

    let i = (bankInfo.rate / 100) / (+bankInfo.term * 12);

    let payments = +bankInfo.term * 12;
    
    let k = (i * Math.pow((1 + i), payments)) / (Math.pow((1 + i), payments) - 1);

    let monthlyPayment = amountBorrowed * k;

    return `$ ${monthlyPayment.toFixed(2)}`;
  }

  return (
    <div className="calculator">
      <h3 className="calculator__title">PAYMENT PLAN</h3>
      <div className="calculator__container">
        <div className="calculator__input-container">
          <div className="form__input-container">
            <div className="form__input-title">
              <div>Initial loan:</div>
            </div>
            <input
              value={loan}
              type="number"
              className="form__input-input"
              onChange={(e) => {
                setLoan(e.target.value)
              }}
            />
          </div>
          <div className="form__input-container">
            <div className="form__input-title">
              <div>Down payment:</div>
            </div>
            <input
              value={ downPayment }
              type="number"
              className="form__input-input"
              onChange={(e) => {
                setDownPayment(e.target.value)
              }}
            />
          </div>
          <div className="form__input-container">
            <div className="form__input-title">
              <div>Bank:</div>
            </div>
            <select
              className="calculator__select"
              value={bank}
              onChange={(e) => {
                console.log(e.target.value)
                
                setBank(e.target.value);
              }}
            >
              {banksList.filter(bank => (
                bank.loan >= loan && bank.payment <= downPayment
              )).map(bank => (
                <option
                  key={bank.name}
                  value={bank.name}
                  >
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="calculator__result-container">
          <div className="calculator__result-title">Monthy payment:</div>
          <div className="calculator__result-price">
            {calculatePayment()}
          </div>
        </div>
      </div>
    </div>
  )
}
