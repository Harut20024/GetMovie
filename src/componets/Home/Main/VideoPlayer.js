import React from 'react';

function VideoPlayer({ source }) {
    const videoId = source.split('/').pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <iframe
            width="750"
            height="500"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    );
}

export default VideoPlayer;
