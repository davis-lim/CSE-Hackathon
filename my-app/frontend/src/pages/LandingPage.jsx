import * as React from "react";
// import tailwind from "tailwindcss";
import { useNavigate, Navigate } from 'react-router-dom';


function MyComponent() {
  const navigate = useNavigate();
  const navigateToRego = () => {
    navigate('/rego');
  }
  const navigateToLogin = () => {
    navigate('/login');
  }
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9be6fb264e6b59c7aab4ced85fc27c159fe3ec923695cce9717b9abce8d097b?apiKey=5880849d19014bf7921644dd08a954e6&"
          className="img"
        />
        <div className="div-2">BeeYou</div>
        <button className="div-3" onClick={navigateToLogin}>Login</button>
        <button className="div-4" onClick={navigateToRego}>Register</button>
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
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 200px;
          align-self: center;
          margin-top: 91px;
          max-width: 100%;
        }
        .div-2 {
          align-self: center;
          margin-top: 24px;
          font: 40px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-size: 2.5em;
        }
        .div-3 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          font-size: 1em;
          border-radius: 30.5px;
          border: 1px solid #472700;
          box-shadow: 0px 10px 4px 0px rgba(255, 168, 0, 0.6);
          background-color: #ffe17e;
          margin-top: 54px;
          align-items: center;
          justify-content: center;
          padding: 27px 60px;
          transition-duration: 0.4s;
        }
        .div-3:hover {
            background-color: #FFBF00; /* Yellow */
            color: white;
        }
        .div-4 {
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-size: 1em;
          border-radius: 30.5px;
          border: 1px solid #472700;
          box-shadow: 0px 10px 4px 0px rgba(255, 168, 0, 0.6);
          background-color: #ffe17e;
          margin-top: 49px;
          align-items: center;
          justify-content: center;
          padding: 27px 60px;
          transition-duration: 0.4s;
        }
        .div-4:hover {
            background-color: #FFBF00; /* Yellow */
            color: white;
        }
      `}</style>
    </>
  );
}


export default MyComponent;;