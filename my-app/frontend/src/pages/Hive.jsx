import * as React from "react";
import { useNavigate, Navigate } from 'react-router-dom';

function MyComponent() {
    const navigate = useNavigate();
    const navigateToRego = () => {
        navigate('/dashboard');
    }
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6196432f6c65eecfb60e734463e2ea5269fb32f9c20bea7fdf8d1fd0d89e9bd4?apiKey=5880849d19014bf7921644dd08a954e6&"
          className="img"
          onClick={navigateToRego}
        />
        <div className="div-2">
          <div className="div-3">The Hive </div>
        </div>
        <div className="div-5">
          <div className="div-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/173001ef816bc2625435005b6a4d1c0930f350306e7e879ba8bb1c34481af37b?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-2"
            />
            1
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-3"
          />
          <div className="div-8">
            <div className="div-9">
              <div className="div-10">Stardavista</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-4"
            />
          </div>
        </div>
        <div className="div-12">
          <div className="div-13">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7685ed6f73cacf7f6211d755411fea80118c99d405a7e920205025777a5da51?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-5"
            />
            2
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-6"
          />
          <div className="div-15">
            <div className="div-16">
              <div className="div-17">Jooyoots</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-7"
            />
          </div>
        </div>
        <div className="div-19">
          <div className="div-20">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7685ed6f73cacf7f6211d755411fea80118c99d405a7e920205025777a5da51?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-8"
            />
            3
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-9"
          />
          <div className="div-22">
            <div className="div-23">
              <div className="div-24">FlyingChili04</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-10"
            />
          </div>
        </div>
        <div className="div-26">
          <div className="div-27">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7685ed6f73cacf7f6211d755411fea80118c99d405a7e920205025777a5da51?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-11"
            />
            4
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-12"
          />
          <div className="div-29">
            <div className="div-30">
              <div className="div-31">Winny</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-13"
            />
          </div>
        </div>
        <div className="div-33">
          <div className="div-34">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/348fea957ca0cda8b094a75046628c82067f31d8f244c3c5e8d8715f9f8b689e?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-14"
            />
            5
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-15"
          />
          <div className="div-36">
            <div className="div-37">
              <div className="div-38">Buzzer</div>
            </div>
            <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-16"
            />
          </div>
        </div>
        <div className="div-41">
          <div className="div-42">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7685ed6f73cacf7f6211d755411fea80118c99d405a7e920205025777a5da51?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-18"
            />
            6
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-19"
          />
          <div className="div-44">
            <div className="div-45">
              <div className="div-46">BusyBee</div>
            </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&"
                className="img-20"
              />
          </div>
        </div>
        <div className="div-52">
          <div className="div-53">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7685ed6f73cacf7f6211d755411fea80118c99d405a7e920205025777a5da51?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-23"
            />
            7
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3436bc2476dd76750dc043483d6349e4295aaffa83dc90751692dfd24ed8868d?apiKey=5880849d19014bf7921644dd08a954e6&"
            className="img-24"
          />
          <div className="div-55">
            <div className="div-56">
              <div className="div-57">HiveHero</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35b247feb55b6dfd51a283d16f2477318bbe397b9850b08f14b033cf4038e167?apiKey=5880849d19014bf7921644dd08a954e6&"
              className="img-25"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #4d2400;
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
          padding: 44px 9px 80px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 48px;
          border-radius: 30.5px;
          box-shadow: 0px 7px 4px 0px rgba(255, 168, 0, 0.6);
          align-self: start;
          margin-left: 25px;
        }
        .div-2 {
          border-radius: 23px;
          box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.33);
          background-color: #ff9123;
          display: flex;
          margin-top: 23px;
          flex-direction: column;
          align-items: center;
          font-size: 20px;
          font-weight: 400;
          padding: 22px 80px;
        }
        .div-3 {
          color: #84460B;
          font-family: 'Press Start 2P', cursive;
          z-index: 10;
          font-weight: bold;
          font-size: 1.2em;
        }
        .div-5 {
          display: flex;
          margin-top: 25px;
          width: 100%;
          max-width: 391px;
          gap: 7px;
          font-weight: 400;
          white-space: nowrap;
          padding: 0 20px;
        }
        .div-6 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 48px;
            align-items: center;
            color: #ffce2b;
            justify-content: center;
            margin: auto 0;
            padding: 15px 17px;
            font: 20px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-weight: bold;
            font-size: 1.5em;
        }
        .img-2 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-7 {
          position: relative;
        }
        .img-3 {
          aspect-ratio: 0.92;
          object-fit: auto;
          object-position: center;
          border-radius: 25px;
          width: 17%;
          height: 17%;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .div-8 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
          background-color: rgba(255, 145, 35, 0.31);
          align-self: start;
          display: flex;
          gap: 20px;
          margin-top: 10px;
          font-size: 1em;
          justify-content: space-between;
          padding: 4px 8px 4px 29px;
        }
        .div-9 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-10 {
          color: #ffd969;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .img-4 {
          aspect-ratio: 0.74;
          object-fit: auto;
          object-position: center;
          width: 37px;
        }
        .div-12 {
          display: flex;
          margin-top: 21px;
          width: 100%;
          max-width: 391px;
          gap: 7px;
          font-weight: 400;
          white-space: nowrap;
          padding: 0 20px;
        }
        .div-13 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 48px;
            align-items: center;
            color: #ffce2b;
            justify-content: center;
            margin: auto 0;
            padding: 15px 17px;
            font: 20px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-weight: bold;
            font-size: 1.5em;
        }
        .img-5 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-14 {
          position: relative;
        }
        .img-6 {
            aspect-ratio: 0.92;
            object-fit: auto;
            object-position: center;
            border-radius: 25px;
            width: 17%;
            height: 17%;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .div-15 {
            border-radius: 25px;
            box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
            background-color: rgba(255, 145, 35, 0.31);
            align-self: start;
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 1em;
            justify-content: space-between;
            padding: 4px 8px 4px 29px;
            width: 140px;
        }
        .div-16 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-17 {
          color: #ffd969;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .img-7 {
          aspect-ratio: 0.74;
          object-fit: auto;
          object-position: center;
          width: 37px;
          align-self: start;
        }
        .div-19 {
          display: flex;
          margin-top: 21px;
          width: 100%;
          max-width: 391px;
          gap: 7px;
          font-weight: 400;
          white-space: nowrap;
          padding: 0 20px;
        }
        .div-20 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 48px;
            align-items: center;
            color: #ffce2b;
            justify-content: center;
            margin: auto 0;
            padding: 15px 17px;
            font: 20px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-weight: bold;
            font-size: 1.5em;
        }
        .img-8 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-21 {
          position: relative;
        }
        .img-9 {
            aspect-ratio: 0.92;
            object-fit: auto;
            object-position: center;
            border-radius: 25px;
            width: 17%;
            height: 17%;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .div-22 {
            border-radius: 25px;
            box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
            background-color: rgba(255, 145, 35, 0.31);
            align-self: start;
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 1em;
            justify-content: space-between;
            padding: 4px 8px 4px 29px;
            width: 140px;
        }
        .div-23 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-24 {
          color: #ffe17e;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .img-10 {
            aspect-ratio: 0.74;
            object-fit: auto;
            object-position: center;
            width: 37px;
            margin-left: -10px;
        }
        .div-26 {
          display: flex;
          margin-top: 21px;
          width: 100%;
          max-width: 391px;
          gap: 7px;
          font-weight: 400;
          white-space: nowrap;
          padding: 0 20px;
        }
        .div-27 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 48px;
            align-items: center;
            color: #ffce2b;
            justify-content: center;
            margin: auto 0;
            padding: 15px 17px;
            font: 20px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-weight: bold;
            font-size: 1.5em;
        }
        .img-11 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-28 {
          position: relative;
        }
        .img-12 {
            aspect-ratio: 0.92;
            object-fit: auto;
            object-position: center;
            border-radius: 25px;
            width: 17%;
            height: 17%;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .div-29 {
            border-radius: 25px;
            box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
            background-color: rgba(255, 145, 35, 0.31);
            align-self: start;
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 1em;
            justify-content: space-between;
            padding: 4px 8px 4px 29px;
            width: 140px;
        }
        .div-30 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-31 {
          color: #ffd969;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .img-13 {
          aspect-ratio: 0.74;
          object-fit: auto;
          object-position: center;
          width: 37px;
          align-self: start;
        }
        .div-33 {
          display: flex;
          margin-top: 21px;
          width: 100%;
          max-width: 391px;
          gap: 7px;
          padding: 0 20px;
        }
        .div-34 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 48px;
            align-items: center;
            color: #ffce2b;
            justify-content: center;
            margin: auto 0;
            padding: 15px 17px;
            font: 20px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-weight: bold;
            font-size: 1.5em;
        }
        .img-14 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-35 {
          position: relative;
        }
        .img-15 {
            aspect-ratio: 0.92;
            object-fit: auto;
            object-position: center;
            border-radius: 25px;
            width: 17%;
            height: 17%;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .div-36 {
            border-radius: 25px;
            box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
            background-color: rgba(255, 145, 35, 0.31);
            align-self: start;
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 1em;
            justify-content: space-between;
            padding: 4px 8px 4px 29px;
            width: 140px;
        }
        .div-37 {
          display: flex;
          flex-direction: column;
          font-size: 15px;
          font-weight: 400;
          white-space: nowrap;
          margin: auto 0;
        }
        .div-38 {
          color: #ffd969;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .div-40 {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: start;
          position: relative;
          aspect-ratio: 0.74;
          width: 37px;
          align-items: center;
          justify-content: center;
        }
        .img-16 {
            aspect-ratio: 0.74;
            object-fit: auto;
            object-position: center;
            width: 37px;
            align-self: start;
        }
        .div-41 {
          border-radius: 25px;
          box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
          background-color: rgba(255, 145, 35, 0.31);
          align-self: stretch;
          display: flex;
          margin-top: 14px;
          width: 95%;
          gap: 7px;
          font-weight: 400;
          white-space: nowrap;
          padding: 7px 13px;
        }
        .div-42 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 48px;
            align-items: center;
            color: #ffce2b;
            justify-content: center;
            margin-left: 30px;
            padding: 15px 17px;
            font: 20px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-weight: bold;
            font-size: 1.5em;
        }
        .img-18 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-43 {
          position: relative;
        }
        .img-19 {
            aspect-ratio: 0.92;
            object-fit: auto;
            object-position: center;
            border-radius: 25px;
            width: 14%;
            height: 14%;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .div-44 {
            border-radius: 25px;
            box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
            background-color: rgba(255, 145, 35, 0.31);
            align-self: start;
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 1em;
            justify-content: space-between;
            padding: 4px 8px 4px 29px;
            width: 150px;
        }
        .div-45 {
          display: flex;
          flex-direction: column;
          font-size: 15px;
          margin: auto 0;
        }
        .div-46 {
          color: #ffd969;
          font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
          z-index: 10;
        }
        .img-20 {
            aspect-ratio: 0.74;
            object-fit: auto;
            object-position: center;
            width: 37px;
            align-self: start;
        }
        .div-52 {
          display: flex;
          margin-top: 14px;
          gap: 7px;
          font-weight: 400;
          white-space: nowrap;
          padding: 0 20px;
        }
        .div-53 {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 48px;
            align-items: center;
            color: #ffce2b;
            justify-content: center;
            padding: 15px 17px;
            font: 20px Press Start 2P, -apple-system, Roboto, Helvetica,
            sans-serif;
            font-weight: bold;
            font-size: 1.5em;
        }
        .img-23 {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        .div-54 {
            position: relative;
        }
        .img-24 {
            aspect-ratio: 0.92;
            object-fit: auto;
            object-position: center;
            border-radius: 25px;
            width: 17%;
            height: 17%;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .div-55 {
            border-radius: 25px;
            box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.33);
            background-color: rgba(255, 145, 35, 0.31);
            align-self: start;
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 1em;
            justify-content: space-between;
            padding: 4px 8px 4px 29px;
            width: 150px;
        }
        .div-56 {
            display: flex;
            flex-direction: column;
            margin: auto 0;
        }
        .div-57 {
            color: #ffd969;
            font-family: Press Start 2P, -apple-system, Roboto, Helvetica,
                sans-serif;
            z-index: 10;
        }
        .img-25 {
            aspect-ratio: 0.74;
            object-fit: auto;
            object-position: center;
            width: 37px;
        }
        `}</style>
    </>
    );
}


export default MyComponent;