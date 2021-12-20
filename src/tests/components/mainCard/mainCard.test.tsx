import React from 'react';
import {render, screen} from '@testing-library/react';
import MainCard from '../../../components/mainCard/mainCard';

it('test MainCard snap', () => {
    const props = {
        title: 'Title',
        content: true,
    }

    const {asFragment} = render(<MainCard {...props}>Children</MainCard>);
    const firstRender = asFragment()

    expect(firstRender).toMatchSnapshot()

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
});
