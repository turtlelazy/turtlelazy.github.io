import React, { useEffect, useRef, useState } from 'react';

const Mp4FrameViewer = ({ videoSrc, runningTime, framePercent, topScroll, height }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const captureFrame = async () => {
            if (video && context) {
                const seconds = runningTime * framePercent;
                video.currentTime = seconds;

                video.onseeked = () => {
                    // Clear the canvas before drawing
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    // Draw the video frame on the canvas
                    context.drawImage(
                        video,
                        0, topScroll > 0 ? 0 : canvas.height * (topScroll * -1) / height * 0.7,  // Source X, Y (crop from bottom)
                        canvas.width, canvas.height ,  // Source Width, Height
                    );
                };
            }
        };

        captureFrame();
    }, [framePercent]);

    return (
        <div className='w-[100%]'>
            <div>
                <video ref={videoRef} src={videoSrc} className='w-[100%]' style={{ display: 'none' }} />
                <canvas ref={canvasRef} className='w-[100%]' />
            </div>
        </div>
    );
};

export default Mp4FrameViewer;
