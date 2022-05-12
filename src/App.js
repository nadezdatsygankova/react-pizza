
import './App.css';
import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

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
              <PizzaBlock title="ULTIMATE PEPPERONI" price={11.69} />
              <PizzaBlock title="PEPPERONI" price={11.69} />
              <PizzaBlock title="CHARCUTERIE" price={17.49} />
              <PizzaBlock title="HOT HONEY" price={16.29} />
              <PizzaBlock title="BUFFALO CHICKEN" price={17.89} />
              <PizzaBlock title="BUTTER CHICKEN" price={16.89} />
              <PizzaBlock title="PROSCIUTTO & ARUGULA" price={14.29} />
              <PizzaBlock title="HAWAIIAN" price={13.29} />
              <PizzaBlock title="MEAT SUPREME" price={16.49} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
