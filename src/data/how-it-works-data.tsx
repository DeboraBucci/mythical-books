import stepOne from "../assets/step-one.webp";
import stepTwo from "../assets/step-one.webp";
import stepThree from "../assets/step-one.webp";
import stepFour from "../assets/step-one.webp";

import { Link } from "react-router-dom";

import { Languages } from "types/general";

interface StepInterface {
  img: string;
  title: string;
  text: React.ReactNode[];
}

const howItWorksContent: Record<Languages, StepInterface[]> = {
  english: [
    {
      img: stepOne,
      title: "Join in",
      text: [
        <>
          To start off you need to be logged in into your account,{" "}
          <Link to="/register">
            (create it here if you don't have one already)
          </Link>
          , to make a subscription.
        </>,
      ],
    },
    {
      img: stepTwo,
      title: "Choose subscription",
      text: [
        <>
          We offer many <a href="#subscriptions">subscription plans</a>, each
          one of them has different price and <a href="#benefits">benefits</a>.
        </>,
        <>
          Once you decided on one, click on the 'upgrade' button at the bottom
          of the card to start the subscription process.
        </>,
      ],
    },
    {
      img: stepThree,
      title: "Fill the form",
      text: [
        <>
          Once you click on the 'upgrade' button, you'll be redirected to a form
          which needs to be filled with some of your personal data to carry
          through the payment.
        </>,
        <>
          Don't worry, we have secure connections that prevent any malicious
          user from stealing your data.
        </>,
      ],
    },
    {
      img: stepFour,
      title: "Enjoy",
      text: [
        <>
          At the moment of paying the subscription, your account will be
          activated in a matter of minutes, and from there on you will be able
          to enjoy all the benefits of your subscription plan. Yoo-hoo!
        </>,
        <>Enjoy the reading!</>,
      ],
    },
  ],

  spanish: [
    {
      img: stepOne,
      title: "Únete",
      text: [
        <>
          Para comenzar, debes haber ingresado en tu cuenta,{" "}
          <Link to="/register">
            (haz click aquí si todavía no tienes una creada)
          </Link>
          , para realizar una subscripción.
        </>,
      ],
    },
    {
      img: stepTwo,
      title: "Elige una Subscripción",
      text: [
        <>
          Ofrecemos muchas <a href="#subscriptions">subscripciones</a>, cada una
          cuenta con diferente precio y <a href="#benefits">beneficios</a>.
        </>,
        <>
          Una vez te decidas por una de ellas, haz click en el botón de
          "mejorar" al pie de la carta en la que estés interesado para comenzar
          el proceso de subscripción.
        </>,
      ],
    },
    {
      img: stepThree,
      title: "Completa el Formulario",
      text: [
        <>
          Una vez que hayas clickeado en el botón de "mejorar", serás redirigido
          a un formulario el cual requerirá de alguno de tus datos personales
          para poder realizar el pago con éxito.
        </>,
        <>
          No te preocupes, tenemos conexiones seguras que previenen a cualquier
          usuario maligno de robar tu información personal.
        </>,
      ],
    },
    {
      img: stepFour,
      title: "Disfruta!",
      text: [
        <>
          En el momento en el que realizas el pago de la subscripción, tu cuenta
          será activada en cosa de minutos, y de ahí en adelante, serás capaz de
          disfrutar de todos los beneficios de tu plan de subscripción. ¡Yupi!
        </>,
        <>¡Disfruta de tu lectura!</>,
      ],
    },
  ],
};

export { howItWorksContent };
