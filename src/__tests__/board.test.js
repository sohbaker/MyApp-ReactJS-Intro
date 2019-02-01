import React from 'react';
import { shallow } from 'enzyme';
import { Board } from '../board';

 it('renders without crashing', () => {
  shallow(<Board squares={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />);
});

it('renders squares values of 0 to 8', () => {
 const wrapper = shallow(<Board squares={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />);
 wrapper.debug();
 expect(wrapper.find('Square').at(0).prop('value')).toBe(0)
 expect(wrapper.find('Square').at(8).prop('value')).toBe(8)
});
