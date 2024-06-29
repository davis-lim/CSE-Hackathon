import * as React from "react";
import { useNavigate, Navigate } from 'react-router-dom';

function MyComponent() {
    const navigate = useNavigate();
    const navigateToRego = () => {
        navigate('/memories');
    }
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d1edeb3c2b146d8cef3dce8e6dbbfe0adb791d563deac1b048546f10657a75d?apiKey=b5d1be722c29404797af28c1c725d045&"
            className="img"
            onClick={navigateToRego}
          />
          <div className="div-3">
            <div className="div-4">2 June</div>
          </div>
        </div>
        <div className="div-6">Meditate for 5 Minutes</div>
        <div className="div-8" />
        <div className="div-9">
          <div className="div-10">Comments</div>
          <div className="div-12">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f44e1e9c6bf7584add1a8beaa24b6b398f2c744fbe04712cf8196d9e3ceae3b?apiKey=b5d1be722c29404797af28c1c725d045&"
              className="img-2"
            />
            <div className="div-13">BuzzLightyear:I love meditating</div>
          </div>
          <div className="div-14">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c59c8ccd63014d5d8ef850a1275188bac82de845656d8d5b138f6c23b0b60cb6?apiKey=b5d1be722c29404797af28c1c725d045&"
              className="img-3"
            />
            <div className="div-15">SweetSwarm: Yay!!</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff5bb;
            display: flex;
            max-height: 800px;
            max-width: 430px;
            flex-direction: column;
            font-size: 20px;
            color: #472700;
            font-weight: 400;
            white-space: nowrap;
            margin: 0 auto;
            padding: 80px 35px;
            font-family: 'Press Start 2P', cursive;
        }
        .div-2 {
          display: flex;
          align-items: flex-start;
          gap: 20px;
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
        }
        .div-6 {
          color: #472700;
          align-self: center;
          z-index: 10;
          margin-top: 18px;
          margin-bottom: 20px;
        }
        .div-7 {
          color: #ff9123;
          align-self: center;
          font: 14px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-8 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #fff8e5;
          margin-top: 18px;
          height: 513px;
        }
        .div-9 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffcb33;
          display: flex;
          margin-top: 27px;
          width: 100%;
          flex-direction: column;
          color: #472700;
          padding: 17px;
          margin-left: -15px;
        }
        .div-10 {
          color: #fff5bb;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .div-11 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          align-self: start;
          margin-left: 11px;
        }
        .div-12 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffe086;
          display: flex;
          margin-top: 12px;
          gap: 8px;
          font-size: 8px;
          text-align: center;
          padding: 5px 14px;
        }
        .img-2 {
          aspect-ratio: 1.03;
          object-fit: auto;
          object-position: center;
          width: 37px;
        }
        .div-13 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-14 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffe086;
          display: flex;
          margin-top: 10px;
          gap: 8px;
          font-size: 8px;
          text-align: center;
          padding: 5px 14px;
        }
        .img-3 {
          aspect-ratio: 1.03;
          object-fit: auto;
          object-position: center;
          width: 37px;
        }
        .div-15 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
      `}</style>
    </>
  );
}

export default MyComponent;