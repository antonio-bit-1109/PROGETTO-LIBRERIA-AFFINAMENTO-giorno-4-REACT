import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import SciFiBooks from "./data/scifi.json";
import HorrorBook from "./data/horror.json";
import RomanceBook from "./data/romance.json";
import HistoryBooks from "./data/history.json";
import FantasyBook from "./data/fantasy.json";

import { Component } from "react";

const ListOfBooks = {
    horror: HorrorBook,
    fantasy: FantasyBook,
    history: HistoryBooks,
    scifi: SciFiBooks,
    romance: RomanceBook,
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyNav home="home" about="Abous Us" browse="Find Us" />
                <Welcome welcome="Benvenuto nella libreria super Top!" />
                {/* <AllTheBooks /> */}
                <BookList ListOfBooks={ListOfBooks} />
                <MyFooter testo_par="questo è del testo passato tramite props" />
            </div>
        );
    }
}

export default App;
