import { NavBar } from './components/NavBar.tsx';
import { HeroBackground } from './components/HeroBackground.tsx';
import { CenterBody } from './components/CenterBody.tsx';

function App() {
  return (
    <HeroBackground>
      <NavBar />
      <body>
        <CenterBody />
      </body>
    </HeroBackground>
  );
}


export default App
