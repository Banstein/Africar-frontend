function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/reservation' element={<Reservations />}></Route>
        <Route path='/carcontainer' element={<Index />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
