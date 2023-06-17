import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={325}
          messages={206}
          shares={683}
          name="Caio_Castro"
          description="Goalkeeper's test for next catolympics"
          music="Epic training music"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"        
        />
        <Video
          likes={325}
          messages={206}
          shares={683}
          name="Caio_Castro"
          description="Goalkeeper's test for next catolympics"
          music="Epic training music"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"        
        />
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
