import './App.css';



function App() {
  const name ='Danielito';
  return (
    
    <div className="w-full h-screen flex justify-center items-center bg-pink-300">
 
        <title>Dynamic Title</title>
       
    
      <div className="h-1/2 w-1/3 bg-white p-5 rounded-lg shadow-lg flex justify-center items-center flex-col border-4 border-pink-700 text-center gap-4">
        <h1 className="text-3xl font-bold text-rose-700 tracking-tight">
          Welcome to Tailwind  
        </h1>
        <h1 className="text-3xl font-bold text-rose-700 tracking-tight">
           CSS with React! 
        </h1>
        <p className="text-3xl font-bold text-gray-800 tracking-tight">{name}</p>
      </div>
    </div>
  );
}

export default App;
