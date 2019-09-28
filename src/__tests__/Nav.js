import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../components/Nav';
import { MemoryRouter } from 'react-router-dom'

describe('Nav', ()=>{
   const mountComponent = () => mount(
    <MemoryRouter initialEntries={['/generate']}>
      <Nav />
    </MemoryRouter>
    )
  it.skip('navigates',()=>{
    const component = mountComponent();
    component.find('.navbar-menu .navbar-start .navbar-item').at(0).simulate('click');
  })
})