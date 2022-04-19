import { useLocalStorageState } from "./localStorage";
import { useForm } from "react-hook-form";
import { table } from 'bulma';
import { Table } from "./Table";
import initialBankList from '../initialBankList.json';

export const Banks = () => {
  const [banksList, setBanksList] = useLocalStorageState('todos', initialBankList);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setBanksList([...banksList, data])
    reset();
  }

  const onDelete = (name) => {
    const updatedBanksList = banksList.filter(bank => bank.name !== name)
    setBanksList(updatedBanksList);
  }

  return (
    <>
      <div className="banks__container">
        <form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="form__title">ADD NEW BANK</h3>
          <div className="form__container">
            <div>
              <div className="form__input-container">
                <div className="form__input-title">
                  <div>Bank name:</div>
                </div>
                <input
                  {...register('name', {
                    required: true,
                  })}
                  type="text"
                  className="form__input-input"
                />
              </div>
              <div className="form__input-container">
                <div className="form__input-title">
                  <div>Interest rate:</div>
                </div>
                <input
                  {...register('rate', {
                    required: true,
                  })}
                  type="number"
                  className="form__input-input"
                />
              </div>
              <div className="form__input-container">
                <div className="form__input-title">
                  <div>Maximum loan:</div>
                </div>
                <input
                  {...register('loan', {
                    required: true,
                  })}
                  type="number"
                  className="form__input-input"
                />
              </div>
            </div>

            <div>
              <div className="form__input-container">
                <div className="form__input-title">
                  <div>Down payment:</div>
                </div>
                <input
                  {...register('payment', {
                    required: true,
                  })}
                  type="text"
                  className="form__input-input"
                />
              </div>
              <div className="form__input-container">
                <div className="form__input-title">
                  <div>Loan term:</div>
                </div>
                <input
                  {...register('term', {
                    required: true,
                  })}
                  type="number"
                  className="form__input-input"
                />
              </div>
              <button type="submit" className="form__button">Submit</button>
            </div>
          </div>
        </form>
        {!!banksList.length && (
          <Table
            banksList={banksList}
            onDelete={onDelete}
          />
        )}
      </div>
    </>
  )
}
