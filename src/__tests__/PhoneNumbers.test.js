import React from 'react';
import { shallow, mount } from 'enzyme';
import { PhoneNumbers, backToTop } from '../components/PhoneNumbers';

describe('PhoneNumbers',()=>{
  let props = {
    phones: [],
    match: {
      location: {
        pathname: '/unknown/path'
      }
    }
  }
  const mountedRender = (props) =>
  mount(<PhoneNumbers {...props} />)
  it('should receive props as expected',() => {
    props = { ...props, match: { location: { pathname: '/generate/asc' } } }
    const component = mountedRender(props)
    expect(component.props()).toEqual(props);
  })

  it('should receive props as expected phones = [] and sort is desc',() => {
    props = {
      ...props,
      phones:['0779954066', '0704367965'],
      match: {
        location: {
          pathname: '/generate/desc'
        }
      }
    }
    const component = mountedRender(props)
    expect(component.props()).toEqual(props);
  })
  it('has a default for unsorted numbers',() => {
    props = { ...props,
      phones: ['0779954066', '0704367965'],
      match: {
        location: {
          pathname: '/generate'
        }
      }
    }
    const component = mountedRender(props)
    expect(component.find('.unsorted-tag').text()).toBe('Un sorted')
  })
  it('creates the back-to-top button if results are more than 100',()=>{
    props = { ...props, phones: Array(1001)}
    const component = mountedRender(props)
    expect(component.find('.back-to-top').text()).toBe('Back to top')
  })
  it('moves the page backto top',()=>{
    const event = { preventDefault: jest.fn() }
    expect(backToTop(event)).toBe(0);
  })
})







