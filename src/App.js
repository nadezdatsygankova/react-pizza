
import './App.css';
import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizza.json';


function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">All Pizzas</h2>
            <div class="content__items">
              {
              pizzas.map((obj) => (
                <PizzaBlock title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                types ={obj.types}
                sizes ={obj.sizes}
                 />
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
