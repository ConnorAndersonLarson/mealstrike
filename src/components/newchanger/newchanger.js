class NewChanger extends Component {
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
    if(!!this.state.sentence) {
      this.createSentence(this.state.sentence)
      this.clearInputs()
    }
  }

  addSentence

}
