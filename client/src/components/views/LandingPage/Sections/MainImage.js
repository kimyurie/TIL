import React from "react";

function MainImage(){ 
    return (
        <div style={{background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%)`,
        backgroundImage: `url()`, 
        backgroundColor: '#1c1c1c',
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div> 
                <div style={{position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft:'2rem'}}>
                    <h2 style={{color:'white'}}>movie title</h2> 
                    <p style={{color:'white', fontSize: '1rem'}}>movie description</p> 
                </div>
            </div>
        </div>
    )
}

export default MainImage