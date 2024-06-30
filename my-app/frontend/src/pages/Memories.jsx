import * as React from "react";
import { useNavigate, Navigate } from 'react-router-dom';

function MyComponent() {
    const navigate = useNavigate();
    const navigateToDash = () => {
        navigate('/dashboard');
    }
    const navigateToMemory = () => {
      navigate('/memory');
  }
  return (
    <>
      <div className="div">
        <div className="div-2">Memories</div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/948ebb2f642f22e8d67ab4be30f46f20cac8ea42b21f770a16b80669f4d957e0?apiKey=5880849d19014bf7921644dd08a954e6&"
          className="img"
          onClick={navigateToMemory}
        />
        <div className="div-3">
          <div className="div-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c15449ed4473015b057fe264caeedc37fff096588958185e0a0172e0cbe4b287?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-2"
            />
            <div className="div-5">Memories</div>
          </div>
          <div className="div-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d558588245cdc4d5585c86a792e697cf3e3b574ffa522c0a75982f4e4d7b61?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-3"
              onClick={navigateToDash}
            />
            <div className="div-7">Home</div>
          </div>
          <div className="div-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bc1b39cce317d4c84e3092ee0ca4cd3a9ad04dbd17a0eeaa2b86f9c11f78cb3?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-4"
            />
            <div className="div-9">Settings</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
            background-color: #fff5bb;
            display: flex;
            height: 800px;
            width: 430px;
            flex-direction: column;
            font-size: 1em;
            color: #472700;
            font-weight: 400;
            font-family: 'Press Start 2P', cursive;
            white-space: nowrap;
            margin: 0 auto;
            padding: 80px 35px;
            text-align: center;
        }
        .div-2 {
            color: #472700;
            margin-top: -80px;
            margin-left: -33px;
            background-color: #ffa800;
            width: 335px;
            font-size: 2em;
            font-weight: bold;
            padding: 10px 80px 18px;
            font: 26px Press Start 2P, -apple-system, Roboto, Helvetica,
                sans-serif;
        }
        .img {
          aspect-ratio: 0.62;
          object-fit: auto;
          object-position: center;
          width: 495px;
          margin-left: -33px;
        }
        .div-3 {
          background-color: rgba(255, 168, 0, 1);
          display: flex;
          width: 404px;
          align-items: start;
          gap: 20px;
          font-size: 8px;
          color: #472700;
          text-align: center;
          justify-content: space-between;
          padding: 21px 46px 20px;
          margin-left: -33px;
        }
        .div-4 {
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          color: #fff8e5;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 35px;
          fill: #fff8e5;
          align-self: center;
        }
        .div-5 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-size: 1.5em;
          margin-top: 6px;
        }
        .div-6 {
          display: flex;
          flex-direction: column;
        }
        .img-3 {
          aspect-ratio: 1.06;
          object-fit: auto;
          object-position: center;
          width: 45px;
          align-self: center;
        }
        .div-7 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-size: 1.5em;
          margin-top: 4px;
        }
        .div-8 {
          display: flex;
          flex-direction: column;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width:45px;
          align-self: center;
        }
        .div-9 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-size: 1.5em;
        }
      `}</style>
    </>
  );
}


export default MyComponent;