import React from 'react'

export default function Animation() {
    return (
        <div className='animationcontainer'>
              <div className="icon">
              <div
                className="bar barone"
                style={{ backgroundColor: "#3498db", marginLeft: "-60px" }}
              ></div>
              <div
                className="bar bartwo"
                style={{ backgroundColor: "#e74c3c", marginLeft: "-20px" }}
              ></div>
              <div
                className="bar barthree"
                style={{ backgroundColor: "#f1c40f", marginLeft: "20px" }}
              ></div>
              <div
                className="bar barfour"
                style={{ backgroundColor: "#27ae60", marginLeft: "60px" }}
              ></div>
            </div>
            <p className='listeningpara '>Listening.....</p>

          
        </div>
    )
}
