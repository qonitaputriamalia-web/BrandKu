import { useState } from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import CardGrid from "./components/CardGrid"
import {featureData} from "./data/features"
// import WhyUs from "./components/WhyUs"


function App() {
  const [features] = useState(featureData);

  return (
    <div>
      <Header />
      <main class="pb-10">
        <Hero />
       <CardGrid features={features}/>
      </main>
      <footer class="bg-slate-900 py-10 text-center font-medium text-md text-slate-400">
        <p>&copy; 2026 BrandKu All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
