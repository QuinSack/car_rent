import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;


// {authState ? (
//   <>
//     <Route path="/cars" element={<CarListing />} />
//     <Route path="/comments" element={<Comment />} />
//   </>
// ) : (
//   <Route path="/cars" element={<Navigate to="/login" replace />} />
// )}