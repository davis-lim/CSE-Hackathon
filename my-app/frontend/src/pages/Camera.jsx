import * as React from "react";
import Webcam from "react-webcam";
import { useNavigate } from 'react-router-dom';

function MyComponent() {
    const webRef = React.useRef(null);
    const navigate = useNavigate();
    const taskId = '60ec6c24e1a569001bbbf9a7';

    const showImage = async () => {
        try {
            const image = webRef.current.getScreenshot();
            const response = await fetch('/api/upload-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageUrl: image, task: taskId }),
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Memory created:', result);
            } else {
                console.error('Failed to create memory:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <>
            <div className="div">
                <div className="div-2">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&"
                        className="img"
                        onClick={() => navigate('/dashboard')}
                    />
                    <div className="div-3">
                        <div className="div-5">Challenge</div>
                    </div>
                </div>
                <div className="div-7">Journal for 10 Minutes</div>
                <div className="camera" />
                <Webcam ref={webRef} className="frame"/>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1a19548f02348163efa2d2451d4da1b36afcbe7a038b74087f8949293593b90?apiKey=b5d1be722c29404797af28c1c725d045&"
                    className="img-2"
                    alt="Button"
                    onClick={() => showImage()}
                />
            </div>
            <style jsx>{`
        .div {
          background-color: #fff5bb;
          display: flex;
          height: 800px;
          width: 430px;
          flex-direction: column;
          font-size: 20px;
          color: #472700;
          font-weight: 400;
          white-space: nowrap;
          margin: 0 auto;
          padding: 80px 35px;
        }
        .div-2 {
          align-self: stretch;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          font-size: 20px;
          white-space: nowrap;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 60px;
          border-radius: 30.5px;
          box-shadow: 0px 7px 4px 0px rgba(255, 168, 0, 0.6);
          align-self: start;
        }
        .div-3 {
          align-self: end;
          display: flex;
          margin-top: 48px;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }
        .div-4 {
          color: #ffcb33;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .div-5 {
          color: #472700;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-left: 95px;
        }
        .div-6 {
          color: #472700;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
          margin-top: 16px;
        }
        .div-7 {
          color: #ff9123;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-left: 120px;
        }
        .div-8 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #fff8e5;
          align-self: stretch;
          margin-top: 18px;
          height: 513px;
        }
        .img-2 {
          aspect-ratio: 0.94;
          object-fit: auto;
          object-position: center;
          width: 72px;
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          margin-top: 48px;
          transition-duration: 0.4s;
          position: relative;
          overflow: hidden;
          margin-left: 170px;
          margin-bottom: 50px;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .img-2:hover {
            transform: scale(1.1); /* Scales the image up on hover */
            opacity: 0.8; /* Changes the opacity on hover */
        }

        .img {
            transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .img:hover {
            transform: scale(1.1); /* Scales the image up on hover */
            opacity: 0.8; /* Changes the opacity on hover */
        }

        .frame {
          width: 100%;
          margin-top: 20px;
        }
      `}</style>
        </>
    );
}

export default MyComponent;