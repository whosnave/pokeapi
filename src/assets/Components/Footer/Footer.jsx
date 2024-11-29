import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="container">
        <footer>
          <div className="inputs">
            <h2 className="headF">Sign Up For Pokemon emails!</h2>
            <input type="email" name="" id="" placeholder="Email" /> <br />
            <input type="text" name="" id="" placeholder="United Stataes" />
            <input type="date" name="" id="" /> <br />
            <input type="button" value="SIGN UP" />
          </div>
        </footer>
        <div className="teks">
          <p>I’d like to receive emails about:</p>
          <input type="checkbox" name="" id="" /> 
          <p className="teksBF">
          Pokémon video games, apps, and
          mor
          </p>
          <input type="checkbox" name="" id="" /><p className="teksBF">
          Pokémon Center (our official online shop)
          </p>
          
          <input type="checkbox" name="" id="" /> <p className="teksBF">
          I accept the Pokemon.com Terms
          of Use and Privacy Notice
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
