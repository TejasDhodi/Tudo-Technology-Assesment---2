import React from 'react';
import '../Styles/ConnectComponent.css';

const connectDetailsArray = [
    {
        heading3: "Let’s talk",
        detail: "someone@example.com",
        iconPath: "M5.41658 4.33331H20.5833C21.4452 4.33331 22.2719 4.67572 22.8813 5.28522C23.4908 5.89471 23.8333 6.72136 23.8333 7.58331V18.4166C23.8333 19.2786 23.4908 20.1052 22.8813 20.7147C22.2719 21.3242 21.4452 21.6666 20.5833 21.6666H5.41658C4.55463 21.6666 3.72798 21.3242 3.11849 20.7147C2.50899 20.1052 2.16658 19.2786 2.16658 18.4166V7.58331C2.16658 6.72136 2.50899 5.89471 3.11849 5.28522C3.72798 4.67572 4.55463 4.33331 5.41658 4.33331ZM20.5833 6.49998H5.41658C5.12927 6.49998 4.85372 6.61412 4.65055 6.81728C4.44739 7.02045 4.33325 7.29599 4.33325 7.58331L12.9999 12.87L21.6666 7.58331C21.6666 7.29599 21.5524 7.02045 21.3493 6.81728C21.1461 6.61412 20.8706 6.49998 20.5833 6.49998ZM4.33325 18.4166C4.33325 18.704 4.44739 18.9795 4.65055 19.1827C4.85372 19.3858 5.12927 19.5 5.41658 19.5H20.5833C20.8706 19.5 21.1461 19.3858 21.3493 19.1827C21.5524 18.9795 21.6666 18.704 21.6666 18.4166V10.0533L13.5633 15.0041C13.3986 15.0992 13.2118 15.1493 13.0216 15.1493C12.8314 15.1493 12.6446 15.0992 12.4799 15.0041L4.33325 10.0533V18.4166Z"
    },
    {
        heading1: "Book an appointment?",
        detail: "+91 - 385 526 5060",
        img: '/Images/whatsapp 1.png'
    }
];

const ConnectComponent = () => {
    return (
        <section id="Connect" className="main">
            {
                connectDetailsArray.map((item, index) => {
                    const { heading1, heading3, detail, iconPath, img } = item
                    return (
                        <div className="connectDetailsContainer" key={index}>
                            <div className="connectHeads">
                                {
                                    heading1 ? <h1>{heading1}</h1> : <h3>{heading3}</h3>
                                }
                            </div>
                            <div className="connectDetails">
                                <p>{detail}</p>
                                {
                                    iconPath ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                                        <path d={iconPath} fill="black" />
                                    </svg> : <img src={img} alt={heading1}></img>
                                }
                            </div>
                        </div>
                    )
                })
            }

            <div className="connectDescription">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae facilisis lorem. Integer non pharetra mauris, non tincidunt metus. Aenean in lectus diam... </p>
            </div>
        </section>
    );
};

export default ConnectComponent;
