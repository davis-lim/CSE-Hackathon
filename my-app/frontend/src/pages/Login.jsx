import * as React from "react";
import { useNavigate, Navigate } from 'react-router-dom'

function MyComponent() {
    const navigate = useNavigate();
    const navigateToRego = () => {
        navigate('/');
    }
    const navigateToDash = () => {
      navigate('/dashboard');
    }
return (
    <>
        <div className="div">
            <div className="div-2">
                <div className="div-3">
                    <img
                        loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7132cf2e1f7a04714987dd765782cf85de65fd62d78bcdbdb09f180e98753c6?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img"
              onClick={navigateToRego}
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6098babe168ce0090457221eb207d77bd135a12da5c6238f40210d523c13cf79?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-2"
            />
          </div>
          <div className="div-4">
            <div className="div-5">BeeYou</div>
          </div>
        </div>
        <div className="div-7">Login</div>
        <div className="div-8">Username</div>
        <input className="div-9" type="text" />
        <div className="div-10">Password</div>
        <input className="div-11" type="text"/>
        <button className="div-12" onClick={navigateToDash}>Login</button>
      </div>
      <style jsx>{`
        .div {
            background-color: #fff5bb;
            display: flex;
            height: 800px;
            width: 430px;
            flex-direction: column;
            font-size: 20px;
            font-family: 'Press Start 2P', cursive;
            color: #472700;
            font-weight: 400;
            white-space: nowrap;
            margin: 0 auto;
            padding: 80px 35px;
        }
        .div-2 {
          display: flex;
          gap: 9px;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 60px;
          border-radius: 30.5px;
          box-shadow: 0px 7px 4px 0px rgba(255, 168, 0, 0.6);
        }
        .img-2 {
          aspect-ratio: 1.04;
          object-fit: auto;
          object-position: center;
          width: 79px;
          align-self: end;
          margin-top: 21px;
        }
        .div-4 {
          align-self: end;
          display: flex;
          margin-top: 117px;
          flex-direction: column;
          font-size: 24px;
          font-weight: 400;
          white-space: nowrap;
        }
        .div-5 {
          color: #FFBF00;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .div-7 {
            color: #472700;
            align-self: center;
            margin-top: 42px;
            font: 400 26px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-size: 2.5em;
        }
        .div-8 {
          color: #472700;
          align-self: start;
          margin: 45px 0 0 23px;
          font: 400 15px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-9 {
          border-radius: 11px;
          box-shadow: 0px 10px 4px 0px rgba(255, 168, 0, 0.16);
          background-color: #fff9e6;
          margin-top: 12px;
          height: 51px;
        }
        .div-10 {
          color: #472700;
          align-self: start;
          margin: 36px 0 0 23px;
          font: 400 15px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-11 {
          border-radius: 11px;
          box-shadow: 0px 10px 4px 0px rgba(255, 168, 0, 0.16);
          background-color: #fff9e6;
          margin-top: 12px;
          height: 51px;
            
        }
        .div-12 {
            border-radius: 30.5px;
            box-shadow: 0px 10px 4px 0px rgba(255, 168, 0, 0.6);
            background-color: #ffe17e;
            align-self: center;
            margin-top: 61px;
            width: 100%;
            max-width: 100%;
            color: #472700;
            white-space: nowrap;
            justify-content: center;
            padding: 26px 60px;
            font-family: 'Press Start 2P', cursive;
            font-size: 1em;
            transition-duration: 0.4s;
        }
        .div-12:hover {
            background-color: #FFBF00; /* Yellow */
            color: white;
        }
      `}</style>
    </>
  );
}


export default MyComponent;