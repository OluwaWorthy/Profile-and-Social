import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      
      <body>
            <div className='main' id="root">
              <div class="header">
                <img src="public/profile_Image.jpg" alt="profile_img"/>
                <form>
                  <input type="text" name="twitter" placeholder="@toeyhin" />
                  <br/>
                  <input type="hidden" name="slack" placeholder="@oluwatee" />
                  <br/>
                </form>
              </div> 
              <ul>
                <li>
                    <a href="http://training.zuri.team/" role="button" >btn_zuri</a>
                </li>
                <li>
                    <a href="http://books.zuri.team/">Books</a>
                    <br/>
                    <p>
                        Find books about design and coding <a href="http://books.zuri.team/">here</a>
                    </p>
                </li>
                <li>
                    <a href="http://books.zuri.team/python-for-beginners?ref_id=@oluwatee">Book-Python</a>
                    <br/>
                    <p>
                        learn step by step how to write code using python. Perfect for beginners. 
                        Click <a href="http://books.zuri.team/python-for-beginners?ref_id=@oluwatee">here</a> to purchase book.
                    </p>
                </li>
                <li>
                    <a href="http://background.zuri.team">Pitch</a>
                    <br/>
                    <p>
                        Engineer or Hacker. We employ the latest technologies and databasis to serve you.
                        Before taking that personnel decision, <a href="http://background.zuri.team">Contact</a> us today.
                    </p>
                </li>
                <li>
                    <a href="http://books.zuri.team/design-rules">book_design</a>
                    <br/>
                    <p>
                        Want to take a course in design and don't know where to start?
                        We got you! I'm giving out 75 <a href="http://books.zuri.team/design-rules">free design books</a> courtesy of Zuri.
                    </p>
                </li>
              </ul>
           </div>
      </body>


    </div>
  );
}

export default App;
