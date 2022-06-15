import * as React from "react";

import BigBoxImgAndText from "./BigBoxImgAndText";
import StepImgOnMainPage from "./StepImgOnMainPage";
import Image from "./Image";
import { Button } from "react-bootstrap";

import "../style/MainMain.css";

import "../img/BigImgFromMainPage/undraw_fast_car_p4cu.png";
import "../img/BigImgFromMainPage/undraw_online_transactions_02ka.png";
import "../img/BigImgFromMainPage/undraw_Vehicle_sale_a645.png";

import "../img/DoYouHaveCarEllipses/dollar.png";
import "../img/DoYouHaveCarEllipses/label.png";
import "../img/DoYouHaveCarEllipses/money.png";
import "../img/DoYouHaveCarEllipses/somthing.png";

import "../img/RentalEllipses/Ellipse.png";

import "../img/BigBabyWithACar.png";
import "../img/BigGirlOnACar1.png";
import "../img/BigGirlOnACar2.png";
import "../img/Line 1.png";
import "../img/Line2.png";

import ReactSimplyCarouselExample from "./MyCarousel";
import VisibilitySensor from "react-visibility-sensor";

function MainMain(props:{
  onChange: (isVisible: Boolean) => void;
}) {
 
  const contentForBigBoxes = [
    {
      classNameForImagePosition: "ForImagePosition",
      classNameForTextPosition: "ForTextPosition",
      classNameForImage: "ForImageGirl",
      classNameForBoxImageAndText: "ForBoxImageAndText",
      src: "img/undraw_fast_car_p4cu.png",
      alt: "",
      header: "Аренда напрямую от владельцев",
      paragraph:
        "Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.",
    },
    {
      classNameForImagePosition: "ForImagePosition",
      classNameForTextPosition: "ForTextPosition",
      classNameForImage: "ForImageCar",
      classNameForBoxImageAndText: "ForBoxImageAndText_revers",
      src: "img/undraw_Vehicle_sale_a645.png",
      alt: "",
      header: "Автомобили на любой вкус",
      paragraph:
        "Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров.",
    },
    {
      classNameForImagePosition: "ForImagePosition",
      classNameForTextPosition: "ForTextPosition",
      classNameForImage: "ForImageDevice",
      classNameForBoxImageAndText: "ForBoxImageAndText",
      src: "img/undraw_online_transactions_02ka.png",
      alt: "",
      header: "Гарантия честной аренды",
      paragraph:
        "Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.",
    },
  ];

  const contentForRentalSteBoxes = [
    {
      srcLine: "img/Line 1.png",
      classForStepImg: "stepImg",
      classForLineStep: "lineImg",
      src: "img/Ellipse.png",
      alt: "Шаг первый",
      paragraph: <p className="text_Rent">Выберите автомобиль</p>,
    },
    {
      srcLine: "img/Line 1.png",
      classForStepImg: "stepImg",
      classForLineStep: "lineImg",
      src: "img/Ellipse.png",
      alt: "Шаг второй",
      paragraph: <p className="text_Rent">Забронируйте  дату и время</p>,
    },
    {
     
      classForStepImg: "stepImg",
      classForLineStep: "lineImgNone",
      src: "img/Ellipse.png",
      alt: "Шаг третий",
      paragraph: <p className="text_Rent">Получите  автомобиль</p>,
    },
  ];

  const contentForDoYouHaveCArSteBoxes = [
    {
      srcLine: "img/Line2.png",
      classForStepImg: "stepImg",
      classForLineStep: "lineImgDoYou",
      src: "img/label.png",
      alt: "Вы сами указываете цену",
      paragraph: <p className="text_YouHaveCar"> Вы сами указываете цену </p>,
    },
    {
      srcLine: "img/Line2.png",
      classForStepImg: "stepImg",
      classForLineStep: "lineImgDoYou",
      src: "img/dollar.png",
      alt: "Мы страхуем автомобили",
      paragraph: <p className="text_YouHaveCar"> Мы страхуем автомобили</p>,
    },
    {
      srcLine: "img/Line2.png",
      classForLineStep: "lineImgDoYou",
      classForStepImg: "stepImg",
      src: "img/somthing.png",
      alt: "Наша комиссия всего 3%",
      paragraph: <p className="text_YouHaveCar"> Наша комиссия всего 3% </p>,
    },
    {
      classForLineStep: "lineImgNone",
      classForStepImg: "stepImg",
      src: "img/money.png",
      alt: "Выплаты каждую неделю",
      paragraph: <p className="text_YouHaveCar"> Выплаты каждую неделю </p>,    
    },
  ];

  return (
    <>
   
        <div className="Container_BiGirlOnACarAndText">
           
           <div className="Container_ButtonAndText">
          <h1 className="H1_TextAtThePage">Каршеринг в любой точке России</h1>
          <p className="P_TextAtThePage">Будьте всегда за рулём во время путешествий и командировок.</p>
          <Button className={"RegistrationButton"}>Зарегистрироваться</Button>
        </div>

        <VisibilitySensor onChange={props.onChange}>
        <div className={"Container_BigGirlOnACar"}>
          <Image
            className="BigGirlOnACar1"
            src={"img/BigGirlOnACar1.png"}
            alt={"Девушка рядом с автомобилем"}
          /> 
           <Image
            className="BigGirlOnACar2"
            src={"img/BigGirlOnACar2.png"}
            alt={"Девушка рядом с автомобилем"}
          /> 
          </div>
          </VisibilitySensor>
        </div>
        
       

      {contentForBigBoxes.map((bigBox) => (
        <BigBoxImgAndText
          classNameForBoxImageAndText={bigBox.classNameForBoxImageAndText}
          classNameForImagePosition={bigBox.classNameForImagePosition}
          classNameForImage={bigBox.classNameForImage}
          classNameForTextPosition={bigBox.classNameForTextPosition}
          src={bigBox.src}
          alt={bigBox.alt}
          header={bigBox.header}
          paragraph={bigBox.paragraph}
        />
      ))}



      <div className="Container_rentalSteps">
        <h2 className="H2_rental_steps">Как арендовать автомобиль</h2>
        <div className="Container_ImgAndStepRental">
        <div className="ImgStep_Rental">
          {contentForRentalSteBoxes.map((box) => (
            <StepImgOnMainPage

              classForLineStep={box.classForLineStep}
              classForStepImg={box.classForStepImg}
              src={box.src}
              srcLine={box.srcLine}
              alt={box.alt}
            />
          ))}
        </div>
       <div className="TextStepRentCar">
        {contentForRentalSteBoxes.map((box) => (
              box.paragraph
        ))}
        </div>
        </div>
      </div> 

      <div className="Container_DoYouHaveCar_steps">
        <h2 className="H2_DoYouHAveCar">У вас есть автомобиль?</h2>
        <p className="P_DoYouHAveCar"> Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте. </p>
        <div className="Container_ImgAndStepDoYouHaveCar">
          <div className="ImgStep_DoYouHaveCar">
            {contentForDoYouHaveCArSteBoxes.map((box) => (
              <StepImgOnMainPage
                
                classForLineStep={box.classForLineStep}
                classForStepImg={box.classForStepImg}
                srcLine={box.srcLine}
                src={box.src}
                alt={box.alt}
              />
            ))}
          </div>
          <div className="TextStepDoYouHaveCar">
          {contentForDoYouHaveCArSteBoxes.map((box) => (
                box.paragraph
          ))}
          </div>
        </div>
      </div>

      <div className="swiperBox">
        <h2 className="H2TextCustomerReviews">Отзывы Клиентов</h2>
        <ReactSimplyCarouselExample/>
      </div>

      <div className="Container_BigBabyWithACar">
        <div className="img_BigBaby">
          <Image className={"img_BigBaby"} src={"img/BigBabyWithACar.png"} alt={""} />
        </div>
        <h2 className="H2_TryRent">Попробуйте аренду на себе</h2>
        <Button className={"RegistrationButton"}>Зарегистрироваться</Button>
      </div>
      
    </>
  );
}
export default MainMain;
