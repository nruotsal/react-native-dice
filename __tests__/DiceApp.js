import 'react-native';
import React from 'react';
import DiceApp from '../src/components/DiceApp.tsx';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<DiceApp />);
});
