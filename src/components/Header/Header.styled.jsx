import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const HeaderImg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -158%);

  @media screen and (min-width: 768px) {
    width: 72px;
    height: 52px;
  }

  @media screen and (min-width: 1200px) {
    width: 270px;
    height: 184px;
  }
`;

export const NavMenu = styled.div`
  display: none;
  padding: 15px 25px 0 0;

  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }

  @media screen and (min-width: 1200px) {
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 8px;
  text-decoration: none;
  color: var(--nav-color);
  font-family: var(--secondary-regular);
  font-size: 14px;
  line-height: 16px;

  &:hover,
  &:focus,
  &.active {
    color: var(--nav-hover-color);
  }

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 18px;
    line-height: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
    line-height: 26px;
    padding: 8px 16px;
  }
`;