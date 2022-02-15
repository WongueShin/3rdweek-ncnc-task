import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'

const NavSideBar = ({setSideBarOpen} : any): JSX.Element => {
    const goBackHandler = () =>{
        setSideBarOpen(true);
    }

    return (

        <div className={style.sideBarwrapperContainer} onClick={goBackHandler}  >
                <div className={style.myPageWrap} >
                <Image
                      src="/images/close.png"
                      alt="seeback"
                      className={style.customerNavImage}
                      width="20px"
                      height="20px"
                    />
                    <p>마이페이지</p>
                    <div />       
                </div>
                <div className={style.sideBarline} /> 

                <Link href={`/contacts`} >
                        <a className={style.sideBarIcon} > 
                            <div> 고객센터 </div> 
                            <Image
                            src="/images/arrowRightIcon.png"
                            alt="seeback"
                            className={style.customerNavImage}
                            width="20px"
                            height="20px"
                            />
                        </a> 
                </Link>
                <div className={style.sideBarbottom} />        
                <div className={style.sideBarLastLine} onClick={goBackHandler} /> 
        </div>
    )
};

export default NavSideBar;