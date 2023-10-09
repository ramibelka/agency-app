import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  cursor: pointer; // Add cursor pointer to the logo
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer; // Add cursor pointer to menu items
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="home" smooth={true} duration={1000}>
            {" "}
            {/* Link to home section */}
            <Logo>Agency</Logo>
          </Link>
          <Menu>
            <Link to="home" smooth={true} duration={1000}>
              {" "}
              {/* Link to features section */}
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to="features" smooth={true} duration={1000}>
              {" "}
              {/* Link to features section */}
              <MenuItem>Features</MenuItem>
            </Link>

            <Link to="services" smooth={true} duration={1000}>
              {" "}
              {/* Link to services section */}
              <MenuItem>Services</MenuItem>
            </Link>
            <Link to="pricing" smooth={true} duration={1000}>
              {" "}
              {/* Link to pricing section */}
              <MenuItem>Pricing</MenuItem>
            </Link>
            <Link to="contact" smooth={true} duration={1000}>
              {" "}
              {/* Link to contact section */}
              <MenuItem>Contact</MenuItem>
            </Link>
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
