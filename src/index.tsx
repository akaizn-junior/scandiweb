import React from 'react';
import ReactDOM from 'react-dom/client';

// @ts-ignore
import App from './App.tsx';
// @ts-ignore
import reportWebVitals from './reportWebVitals.ts';
// @ts-ignore
import { client, ApolloProvider } from './utils/graphql.ts';

const elem = document.getElementById('root')!; // non-null assertion
const root = ReactDOM.createRoot(elem);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);
