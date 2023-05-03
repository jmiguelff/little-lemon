import { render, screen, waitFor } from '@testing-library/react';
import BookingMain from './components/bookingMain/BookingMain';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

describe("Booking Form Time Input", () => {
    test('shows correct input label', () => {
        render(
            <BrowserRouter>
                <BookingMain />
            </BrowserRouter>
        );
        const labelElement = screen.getByText("Choose time");
        expect(labelElement).toBeInTheDocument();
    });

    test('should display time options loaded from fetchAPI', () => {
        render(
            <BrowserRouter>
                <BookingMain />
            </BrowserRouter>
        );
        expect(screen.getAllByTestId('option').length).toBeGreaterThan(0);
    })

    test('should update time options after date selection', async () => {
        render(
            <BrowserRouter>
                <BookingMain />
            </BrowserRouter>
        );
        const dateInput = screen.getByTestId('date-input')
        userEvent.type(dateInput, "05/10/2030")

        expect(screen.getAllByTestId('option').length).toBeGreaterThan(0);
    })
    /*
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
    */
})



