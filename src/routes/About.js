import React from "react"
import './About.css'
function About(props){
    console.log("In About")
    console.log(props)
    return(
        // <div>Jerry Fletcher:
        // Love gives you wings. It makes you fly. I don't even call it love. 
        // I call it Geronimo. When you're in love, you'll jump right from the 
        // top of the Empire State and you won't care, screaming "Geronimo" the whole way 
        // down. I love her so bad, I just... whoa, she wrecks me. I'd die for her.
        
        <div className="about__container">
        <span>
        Jerry Fletcher:
        Love gives you wings. It makes you fly. I don't even call it love. 
        I call it Geronimo. When you're in love, you'll jump right from the 
        top of the Empire State and you won't care, screaming "Geronimo" the whole way 
        down. I love her so bad, I just... whoa, she wrecks me. I'd die for her.
        </span>
        <span>− Conspiracy Theory (1997)</span>
        </div>
        // </div>
        )
}

export default About;