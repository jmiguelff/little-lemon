import { render, screen, waitFor } from '@testing-library/react';
import BookingMain from './components/bookingMain/BookingMain';
import userEvent from '@testing-library/user-event';



describe("Booking Form Time Input", () => {
    test('shows correct input label', () => {
        render(<BookingMain />);
        const labelElement = screen.getByText("Choose time");
        expect(labelElement).toBeInTheDocument();
    });

    test('should display 6 options', () => {
        render(<BookingMain />);
        // const selectOptions = screen.getByTestId('select-option')
        // fireEvent.change(screen.getByTestId('select-option'), { target: { value: "17:00" } })
        expect(screen.getAllByTestId('option').length).toBe(6);
    })

    test('valid initial values as options', () => {
        render(<BookingMain />);
        let options = screen.getAllByTestId('option')
        expect(options[0]).toHaveValue('17:00')
        expect(options[1]).toHaveValue('18:00')
        expect(options[2]).toHaveValue('19:00')
        expect(options[3]).toHaveValue('20:00')
        expect(options[4]).toHaveValue('21:00')
        expect(options[5]).toHaveValue('22:00')
    })

    test('check if time updates', async () => {
        render(<BookingMain />);

        userEvent.selectOptions(
            screen.getByTestId('select-option'),
            '17:00'
        )

        userEvent.click(
            screen.getByRole('button')
        )

        await waitFor(() => {
            let options = screen.getAllByTestId('option')
            expect(options[0]).toHaveValue('18:00')
        })

        await waitFor(() => {
            let options = screen.getAllByTestId('option')
            expect(options[1]).toHaveValue('19:00')
        })

        await waitFor(() => {
            let options = screen.getAllByTestId('option')
            expect(options[2]).toHaveValue('20:00')
        })

        await waitFor(() => {
            let options = screen.getAllByTestId('option')
            expect(options[3]).toHaveValue('21:00')
        })

        await waitFor(() => {
            let options = screen.getAllByTestId('option')
            expect(options[4]).toHaveValue('22:00')
        })
    })
})



