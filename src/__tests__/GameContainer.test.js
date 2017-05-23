import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from '../containers/GameContainer';
import { shallow } from 'enzyme';

describe('GameContainer', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<GameContainer />, div);
  });

  it('renders a default blank board', () => {
    const gridLayout =  [0, 0, 0, 0, 0, 0, 0, 0, 0]
    const gameContainer = shallow(<GameContainer />);
    expect(gameContainer.state('gridLayout')).toEqual(gridLayout);
  });

  it('renders a default player 1', () => {
    const gameContainer = shallow(<GameContainer />);
    expect(gameContainer.state('player')).toEqual(1);
  });

  it('changes players', () => {
    const gameContainer = shallow(<GameContainer />);
    gameContainer.instance().handlePlayerChange(1)
    expect(gameContainer.instance().handlePlayerChange(1)).toEqual(2);
  });
})

