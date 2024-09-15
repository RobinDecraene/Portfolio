import React from 'react';
import style from "./loading.module.css"
import Page from '../Page/page';
import Section from '../Section/section';

const Loading = () => {
    return (
        <Page >
          <Section customClass={style.wrapper}>
            <span className={style.loading__text}>Loading</span>

            <div className={style.loading__container}>
                <span className={style.circle}></span>
                <span className={style.circle}></span>
                <span className={style.circle}></span>
                <span className={style.circle}></span>
            </div>
          </Section>
        </Page>
    );
};

export default Loading;