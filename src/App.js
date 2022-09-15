import Answer from './components/Answer';
import Footer from './components/Footer';
import Header from './components/Header';
import Questions from './components/Questions';

function App() {
  return (
    <div>
      <Header />
      {/* NOTE CHANGE THE HEIGHT TO FULL SOON IF WE START CODING */}
      <div className="flex justify-between w-full bg-red-200 h-96 ">
        <div className="w-1/2 bg-blue-200 ">
          <Questions />
        </div>
        <div className="w-1/2 bg-red-900">
          <Answer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
