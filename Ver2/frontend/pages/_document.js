// Helmet 으로 html 검색엔진의 규격을 맞췄지만, 제대로 사용하려면 SSR 적용해줘야함
// 1. 처음 _documnet 랜더링 > _app 랜더링 + 그안의 컴포넌트 랜더링
import React from 'react';
import PropTypes from 'prop-types';
import Document, {Main, NextScript} from 'next/document';
import { Helmet } from 'react-helmet';

class MyDocument extends Document {
    static getInitialProps(context){
        const page = context.renderPage((App)=> (props)=> <App {...props}></App>) // 이걸 해줘야 검색엔진에서 다큐맨터리는 랜더링 되는데 안에있는 _app.js 가 랜더링 됨
        return{ ...page, helmet: Helmet.renderStatic() } // SSR
    }
    render(){
        const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet; // ...helmet 안에 태그들이 들어있는데, 반복문으로 리엑트 컴포넌트로 만들어서 head 안에 붙여줌
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        return(
            <html {...htmlAttrs}>
                <head>
                    {Object.values(helmet).map(el => el.toComponent())} 
                </head>
                <body {...bodyAttrs}>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </html>
        )
    }
}
MyDocument.propTypes= {
    helmet: PropTypes.object.isRequired,
}

export default MyDocument;