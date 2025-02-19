import React from "react";
import { NavLink as RouterNavLink, Outlet } from "react-router-dom";
import { UserCircle } from "lucide-react";
import styled from "styled-components";

// Styled Components
const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: var(--color-surface);
`;

const Sidebar = styled.aside`
  width: 256px;
  height: 100%;
  background-color: var(--color-surface-secondary);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
`;

const ProfileSection = styled.div`
  position: relative;
  /* height: 30vh; */
  height: 30%;
  background-color: var(--color-surface);
  background-image: url("me.jpg");
  background-size: cover;
  background-position: center;

  /* padding: var(--spacing-md); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Name = styled.h2`
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  margin-bottom: 0;
  background-color: var(--color-primary);
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  font-family: var(--font-family-primary);
  letter-spacing: 4px;
`;

const Navigation = styled.nav`
  flex: 1;
  padding: var(--spacing-md);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const NavLink = styled(RouterNavLink)`
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--color-surface);
    color: var(--color-text);
  }

  &.active {
    background-color: var(--color-primary);
    color: white;
    font-weight: 500;
  }
`;

const MainContent = styled.main`
  flex: 1;
  height: 100%;
  overflow: auto;
  background-color: var(--color-surface);
  padding: var(--spacing-xl);
`;

const AppLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar>
        <ProfileSection>
          <Name>Kishan</Name>
        </ProfileSection>

        <Navigation>
          <NavList>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.label}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </NavList>
        </Navigation>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default AppLayout;
