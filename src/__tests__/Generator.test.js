import React from 'react';
import { shallow } from 'enzyme';
import Generator from '../components/Generator';

describe('Generator',()=>{
    const shallowRender = () => shallow(<Generator />)
  it('should have initial state of 1000 numbers', () => {
    const component = shallowRender();
    expect(component.state()).toEqual({ numberOfNumbers: 1000 })
  });
  it('handles input changes',()=>{
    const component = shallowRender();
    const event = {target: { value: 100000}};
    component.find('input').simulate('change', event);
    expect(component.state()).toEqual({ numberOfNumbers: 100000 })
  })
  it('handles doesnt allow one to generate 0 numbers',()=>{
    const component = shallowRender();
    const event = {target: { value: ''}};
    component.find('input').simulate('change', event);
    expect(component.state()).toEqual({ numberOfNumbers: 1 })
  })
  it('generates phone numbers, ie, calls the generate class method',()=>{
    const component = shallowRender();
    const spy = jest.spyOn(component.instance(), 'generate')
    component.instance().forceUpdate()
    const event = { preventDefault:jest.fn() }
    component.find('form').simulate('submit', event);
    expect(spy).toHaveBeenCalled()

  })
})