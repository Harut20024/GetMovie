import './home.css';
import Main from '../Home/Main/Main';
import AllImagesScroll from './AllImagesScroll/AllImagesScroll';


function Home() {

  return (
    <div>
      <div className="main">
      <AllImagesScroll />
        <Main />
      </div>
    </div>
  );
}

export default Home;
