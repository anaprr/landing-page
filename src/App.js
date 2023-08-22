import Menu from "./components/Menu";
import Foto from "./components/Foto";
import Imagem from "./components/img/lana.jpg";
import Disco from "./components/Disco";
import Imagem2 from "./components/img/disco.webp"
import Texto from "./components/Texto";
import Fim from "./components/Fim";

function App(props) {
  
  return (
    <>
      <Menu></Menu>
      <Foto foto={Imagem}></Foto>
      <Disco disco={Imagem2}></Disco>
      <Texto>West Coast (radio mix)3:48
        <p></p>
      Fucked My Way Up To The Top 3:32
      <p></p>
      The Other Woman 3:02
      <p></p>
      Ultraviolence 4:11
      <p></p>
      Sad Girl 5:18
      <p></p>
      Old Money 4:31
      <p></p>
      West Coast 4:17
      <p></p>
      Cruel World 6:40
      <p></p>
      Shades of Cool 5:42
      <p></p>
      Money Power Glory 4:31
      <p></p>
      Brooklyn Baby [Explicit]5:51
      <p></p>
      Pretty When You Cry 3:54
      </Texto>
      <p></p>
      <Fim>Listen now:
        <p></p>
         https://open.spotify.com/playlist/3zeufoRLGJ2o7cDyFESq1f?si=1d0575ff1b3c439c
        <p></p>
        Meet Lana:
        <p></p>
        Spotify: Lana Del Rey
        <p></p>
        Instagram: Honeymoon
      </Fim>
    </>
  );

}

export default App;
