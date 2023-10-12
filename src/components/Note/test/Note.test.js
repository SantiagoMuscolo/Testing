import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, prettyDOM, render } from '@testing-library/react';
import Note from '../Note';

test('render content', () => {
    const note = {
        content: 'This is a test',
        important: true
    }

    const component = render(<Note note={note} />)

    //basic form
    component.getByText('This is a test'); 

    //if you want a more specific form to specify what are you specting
    expect(component.container).toHaveTextContent(note.content);

    //if you want to find a specific query you could use that & add prettyDOM to see the dom which is returning easier
    const li = component.container.querySelector('li');
    console.log(prettyDOM(li))

})

test('clicking the button calls event handler once', () => {
    const note = {
        content: 'This is a test',
        important: true
    }

    const mockHandler = jest.fn();

    const component = render(<Note note={note} toggleImportance={mockHandler}/>);

    const button = component.getByText('make not important');
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
})