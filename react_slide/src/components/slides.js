import React, { useState } from 'react';

function Slides({slides}) {

    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const [activeSlideNo, setActiveSlideNo] = useState(0);
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const [disableRestart, setDisableRestart] = useState(true);

    const onClickNext =  () =>{
        var current_slide= activeSlideNo;

        if(current_slide < slides.length -1){
            current_slide++;
            setActiveSlideNo(current_slide);
            setCurrentSlide(slides[current_slide]);
            setDisablePrev(false);
            setDisableRestart(false)
        }
        if(current_slide === slides.length -1){
            setDisableNext(true)
        }

    }

    const  onClickPrev =  () =>{
        var current_slide= activeSlideNo;

        if(current_slide > 0){
            current_slide--;
            setDisableNext(false);
            setActiveSlideNo(current_slide);
            setCurrentSlide(slides[current_slide]);
        }

        if(current_slide === 0){
            setDisablePrev(true);
            setDisableRestart(true);

        }
    }



    const onClickRestart = () => {
        setCurrentSlide(slides[0])
        setActiveSlideNo(0)
        setDisableRestart(true);
        setDisablePrev(true);
        setDisableNext(false)
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => onClickRestart()} disabled={disableRestart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => onClickPrev()} disabled={disablePrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => onClickNext()} disabled={disableNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;