import Navbar from "./components/Navbar"
import Note from "./components/Note"
import ShowNotes from "./components/ShowNotes"

function App() {

  return (
    <div className="App bg-slate-800 text-white">
      <Navbar />
      <Note />
      {/* <ShowNotes /> */}
    </div>
  )
}

export default App
