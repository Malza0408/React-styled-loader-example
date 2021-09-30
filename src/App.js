import logo from './logo.svg';
// import './App.css';
// import './App.scss';

// css 와 scss 방식은 동일하다. styles 를 받아오고 똑같이 사용하면 된다.
import styles from "./App.module.css";
//import styles from './App.module.scss';
import Button from './components/Button';

function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['header']}>
        <img src={logo} className={styles['logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
