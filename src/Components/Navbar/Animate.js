<AnimatedCard
    config={{
        rotation: 15, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
        transition:{
            duration:0.5,
            timingMode: "ease"
        },
        transform:{
            figureIcon: {
                rotation: 20,
                translateZ: 160
            },
            titleTranslateZ: 140,
            bodyTextTranslateZ: 100,
            buttonTranslateZ: 80
        }
    }}
    style={{
        width:560 //container style (you can use className as well)
    }}
>

    <div className="card">
        <div className="figure">
            <div className="figure_bg"/> // not required, just used for design
            <img src={require('./images/image.png').default} alt=""/>
        </div>
        <div className="content">
            <h2 className="title">Animated Card</h2>
            <p className={"body"}>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry</p>
        </div>
        <div className="footer">
            <button className={"footer_btn"}>BUTTON</button>
        </div>
    </div>

</AnimatedCard>