import Datepicker from "./components/datepicker/Datepicker.tsx";

const App = () => {
  return (
    <div className="h-screen bg-neutral-800 text-white">
      <div className="container mx-auto h-full flex justify-center items-center">
        <Datepicker />
      </div>
    </div>
  );
};

export default App;
