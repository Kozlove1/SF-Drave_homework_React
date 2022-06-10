import * as React from "react";

import BigBoxImgAndText from "./BigBoxImgAndText";
import StepBox from "./StepBox";
import MySwiper from "./MyCarousel";
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
import "../img/BigGirlOnACar.png";
import "../img/Line 1.png";
import ReactSimplyCarouselExample from "./MyCarousel";

function MainMain(props) {
  const contentForBigBoxes = [
    {
      classNameForImagePosition: "classNameForImagePosition",
      classNameForTextPosition: "classNameForTextPosition",
      classNameForImage: "classNameForImage",
      classNameForBoxImageAndText: "classNameForBoxImageAndText",
      src: "img/undraw_fast_car_p4cu.png",
      alt: "",
      header: "Аренда напрямую от владельцев",
      paragraph:
        "Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.",
    },
    {
      classNameForImagePosition: "classNameForImagePosition",
      classNameForTextPosition: "classNameForTextPosition",
      classNameForImage: "classNameForImage",
      classNameForBoxImageAndText: "classNameForBoxImageAndText_revers",
      src: "img/undraw_Vehicle_sale_a645.png",
      alt: "",
      header: "Автомобили на любой вкус",
      paragraph:
        "Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров.",
    },
    {
      classNameForImagePosition: "classNameForImagePosition",
      classNameForTextPosition: "classNameForTextPosition",
      classNameForImage: "classNameForImage",
      classNameForBoxImageAndText: "classNameForBoxImageAndText",
      src: "img/undraw_online_transactions_02ka.png",
      alt: "",
      header: "Гарантия честной аренды",
      paragraph:
        "Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.",
    },
  ];

  const contentForRentalSteBoxes = [
    {
      classForBox: "classForBox",
      srcLine: "img/Line 1.png",
      className: "Rental__stepOne",
      src: "img/Ellipse.png",
      alt: "Шаг первый",
      paragraph: <p className="text_Rent_And_YouHaveCar">Выберите <br />автомобиль</p>,
    },
    {
      classForBox: "classForBox",
      srcLine: "img/Line 1.png",
      className: "Rental__stepTwo",
      src: "img/Ellipse.png",
      alt: "Шаг второй",
      paragraph: <p className="text_Rent_And_YouHaveCar">Забронируйте  <br /> дату и время</p>,
    },
    {
      classForBox: "classForBox",
      classNameForImg: "Rental__stepThree",
      src: "img/Ellipse.png",
      alt: "Шаг третий",
      paragraph: <p className="text_Rent_And_YouHaveCar">Получите <br /> автомобиль</p>,
    },
  ];

  const contentForDoYouHaveCArSteBoxes = [
    {
      srcLine: "img/Line 1.png",
      classForBox: "classForBox",
      classNameForImg: "DoYouHaveСar__stepOne",
      src: "img/label.png",
      alt: "Вы сами указываете цену",
      paragraph: <p className="text_Rent_And_YouHaveCar"> Вы сами <br /> указываете цену </p>,
    },
    {
      srcLine: "img/Line 1.png",
      classForBox: "classForBox",
      classNameForImg: "DoYouHaveСar__stepTwo",
      src: "img/dollar.png",
      alt: "Мы страхуем автомобили",
      paragraph: <p className="text_Rent_And_YouHaveCar"> Мы страхуем <br /> автомобили</p>,
    },
    {
      srcLine: "img/Line 1.png",
      classForBox: "classForBox",
      classNameForImg: "DoYouHaveСar__stepThree",
      src: "img/somthing.png",
      alt: "Наша комиссия всего 3%",
      paragraph: <p className="text_Rent_And_YouHaveCar"> Наша комиссия <br /> всего 3% </p>,
    },
    {
      classForBox: "classForBox",
      classNameForImg: "DoYouHaveСar__stepFour",
      src: "img/money.png",
      alt: "Выплаты каждую неделю",
      paragraph: <p className="text_Rent_And_YouHaveCar"> Выплаты <br /> каждую неделю </p>,    
    },
  ];

  return (
    <>
<div className="BoxFor_BiGirlWithACar">
           
           <div className="BoxFor_ButtonAndText">
          <h1 className="FirstTextAtThePage">Каршеринг в любой точке России</h1>
          <p className="SecondTextAtThePage">Будьте всегда за рулём во время путешествий и командировок.</p>
          <Button className={"RegistrationButton"}>Зарегистрироваться</Button>
        </div>

        <div className={"BigGirlOnACar"}>
          <Image
            src={"img/BigGirlOnACar.png"}
            alt={""}
          />  
          </div>
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

      <div className="BoxFor_rental_steps">
        <h2 className="Text_rental_stepsH2">Как арендовать автомобиль</h2>
        <div className="classForBoxStepBox">
          {contentForRentalSteBoxes.map((box) => (
            <StepBox
              classForBox={box.classForBox}
              classNameForImg={box.classNameForImg}
              src={box.src}
              srcLine={box.srcLine}
              alt={box.alt}
              paragraph={box.paragraph}
            />
          ))}
        </div>
      </div>

      <div className="BoxFor_DoYouHaveCar_steps">
        <h2 className="Text_DoYouHAveCarH2">У вас есть автомобиль?</h2>
        <p className="Text_DoYouHAveCarParagraph"> Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте. </p>
        <div className="classForBoxStepBox">
          {contentForDoYouHaveCArSteBoxes.map((box) => (
            <StepBox
              srcLine={box.srcLine}
              classForBox={box.classForBox}
              classNameForImg={box.classNameForImg}
              src={box.src}
              alt={box.alt}
              paragraph={box.paragraph}
            />
          ))}
        </div>
      </div>

      <div className="swiperBox">
        <h2 className="H2TextCustomerReviews">Отзывы Клиентов</h2>
        <ReactSimplyCarouselExample/>
      </div>

      <div className="BoxFor_BigBabyWithACar">
        <div className="BigBaby">
          <Image className={""} src={"img/BigBabyWithACar.png"} alt={""} />
        </div>
        <h2 className="TexTryRent">Попробуйте аренду на себе</h2>
        <Button className={"RegistrationButton"}>Зарегистрироваться</Button>
      </div>
      
    </>
  );
}
export default MainMain;
