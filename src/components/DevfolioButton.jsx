import React, { useEffect } from 'react';

const DevfolioButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://hack-nocturne.devfolio.co/";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () =>{
        if(window.Devfolio) {
            window.Devfolio.Button({
                key:'hack-nocturne',
                buttonTheme:"light"
            })
        }
    }



    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="button-container flex justify-center">
      <div
        className="apply-button"
        data-hackathon-slug="hack-nocturne"
        data-button-theme="light"
        style={{ height: '44px', width: '312px' }}
      ></div>
    </div>
  );
};

export default DevfolioButton;
