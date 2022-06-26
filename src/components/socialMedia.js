import React from "react";

export default function SocialMedia(){
    return(
        <div className="display-social-media">

            <a href="https://www.linkedin.com/in/ahmed-gluhic-489b51235/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" 
            className="styleLinkedIn"
            alt="LinkedIn"
            />
            </a>

            <a href="https://github.com/GluhaCodesBiH" target="_blank">
            <img 
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
            className="styleGitHub"
            alt="GitHub"
            />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100077656403374" target="_blank">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
            className="styleFacebook"
            alt="Facebook"
            />
            </a>

        </div>
    )
}