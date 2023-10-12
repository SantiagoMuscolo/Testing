import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { fireEvent, render } from '@testing-library/react';
import Togglable from '../Togglable';
import i18n from '../../../i18n';

describe('<Toggable />', () => {
    const buttonLabel = 'show'
    let component;

    beforeEach(() => {
        component = render(
            <Togglable buttonLabel='show'>
                <div className='testDiv'>testDivContent</div>
            </Togglable>
        )
    })

    test('renders its children', () => {
        component.getByText('testDivContent');
    })

    test('renders its children but they are not visible', () => {
        const el = component.getByText('testDivContent')
        expect(el.parentNode).not.toBeVisible()
    })

    test('after clicking its children must be shown', () => {
        const button = component.getByText(buttonLabel)
        fireEvent.click(button)

        const el = component.getByText('testDivContent')
        expect(el.parentNode).toBeVisible()
    })

    test('toggled content can be closed', () => {
        const button = component.getByText(buttonLabel);
        fireEvent.click(button);

        const cancelButton = component.getByText(i18n.TOGGABLE.CANCEL_BUTTON);
        fireEvent.click(cancelButton);
    })
})