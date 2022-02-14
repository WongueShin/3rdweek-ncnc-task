// Hooks useFetch 사용예시를 보여주는 예시용 컴포넌트입니다.

import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';
import { useState, useEffect } from 'react';

const APICompo = ({ InititalProps }:T.APICompoProps) => {
    console.log(InititalProps);
    
    return (
        <ul>
            <ul>
                <StaticProps data= {InititalProps.conCategory1s}/>
            </ul>
        </ul>
    )
}

export const StaticProps = ({ data }:T.CategoryType):JSX.Element => {
    console.log(data);
    return(
        <>
        <h3>StaticProps</h3>
        <h4>카테고리</h4>
        {data.map((e, index) => <li key={index}>{e.name}</li>)}
        </>
    );
}


export default APICompo