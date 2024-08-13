import Cardcontainer from "./components/Cardcontainer";


function App() {
  return (
    // Global Container
    <div>
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        {/* Card container */}
        <Cardcontainer />
      </div>
    </div>
  );
}

export default App;
