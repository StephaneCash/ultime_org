import React from 'react';
import "./Video.css"

const Video = () => {
    return (
        <div className='videos'>
            <div className='title'>Nos vidéos</div>
            <div className='col1'>
                <div className='card'>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed?v=h8LeQmemNgU&pp=ygUXZm9uZGF0aW9uIHVsdGltZSBlc3BvaXI%3D"
                        target="_parent"
                        allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Vidéo"
                        name="inframe"
                    >
                    </iframe>
                </div>
                <div className='card'>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed?v=h8LeQmemNgU&pp=ygUXZm9uZGF0aW9uIHVsdGltZSBlc3BvaXI%3D"
                        target="_parent"
                        allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Vidéo"
                        name="inframe"
                    >
                    </iframe>
                </div>
            </div>

            <button className='btn'>Toutes nos vidéos</button>
        </div>
    )
}

export default Video