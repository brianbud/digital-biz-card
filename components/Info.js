import React from "react"

function Info(){
    return(
        <div className="info">
            <img className="profile-pic" src="/images/avatar.png" />
            <h1>Brian Buddhadasa</h1>
            <h2>Frontend Developer</h2>
            <p>hello@brianbud.com</p>
            <div className="buttons" >
                <a href="mailto:hello@brianbud.com" target="_blank">Email</a>
                <a href="https://www.linkedin.com/in/brianbud/" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}

export default Info