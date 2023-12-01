import styles from "./App.module.scss";
import MainPage from "./components/MainPage/MainPage.component";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <MainPage />
      </div>
    </div>
  );
};

export default App;
