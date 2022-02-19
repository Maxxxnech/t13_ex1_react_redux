import React, { PureComponent } from "react";
// Редакс, методы работающие безотносительно Реакта
//createStore - метод создания стора
//bindActionCreators - привязка функций к методу dispatch стора
import { bindActionCreators } from "redux";

//"react-redux" - связь стора и мтеодов Редакса с компонентами Реакт
//connect - связь компонента Реакт с данными стора Редакс, 
//Провайдер - передача стора всем дочерним компонентам
import { connect } from "react-redux";

// Экшн-криэйторы
import {changeFirstName, changeSecondName} from "../store/actionCreators"

// Компонент, который будет работать со стором
// Получит из пропсов данные стора и метод dispatch 
//- благодаря обертке Provider и методу connect библиотеки react-redux
class MainComponent extends PureComponent {
  render() {
    const { firstName, secondName, /*dispatch,*/ changeFirstName, changeSecondName } = this.props;
    return (
      <div>
        <h2>Video_2</h2>
        <div>
          <input
            type="text"
            placeholder="name"
            value={firstName}
            onChange={(e) => {
              // Функция, привязанная к dispatch при помощи bindActionCreators и переданная в mapDispatchToProips
              changeFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Second Name"
            value={secondName}
            onChange={(e) => {
              // Функция, привязанная к dispatch при помощи bindActionCreators и переданная в mapDispatchToProips
              changeSecondName(e.target.value);
            }}
          />
        </div>
        <div>
          {firstName} {secondName}
        </div>
      </div>
    ); 
  }
}



// Запись данных из стейта в пропсы компонента
const mapStateToProps = (state) => {
  return {
    //props  : state нашего стора
    firstName: state.firstName,
    secondName: state.secondName,
  };
};
// Передача в пропсы экшн-криэйторы
const mapDispatchToProps = (dispatch) => {
  return {
      // props      :  action creators bound to dispatch
      changeFirstName: bindActionCreators(changeFirstName, dispatch),
      changeSecondName: bindActionCreators(changeSecondName, dispatch)
  }
} 

// Подключаем стор Редакс к компоненту MainComponent
// Данные стора передадутся в пропсы компонента MainComponent
// Также в пропсы будет передан дефолтный метод dispatch
// Первый аргумент, который получает connect - mapStateToProps используется для выбора данных,
// которые требуется передать связанному компоненту
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

