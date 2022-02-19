import React from 'react';
import './App.css';

//"react-redux" - связь стора и методов Редакса с компонентами Реакт
// Провайдер получает в качестве пропса наш стор
// И делает его доступным ВСЕМ ВЛОЖЕННЫМ КОМПОЕНТАМ
import { Provider } from "react-redux";

// редьюсер для нашего стора
import { rootReducer } from "./store/reducers";

//Компонент, в котором будет использовться стор
import MainComponent from './components/MainComponent';
// Редакс, методы работающие безотносительно Реакта
//createStore - метод создания стора
import { createStore } from "redux";

// Создаем стор стандартным методом библиотеки redux
const store = createStore(rootReducer);


function App() {
  return (
    <div className="App">
     <h1>t13: React redux</h1>
     <Provider store={store}><MainComponent /></Provider>
    </div>
  );
}

export default App;
