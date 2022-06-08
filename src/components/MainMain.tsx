import * as React from "react";

import BigBoxImgAndText from "./BigBoxImgAndText";
import StepBox from "./StepBox";
import MySwiper from "./MySwiper";
import Image from "./Image";
import { Button } from "react-bootstrap";

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

function MainMain(props) {
  const contentForBigBoxes = [
    {
      classNameForImagePosition: "",
      classNameForTextPosition: "",
      classNameForImage: "",
      src: "img/undraw_fast_car_p4cu.png",
      alt: "",
      header: "Аренда напрямую от владельцев",
      paragraph:
        "Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.",
    },
    {
      classNameForImagePosition: "",
      classNameForTextPosition: "",
      classNameForImage: "",
      src: "img/undraw_Vehicle_sale_a645.png",
      alt: "",
      header: "Автомобили на любой вкус",
      paragraph:
        "Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров.",
    },
    {
      classNameForImagePosition: "",
      classNameForTextPosition: "",
      classNameForImage: "",
      src: "img/undraw_online_transactions_02ka.png",
      alt: "",
      header: "Гарантия честной аренды",
      paragraph:
        "Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.",
    },
  ];

  return (
    <>
      <div className="BoxFor_BiGirlWithACar_AnD_BoxFor_ButtonAndTExt">
        <div>
          <Image
            className={"BigGirlOnACar"}
            src={"img/BigGirlOnACar.png"}
            alt={""}
          />
        </div>
        <div className={"BoxFor_ButtonAndText"}>
          <h2>Попробуйте аренду на себе</h2>
          <p>Будьте всегда за рулём во время путешествий и командировок.</p>
          <Button className={""}>Зарегистрироваться</Button>
        </div>
      </div>

      {contentForBigBoxes.map((bigBox) => (
        <BigBoxImgAndText
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
        <h2>Как арендовать автомобиль</h2>
        <StepBox
          className={"Rental__stepOne"}
          src={"img/Ellipse.png"}
          alt={"Шаг первый"}
          paragraph={"Выберите автомобиль"}
        />
        <div className="lineBetwenStep" />
        <StepBox
          className={"Rental__stepTwo"}
          src={"img/Ellipse.png"}
          alt={"Шаг второй"}
          paragraph={"Забронируйте дату и время"}
        />
        <div className="lineBetwenStep" />
        <StepBox
          className={"Rental__stepThree"}
          src={"img/Ellipse.png"}
          alt={"Шаг третий"}
          paragraph={"Получите автомобиль"}
        />
      </div>
      <div className="BoxFor_DoYouHaveСar_steps">
        <h2>У вас есть автомобиль?</h2>
        <StepBox
          className={"DoYouHaveСar__stepOne"}
          src={"img/label.png"}
          alt={"Вы сами указываете цену"}
          paragraph={"Вы сами указываете цену"}
        />
        <div className="lineBetwenStep" />
        <StepBox
          className={"DoYouHaveСar__stepTwo"}
          src={"img/dollar.png"}
          alt={"Мы страхуем автомобили"}
          paragraph={"Мы страхуем автомобили"}
        />
        <div className="lineBetwenStep" />
        <StepBox
          className={"DoYouHaveСar__stepThree"}
          src={"img/somthing.png"}
          alt={"Наша комиссия всего 3%"}
          paragraph={"Наша комиссия всего 3%"}
        />
        <div className="lineBetwenStep" />
        <StepBox
          className={"DoYouHaveСar__stepFour"}
          src={"img/money.png"}
          alt={"Выплаты каждую неделю"}
          paragraph={"Выплаты каждую неделю"}
        />
        <div className="lineBetwenStep" />
      </div>
      <div className="swiperBox">
        <MySwiper />
      </div>
      <div className="BoxFor_BigBabyWithACar">
        <div>
          <Image className={""} src={"img/BigBabyWithACar.png"} alt={""} />
        </div>
        <h2>Попробуйте аренду на себе</h2>
        <Button className={""}>Зарегистрироваться</Button>
      </div>
    </>
  );
}
export default MainMain;
