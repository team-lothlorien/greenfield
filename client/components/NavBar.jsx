
var NavBar = (props) => {

  return (
    <div className="navWrapper">
      <span className="logoWrap"
            onClick={event => {props.takeUsToHomePage(event)}}>
        <h1 className="logo">Whats Up Doc</h1>
      </span>
      <span
        className="favorites"
        onClick={event => {props.takeUsToFavoritesPage(event)}}>Favorites
      </span>
      <span
        className="login"
        onClick={event => {props.takeUsToLoginPage(event)}}>Login/Signup
      </span>
    </div>
  );
};

export default NavBar;
