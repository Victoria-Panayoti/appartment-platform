import Header from "./Header/Header";
import AppartBoard from "./AppartBoard/AppartBoard";

function App() {
  return (
    <div>
      <Header />
      <AppartBoard apparts={[1,2,3,4,5]} />
    </div>
  );
}

export default App;
