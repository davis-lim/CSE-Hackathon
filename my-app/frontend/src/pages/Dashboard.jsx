import * as React from "react";
import { useNavigate, Navigate } from 'react-router-dom';

function MyComponent() {
    const navigate = useNavigate();
    const navigateToRego = () => {
        navigate('/');
    }
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Home</div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/743be299490fdfe6da31a40e70b598e4ffbf6467fd27275ee969b22cab6ba175?apiKey=5880849d19014bf7921644dd08a954e6&"
          className="img"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&"
          className="hive"
          onClick={navigateToRego}
        />
        <div className="div-6">
          <div className="div-7">Daily Tasks </div>
        </div>
        <div className="div-9">Go for a walk in the park</div> 
        <div className="div-10" />
        <div className="div-11" />
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
        .hive {
            aspect-ratio: 1;
            position: absolute;
            object-fit: auto;
            object-position: center;
            width: 2.5%;
            margin-top: 50px;
            margin-left: 33px;
        }
        .div-2 {
          background-color: #ffa800;
          align-self: stretch;
          display: flex;
          width: 380px;
          flex-direction: column;
          align-items: center;
          font-size: 26px;
          white-space: nowrap;
          margin-top: -80px;
          margin-left: -35px;
          padding: 40px 60px 18px;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
        }
        .div-4 {
          color: #84460B;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
          font-size: 1.5em;
        }
        .div-5 {
          color: #472700;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img {
          aspect-ratio: 1.16;
          object-fit: auto;
          object-position: center;
          width: 430px;
          align-self: stretch;
        }
        .div-6 {
          border-radius: 25px;
          box-shadow: 0px 3px 4px 0px rgba(234, 117, 0, 0.7);
          border-color: rgba(71, 39, 0, 1);
          border-style: solid;
          border-width: 3px;
          background-color: #ffcb33;
          display: flex;
          margin-top: 15px;
          flex-direction: column;
          font-size: 20px;
          padding: 13px 17px;
          width: 60%;
          align-self: center;
        }
        .div-7 {
          color: #84460B;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
          align-self: center;
          font-weight: bold;
        }
        .div-9 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffcb33;
          margin-top: 16px;
          width: 100%;
          max-width: 100%;
          height: 66px;
          margin-top: 30px;
          font-weight: bold;
          font-size: 1.2em;
          align-text: center;
        }
        .div-10 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffd456;
          margin-top: 16px;
          width: 100%;;
          max-width: 100%;
          height: 66px;
        }
        .div-11 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffe086;
          margin-top: 16px;
          width: 100%;;
          max-width: 100%;
          height: 66px;
        }
      `}</style>
    </>
  );
}

export default MyComponent;

