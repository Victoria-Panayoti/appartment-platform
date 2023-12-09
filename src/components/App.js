import Header from "./Header/Header";
import AppartBoard from "./AppartBoard/AppartBoard";
import upcomingAppart from "../upcoming-appart.json"

function App() {
  return (
    <div>
      <Header />
      <AppartBoard apparts={upcomingAppart} />
    </div>
  );
}

export default App;
