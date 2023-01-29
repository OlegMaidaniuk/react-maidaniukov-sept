import React from 'react';

const App = () => {
    return (
        <div>
            <App name={'Marge'} surname={'Simpson'} size={'45'}
                 image={'https://i.discogs.com/WI38UGun7TKKNg04MTHK0yV-I1Yb75sdJ_t0GEermmo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MzAtMTMzNTcyMDM5/MC5wbmc.jpeg'}
                 age={'46'}/>
            <App name={'Homer'} surname={'Simpson'} size={'47'}
                 image={'https://images.prom.ua/2472016152_w640_h640_kruzhka-s-printom.jpg'}
                 age={'48'}/>
        </div>
    );
};
export {App};