import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <ul>
          <div className="box1">
            <li>
              <a href="">Home</a>
            </li>
          </div>
          <div className="box2">
            <li>
              <a href="">Pokedex</a>
            </li>
          </div>
          <div className="box3">
            <li>
              <a href="">
                Video Games & <br />
                App
              </a>
            </li>
          </div>
          <div className="box4">
            <li>
              <a href="">Trading Card Game</a>
            </li>
          </div>
          <div className="box5">
            <li>
              <a href="">Animation</a>
            </li>
          </div>
          <div className="box6">
            <li>
              <a href="">
                Play! Pokemon <br /> Events
              </a>
            </li>
          </div>
          <div className="box7">
            <li>
              <a href="">News</a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
