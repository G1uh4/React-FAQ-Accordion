import React, {useState} from "react";

export default function Faq(props){


    const [isShown, setIsShown] = useState(false)

    function toggleFaq(){
        setIsShown(prevState => !prevState)
    }

    return(
        <section className="style--faqAccordion">
        <div>
            
            {props.question && <p className="style-faq-question" id="getQuestions">{props.question}</p>}
            <button onClick={toggleFaq} className="style--btn"> {isShown ? "↑" : "↓"} </button>
            {isShown && <p className="style-faq-answer">{props.answer}</p>}

        </div>
        </section>
    )
}