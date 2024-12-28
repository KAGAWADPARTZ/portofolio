import './App.css';



function App() {
  const name ='Danielito';
  return (
    
    <div className="w-full h-screen flex justify-center items-center bg-slate-600">
 
        <title>Dynamic Title</title>
       
    
      <div className="h-1/2 w-1/4 bg-white p-5 rounded-lg shadow-lg flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-red-600 ">
          Welcome to Tailwind CSS with React! {name}
        </h1>
      </div>
    </div>
  );
}

export default App;
