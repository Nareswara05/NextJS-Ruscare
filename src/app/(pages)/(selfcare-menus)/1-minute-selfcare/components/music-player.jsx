import React, { useEffect, useRef } from 'react';

const MusicPlayer = ({ url }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error('Error playing audio:', error);
            });
        }
    }, []);

    return (
        <audio ref={audioRef} src={url} loop />
    );
};

export default MusicPlayer;
