import React from 'react';
import CalculatorDisplay from './components/DisplayComponents';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton';

import './App.css';

const App = () => {
  return (
    <div className = 'container'>
      <CalculatorDisplay />
      <div className = 'buttons'>
        <div className = 'numbers'>
        <NumberButton buttonStyle={'number'} text={1} />
        <NumberButton buttonStyle={'number'} text={2} />
        <NumberButton buttonStyle={'number'} text={3} />
        <NumberButton buttonStyle={'number'} text={4} />
        <NumberButton buttonStyle={'number'} text={5} />
        <NumberButton buttonStyle={'number'} text={6} />
        <NumberButton buttonStyle={'number'} text={7} />
        <NumberButton buttonStyle={'number'} text={8} />
        <NumberButton buttonStyle={'number'} text={9} />
        </div>
        <div className='operator'>
        <NumberButton buttonStyle={'operator'} text='/' />
        <NumberButton buttonStyle={'operator'} text='*' />
        <NumberButton buttonStyle={'operator'} text='-' />
        <NumberButton buttonStyle={'operator'} text='+' />
        <NumberButton buttonStyle={'operator'} text='=' />
        </div>
      </div>
    </div>
  );
};

export default App;
