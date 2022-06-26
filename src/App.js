import faqQuestions from './faqQuestions';
import SocialMedia from './components/socialMedia';
import Faq from './faq';
import './App.css';

function App() {

 const faqQuestion = faqQuestions.map(faq => {
  return(
    <Faq 
    key={faq.id}
    question={faq.question}
    answer={faq.answer}

    />
  )
 })

  return (
    <div className="App">
      {faqQuestion}
      <SocialMedia />
    </div>
  );
}

export default App;
