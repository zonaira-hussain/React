import { render, screen } from '@testing-library/react';
import App from '../App';

import '@testing-library/jest-dom';
import {expect, it} from '@jest/globals';
import {create} from 'react-test-renderer';

it('should find a heading with React', () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});

it(`It should take a snapshot every time it's redered`,()=>{
  const snapShot = create(<App/>).toJSON()
  console.log(snapShot);
  expect(snapShot).toMatchSnapshot();
  //if it does not have the initial snapshot then during line 17 it will snapshot
  //only ever do it on the first time its ran.
  //Every test that run from this point on wards will use the snapshot it has as a reference 
})
