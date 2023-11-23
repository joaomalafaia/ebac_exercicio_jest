import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('teste para o componente PostComment', () => {
    test('deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('deve adicionar dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('txt-comentario'), {
            target: {
                value: 'teste 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('txt-comentario'), {
            target: {
                value: 'teste 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getByTestId('comentario')).toHaveLength(2)
    })
});