import React from "react";
import { useVaccine } from '../hooks/useVaccine';
// import './vaccineApp.css';

/**
 * @description UI of the Vaccination application.
 * 
 */
const VaccineApp = () => {
    return (
        <div className='vaccine'>
            <div className='vaccine__input'>
                <p>Welcome to Quizme</p>
                <form>
                    <div className='field'>
                        <label className='field__label'>Enter the Name</label>
                        <input className='field__input' name='value' type='text' data-testid='input-field' />
                    </div>
                    {/* Error message should only be present in the DOM if there is an error. Otherwise it should not be in the DOM. */}
                    <p className='error-message' data-testid='error-message'></p>
                    <button className='button button--submit' type='submit' data-testid='submit-button'>
                        Get Name
                    </button>
                </form>
            </div>
            <div className='vaccine__result'>
                {/* The following div should be in the DOM only when there are any notes dispensed. Otherwise it should not be in the DOM. */}
                <div className='vaccine__result__contents' data-testid='result-list'>
                    <p>Your name is</p>
                    {/* The denominations against their respective quantities should be rendered here. */}
                    {/* The total number of notes dispensed should be rendered in the text-node below. */}
                    <p>Name: </p>
                </div>
            </div>
        </div>
    );
};

export { VaccineApp };