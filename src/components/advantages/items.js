import loaction from "../../assets/location.svg";
import time from "../../assets/time.svg";
import savings from "../../assets/savings.svg";
import handshake from "../../assets/handshake.svg";
import quality from "../../assets/quality.svg";
export const items = [
  {
    title: "Simplicité",
    text: "Il suffit de nous contacter par téléphone, email ou bien en utilisant notre application mobile.",
    img: loaction,
    reverse: false,
  },
  {
    title: "Rapidité",
    text: "Nous nous efforçons d'intervenir rapidement, nos délais sont en moyennes de 30 min à 45 min.",
    img: time,
    reverse: true,
  },
  {
    title: "Efficacité et confiance",
    text: "Nous sommes disponibles tous les jours 24/7 pour répondre à toutes vos demandes ainsi que les démarches à suivre.",
    img: handshake,
    reverse: false,
  },
  {
    title: "Qualité",
    text: "Malgré des prix bas, nous gardons des prestations de bonne qualité afin de vous satisfaire au mieux.",
    img: quality,
    reverse: true,
  },
  {
    title: "Prix pas cher",
    text: "Nos prestations de dépannage automobile sont en moyenne entre -20 à -30% par rapport a la solution classique",
    img: savings,
    reverse: false,
  },
];
