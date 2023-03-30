import { RouterProvider } from 'react-router-dom';
import { router } from './routs/routes';

function App() {
  return (
    <div className="App max-w-[1400px] mx-auto font-poppins text-gray-600">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
