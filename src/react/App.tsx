/**
 * @file app.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
/**
 * Use the following file to import all of the components and export them as a single module
 * This will be the entry point for the library in order to preview and modify the components
 * as you see fit.
 */

import * as React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { PropArea } from '@app/propArea';

import PhoneNumberInput from './components/headless/phoneNumberInput';

const GlobalStyle = createGlobalStyle`
:root {
  height: 100%;
  width: 100vw;

}
html {
  display: grid;
}
body {
  display: grid;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
/* Grid Layout */
.container {  display: grid;
  grid-template-columns: 0.2fr 1.3fr;
  grid-template-rows: 0.3fr 2.5fr 1.5fr 0.2fr;
  gap: 0px 0px;
  height: 100%;
  grid-auto-flow: row;
  grid-template-areas:
    "header header"
    "nav-col prop-area"
    "nav-col btm-util"
    "footer footer";
}

.header { grid-area: header; }

.prop-area {  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 0.1fr 1.9fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "prop-area-header prop-select"
    "resize-area prop-select";
  grid-area: prop-area;
}


.resize-area {
  position: relative;
  display: grid;
  grid-template-columns: 10% 12.5% 15% 25% 15% 12.5% 10%;
  grid-template-rows: 10% 12.5% 15% 25% 15% 12.5% 10%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
    "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
    "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
    "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
    "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
    "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
    "prop-box prop-box prop-box prop-box prop-box prop-box prop-box";
  grid-area: resize-area;
}

.prop-box {
  border: 2px solid #FF9900;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #00000075;
  grid-area: prop-box;
  display: flex;
  place-content: center;
  flex-wrap: wrap;
}

.prop-area-header { grid-area: prop-area-header; }
.list-header { grid-area: list-header; }
.category-header { grid-area: category-header; }
.prop-select {  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  grid-template-rows: 0.1fr 1.9fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "prop-select-headers prop-select-headers"
    "prop-list prop-categories";
  grid-area: prop-select;
}
.prop-select-headers {  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "list-header category-header";
  grid-area: prop-select-headers;
}

.prop-list { grid-area: prop-list; }

.prop-categories { grid-area: prop-categories; }



.nav-col {  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "btn-col .";
  grid-area: nav-col;
}

.btn-col { grid-area: btn-col; }

.btm-util {  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "param-proto theming";
  grid-area: btm-util;
}

.param-proto { grid-area: param-proto; }

.theming { grid-area: theming; }

.footer { grid-area: footer; }

`;


export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="container">
          <div className="header"></div>
          <div className="nav-col">
            <div className="btn-col"></div>
          </div>
          <PropArea />
          {/* <div className="prop-area">
            <h1 className="prop-area-header"></h1>
            <div className="resize-area">
              <div className="prop-box">
                <Routes>
                  <Route path="/" element={ <></> } />
                  <Route path="/contact" element={ <></> } />
                  <Route path="/about" element={ <></> } />
                </Routes>
                <PhoneNumberInput />
              </div>
            </div>
            <div className="prop-select">
              <div className="prop-select-headers"></div>
              <div className="prop-list"></div>
              <div className="prop-categories"></div>
            </div>
          </div> */}
          <div className="btm-util">
            <div className="param-proto"></div>
            <div className="theming"></div>
          </div>
          <div className="footer"></div>
        </div >
      </Router >
    </>
  );
}

export default App;
