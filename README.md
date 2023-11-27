# Median

Create your app using Median App Studio at https://median.co/app

##  Median Javascript Bridge

Use this library to use Median JS bridge methods in your SPA application. This library is framework-agnostic and should work with all major JS frameworks.

For detailed documentation about all available methods please visit https://median.co/docs 

### Installation

Install the package using `npm` or `yarn`

    npm install median-js-bridge --save

OR

    yarn add median-js-bridge

### Usage

    import Median from "median-js-bridge";
    import React, { useEffect } from "react";
    
    const App: React.FC = () => {
        useEffect(() => {
            Median.onReady(() => {
                window.alert("Median app ready!");
            });
    }, []);

