import './css/App.css';
import PricingDisplay from './components/PricingDisplay';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="intro-header">
        <h2>Simple, traffic-based pricing</h2>
        <div className="description">
        <p>Sign-up for our 30-day trial.</p>
        <p className="float">No credit card required. </p>
        </div>
      </header>
      <main>
        <PricingDisplay />
      </main>
      </div>
    </div>
  );
}

export default App;
