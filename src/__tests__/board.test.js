import React from 'react';
import { shallow } from 'enzyme';
import { Board } from '../board';

 it('renders without crashing', () => {
  shallow(<Board squares={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />);
});
