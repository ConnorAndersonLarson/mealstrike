import Changer from '../changer/changer';
import './App.css';



function App() {

  const createPhrase = (sent) => {
    let ns = sent.split('o').join('0').split('e').join('3').split('a').join('4').split('l').join('7').split(' ').join('_').split('i').join('1')
    return `XoXo_${ns}_oXoX`;
  }

  const createSentence = (sent) => {
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
    return ns
  }

  return (
		<>
   		<section className="header">
	 		</section>
	 		<div className="body">
	 			<Changer createSentence={createSentence} inputType={'Sentence'} />
        <Changer createSentence={createPhrase} inputType={'Phrase'} />
	 		</div>
		</>
  );
}

export default App;
