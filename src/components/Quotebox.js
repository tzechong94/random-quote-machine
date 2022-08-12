import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'



const Quotebox = ({quote, author, onButtonClick}) => {
    return (
        <div className="quote-box" id="quote-box">
            <div className="quote" id="text">{quote}</div>
            <br></br>
            <div id="author" className="author">{'- ' + author}</div>
            <br></br>

            <div className="container">
                <div className="social-row">
                    {/* <a className="tumblr-button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href={'https://www.tumblr.com/widgets/share/tool?data-content?' + quote}>
                        <FontAwesomeIcon icon={faTumblrSquare} />
    </a>                         */}
                    <a className="twitter-button" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noreferrer" href={'https://twitter.com/intent/tweet?text='+ quote + ' - ' + author}>
                        <FontAwesomeIcon className="twitter-icon" icon={faTwitterSquare} size={"xl"}/>
                    </a>                        
                </div>
                <button onClick={onButtonClick} className="new-quote-btn" id="new-quote">New Quote</button>
            </div>
        </div>
    )
}


export default Quotebox;