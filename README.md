#  Median JavaScript Bridge

Use this library to use Median JavaScript Bridge methods in your SPA application. This library is framework-agnostic and is designed to work with all major JavaScript frameworks.

For detailed documentation please visit https://median.co/docs/javascript-bridge

## Median.co App Studio

Create your app using the Median App Studio at https://median.co/app

## Installation

Install the package using `npm` or `yarn`

    npm install median-js-bridge --save

OR

    yarn add median-js-bridge

## Basic usage

    import Median from "median-js-bridge";
    import React, { useEffect } from "react";
    
    const App: React.FC = () => {
        useEffect(() => {
            Median.onReady(() => {
                window.alert("Median app ready!");
            });
    }, []);

## Usage with listeners

    const listenerId = Median.appResumed.addListener(() => {
        console.log("app resumed callback");
    });
    Median.appResumed.removeListener(listenerId);

### Share into app plugin
[Documentation](https://median.co/docs/share-into-app)

    const listenerId = Median.shareToApp.addListener((data) => {
        console.log(data.url, data.subject);
    });

    Median.shareToApp.removeListener(listenerId);

### Haptics plugin
[Documentation](https://median.co/docs/haptics)

    const listenerId = Median.deviceShake.addListener(() => {
        console.log("device shake callback");
    });

    Median.deviceShake.removeListener(listenerId);

