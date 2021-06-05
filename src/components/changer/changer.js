import { useState } from 'react';
import './changer.css'

const Changer = ( { createSentence, inputType } ) => {
  const [sentence, setSentence] = useState('');
  const [newSentence, setNewSentence] = useState('');
  const [error, setError] = useState('');

  const addSentence = event => {
    setSentence(event.target.value);
    setNewSentence(createSentence(event.target.value))
  }

  const clearInputs = e => {
    e.preventDefault();
    setSentence('');
    setNewSentence('');
    setError('');
  }

  const copySentence = e => {
    e.preventDefault();
    navigator.clipboard.writeText(newSentence)
  }

    return (
      <form>
        <input
          type='text'
          placeholder={`Your ${inputType}`}
          name='sentence'
          value={sentence}
          onChange={e => addSentence(e)}
        />
        <section className="return">
        {!!newSentence && newSentence}
        </section>
        <button id="copyText" onClick={ event => copySentence(event)}>
          Copy {inputType}!
        </button>
        <button id="clear" onClick={ event => clearInputs(event)}>
        Clear
        </button>
      </form>
    )
  }


export default Changer;
