import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <>
      <NavContainer>
        <h2 className='titulo'>Haru <span>Store</span></h2>
        <div>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <a href="#">Perfil</a>
        </div>
        <input  className='buscador' type="search" placeholder='Buscar' />
      </NavContainer>
    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
  .titulo{
    margin-left: 1em;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 2.5rem;
    color: #fafafa;
    span{
      font-weight: 800;
    }
  }
  padding: 1rem;
  height: 80px;
  background-color: #383838;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.8rem;
    color: #fafafa;
    text-decoration: none;
    margin-right: 2rem;
  }
  .buscador{
    height: 30px;
    width: 250px;
    border: none;
    padding: 1em;
    margin-right: 2em;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1.4rem;
    border-radius: 5px;
    outline: none;
  }
  a:hover{
    color: #e62929;
  }
`