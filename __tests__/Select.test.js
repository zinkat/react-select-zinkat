import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../src/index';

test('renders Select component', () => {

  // Définition des options pour le composant Select.
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
//rendu du composant Select avec les options définies et d'autres propriétés.
  render(<Select options={options} title="Test Select" valueKey="value" labelKey="label" />);

  // Vérifie que le composant est rendu correctement dans le DOM
  expect(screen.getByText('Test Select')).toBeInTheDocument();

  // Simule une sélection d'option
  userEvent.selectOptions(screen.getByRole('combobox'), 'option1');

});
