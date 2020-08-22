import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};
const mapDispatchToProps = () => {
  return {};
};
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarContainer;
