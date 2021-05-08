import React, { Component } from 'react';
import './changer.css'

class Changer extends Component {
  constructor() {
    super();
    this.state = {
      sentence: '',
      newSentence: '',
      error: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!!this.state.sentence) {
      this.createSentence(this.state.sentence)
      this.clearInputs()
    }
  }

  addSentence = event => {
    this.setState({ [event.target.name]: event.target.value});
    this.createSentence(event.target.value)
  }

  createSentence = (sent) => {
    let count = 0;
    let ns = sent.toLowerCase().split(' ').reduce((acc, word) => {
      let newWord = word.split('').map(letter => {
        if (count % 2 !== 0 && letter / 1 !== undefined) {
          count++
          return letter.toUpperCase()
        } else {
          count++
          return letter
        }
      })
      return `${acc} ${newWord.join('')}`
    }, '')
    this.setState({newSentence: ns})
  }

  clearInputs = e => {
    e.preventDefault()
    this.setState({sentence: '', newSentence: '', error: ''});
  }

  copySentence = event => {
    event.preventDefault()
    navigator.clipboard.writeText(this.state.newSentence)
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Your sentence'
          name='sentence'
          value={this.state.sentence}
          onChange={e => this.addSentence(e)}
        />
        <section className="return">
        {!!this.state.newSentence && this.state.newSentence}
        </section>
        <button id="copyText" onClick={e => this.copySentence(e)}>
          Copy Sentence!
        </button>
        <button id="clear" onClick={e => this.clearInputs(e)}>
        Clear
        </button>
      </form>
    )
  }

}

export default Changer;
