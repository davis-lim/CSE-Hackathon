import * as React from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import '../App'


function MyComponent() {
    const navigate = useNavigate();
    const navigateToRego = () => {
        navigate('/hive');
    }
    const navigateToMem = () => {
        navigate('/memories');
    }
    const navigateToRun = () => {
        navigate('/camera');
    }
    let currentWidth = 175;

    const increaseWidth = () => {
        currentWidth = currentWidth + 10;
    };

    const checkComplete = () => {
        // localStorage.clear();
        // increaseWidth()
        return localStorage.getItem('journal');
    }

    const checkCompleteGoals = () => {
        increaseWidth()
        return localStorage.getItem('goals');
    }

    const checkCompleteSunset = () => {
        increaseWidth()
        return localStorage.getItem('sunset');
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

        { checkComplete() || checkCompleteGoals() || checkCompleteSunset() ? <div className="line" style={{display: 'block', width: '${currentWidth + 1}px'}}></div> : <div className="line" style={{display: 'none'}}></div> }

        <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e753a817da62a0d300efb6846e775858093839f0b7cc8881c2e62bf694a8fed3?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="hive"
            onClick={navigateToRego}
        />
        <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c95a91f10e4d5c63421433818f5a0a10c5dc6250efe40a992ad1d8a5b561f83e?apiKey=5880849d19014bf7921644dd08a954e6&"
        className="edit"
        onClick={() => navigate('/edit')}
        />
        <div className="div-6">
            <div className="div-7">Daily Tasks </div>
        </div>
        { checkComplete() ? <div className="div-9" style={{backgroundColor: 'lightgreen'}} >Go for a run</div> : <div className="div-9" onClick={navigateToRun}  >Go for a run</div> }
        { checkCompleteGoals() ? <div className="div-10" style={{backgroundColor: 'lightgreen'}} >Write down goals for today</div> : <div className="div-10" onClick={() => navigate('/goals')}  >Write down goals for today</div> }
        { checkCompleteSunset() ? <div className="div-11" style={{backgroundColor: 'lightgreen'}} >Catch the sunset</div> : <div className="div-11" onClick={() => navigate('/sunset')}  >Catch the sunset</div> }
        {/* <div className="div-10" onClick={() => navigate('/goals')} >Write down goals for today</div>  */}
        {/* <div className="div-11" onClick={() => navigate('/sunset')}>Catch the sunset</div> */}
        <div className="div-12">
            <div className="navbarpics">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66cdcae9ee8ea68fa549a3a7460b8b98387941dc866f647e5172ea79ca76b07d?apiKey=5880849d19014bf7921644dd08a954e6&"
                className="memz"
                onClick={navigateToMem}
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bec2f47ce4baf6a47d76a6b24172e0131237f88be2127450ade0827e8d93ae8?apiKey=5880849d19014bf7921644dd08a954e6&"
                    className="home"
                />
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e496741e080e6dee77de2794a4ca07f55a5adce2ebfe44a68ec94a303a905fac?apiKey=5880849d19014bf7921644dd08a954e6&"
                className="friends"
                />
            </div>
            <div className="navbarheadings">
                <span>Memories</span>
                <span>Home</span>
                <span className="friens">Settings</span>
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
        }
        .navbarheadings {
            display: flex;
        }
        .line {
            background-color: #fff9e6;
            position: fixed;
            height: 12px;
            width: 280px;
            margin-top: 396px;
            margin-left: 47px;
        }
        .hive {
            aspect-ratio: 1;
            position: fixed;
            object-fit: auto;
            object-position: center;
            width: 60px;
            margin-top: 40px;
            margin-left: 8px;
        }
        .edit {
            aspect-ratio: 1;
            position: fixed;
            object-fit: auto;
            object-position: center;
            width: 60px;
            margin-top: 40px;
            margin-left: 360px;
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
            padding: 30px 60px 18px;
        }
        .div-12 {
            background-color: #ffa800;
            align-self: stretch;
            position: fixed;
            display: flex;
            width: 380px;
            flex-direction: column;
            font-size: 26px;
            white-space: nowrap;
            margin-top: 800px;
            margin-left: -35px;
            padding: 20px 60px 15px;
        }
        .navbarpics{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
        }
        .navbarheadings{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-left: -10px;
            margin-top: 10px;
            font-size: 0.4em;
            font-family: 'Press Start 2P', cursive;
        }
        .friens{
            margin-right: -15px;
            margin-left: 18px
        }
        .memz {
            width: 35px;
            
        }
        .home {
            width: 35px;
        }
        .friends {
            width: 35px;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
        }

        .div-4 {
            color: #84460B;
            font-family: 'Press Start 2P', cursive;
            z-index: 10;
            font-size: 1.5em;
        }
        .img {
          aspect-ratio: 1.16;
          object-fit: auto;
          object-position: center;
          margin-left: -35px;
          width: 500px;
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
          font-family: 'Press Start 2P', cursive;
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
          font-size: 0.8em;
          align-items: center;
          display: flex;
          justify-content: center;
          font-family: 'Press Start 2P', cursive;
        }
        .div-10 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffd456;
          margin-top: 16px;
          width: 100%;;
          max-width: 100%;
          height: 66px;
          font-weight: bold;
          font-size: 0.7em;
          align-items: center;
          display: flex;
          justify-content: center;
          font-family: 'Press Start 2P', cursive;
        }
        .div-11 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(234, 117, 0, 0.7);
          background-color: #ffe086;
          margin-top: 16px;
          width: 100%;;
          max-width: 100%;
          height: 66px;
          font-weight: bold;
          font-size: 0.8em;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          font-family: 'Press Start 2P', cursive;
        }
      `}</style>
    </>
  );
}

export default MyComponent;

