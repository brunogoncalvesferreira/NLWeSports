import "./App.css";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";

import twitch from "./assets/twitch.svg"
import instagram from "./assets/instagram.svg"
import twitter from "./assets/twitter.svg"
import youtube from "./assets/youtube.svg"


const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive",
    imageURL: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
    alt: "Capa do game Counter-Strike",
  },
  {
    url: "https://www.twitch.tv/directory/game/Garena%20Free%20Fire",
    imageURL: "https://static-cdn.jtvnw.net/ttv-boxart/502732_IGDB-188x250.jpg",
    alt: "Capa do game Free-Fire",
  },
  {
    url: "https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Warzone",
    imageURL: "https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg",
    alt: "Capa do game Call of Duty Warzone",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageURL:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de perfil do canal do Mayk Brito",
  },
  {
    url: "https://www.twitch.tv/loud_coringa",
    imageURL:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c07acddc-1e1b-479f-97c4-09636f80e857-profile_image-150x150.png",
    alt: "Imagem de perfil do canal do loud_coringa",
  },
  {
    url: "https://www.twitch.tv/nobru",
    imageURL:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/2860bc62-377d-40da-918b-470b2afe08e8-profile_image-150x150.png",
    alt: "Imagem de perfil do canal do Nobru",
  },
];

const socialListData = [
  {
    url:"https://www.twitch.tv/brunogoncalvesferreira",
    imageURL:twitch,
    alt:"twitch"
  },
  {
    url:"https://www.instagram.com/brunogonferreira/",
    imageURL:instagram,
    alt:"Instagram"
  },
  {
    url:"https://twitter.com/BrunoGoferreir",
    imageURL:twitter,
    alt:"Twitter"
  },
  {
    url:"https://www.youtube.com/channel/UC0cbk6vFw_q15MN_c_Br-8A",
    imageURL:youtube,
    alt:"Youtube"
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subTitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gameListData.map((items) => {
            return (
              <ListItem
                url={items.url}
                imageURL={items.imageURL}
                alt={items.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e streamers"
          subTitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListData.map((items) => {
            return (
              <ListItem
                url={items.url}
                imageURL={items.imageURL}
                alt={items.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subTitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map((items) => {
            return (
              <ListItem
                url={items.url}
                imageURL={items.imageURL}
                alt={items.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}

export default App;
