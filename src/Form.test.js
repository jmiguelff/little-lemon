/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act } from '@testing-library/react';
import BookingMain from './components/bookingMain/BookingMain';
import BookingForm from './components/bookingForm/BookingForm';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

describe("Booking Form Time Input", () => {
    test('shows correct input label', () => {
        render(
            <BrowserRouter>
                <BookingMain />
            </BrowserRouter>
        );
        const labelElement = screen.getByText("Choose a Time");
        expect(labelElement).toBeInTheDocument();
    });

    test('should display time options loaded from fetchAPI', () => {
        render(
            <BrowserRouter>
                <BookingMain />
            </BrowserRouter>
        );
        expect(screen.getAllByTestId('time-opt-input').length).toBeGreaterThan(0);
    })

    test('should update time options after date selection', async () => {
        render(
            <BrowserRouter>
                <BookingMain />
            </BrowserRouter>
        );
        const dateInput = screen.getByTestId('date-input')
        act(() => {
            userEvent.type(dateInput, "05/10/2030")
        });
        expect(screen.getAllByTestId('time-opt-input').length).toBeGreaterThan(0);
    })
})

describe("Booking form all fields", () => {
    test('Render and submits with all fields filled', async () => {
        const apiSubmit = jest.fn()
        const updateTimes = jest.fn()
        const initalTimes = [
            "18:00", "19:00", "20:00", "21:00"
        ];

        render(
            <BrowserRouter>
                <BookingForm availableTimes={initalTimes} getAvailableTimes={updateTimes} apiSubmit={apiSubmit} />
            </BrowserRouter>
        );

        const dateInput = screen.getByTestId('date-input')
        act(() => {
            userEvent.clear(dateInput)
            userEvent.type(dateInput, "2023-11-10")
        });

        const timeInput = screen.getByTestId('time-input')
        act(() => {
            userEvent.selectOptions(timeInput, "20:00")
        });

        const guestInput = screen.getByTestId('guests-input')
        act(() => {
            userEvent.type(guestInput, "2")
        });

        const occasionInput = screen.getByTestId('occasion-input')
        act(() => {
            userEvent.selectOptions(occasionInput, "anniversary")
        });

        const nameInput = screen.getByTestId('name-input')
        act(() => {
            userEvent.type(nameInput, "John")
        });

        const emailInput = screen.getByTestId('email-input')
        act(() => {
            userEvent.type(emailInput, "john@fake.com")
        });

        const phoneInput = screen.getByTestId('phone-input')
        act(() => {
            userEvent.type(phoneInput, "912567810")
        });

        act(() => {
            userEvent.click(screen.getByRole('button'))
        });

        await waitFor(() =>
            expect(apiSubmit).toHaveBeenCalledWith({
                date: '2023-11-10',
                time: '20:00',
                guestsNumber: 2,
                occasion: 'anniversary',
                name: 'John',
                email: 'john@fake.com',
                phoneNumber: '912567810'
            }),
        )
    })

    test('Past dates are not aceptable', async () => {
        const apiSubmit = jest.fn()
        const updateTimes = jest.fn()
        const initalTimes = [
            "18:00", "19:00", "20:00", "21:00"
        ];

        render(
            <BrowserRouter>
                <BookingForm availableTimes={initalTimes} getAvailableTimes={updateTimes} apiSubmit={apiSubmit} />
            </BrowserRouter>
        );

        const dateInput = screen.getByTestId('date-input')
        act(() => {
            userEvent.clear(dateInput)
            userEvent.type(dateInput, "2021-11-10")
        });

        const timeInput = screen.getByTestId('time-input')
        act(() => {
            userEvent.selectOptions(timeInput, "20:00")
        });

        const guestInput = screen.getByTestId('guests-input')
        act(() => {
            userEvent.type(guestInput, "2")
        });

        const occasionInput = screen.getByTestId('occasion-input')
        act(() => {
            userEvent.selectOptions(occasionInput, "anniversary")
        });

        const nameInput = screen.getByTestId('name-input')
        act(() => {
            userEvent.type(nameInput, "John")
        });

        const emailInput = screen.getByTestId('email-input')
        act(() => {
            userEvent.type(emailInput, "john@fake.com")
        });

        const phoneInput = screen.getByTestId('phone-input')
        act(() => {
            userEvent.type(phoneInput, "912567810")
        });

        act(() => {
            userEvent.click(screen.getByRole('button'))
        });

        await waitFor(() => {
            const errorMsg = screen.getByText("Invalid date, it is in the past");
            expect(errorMsg).toBeInTheDocument();
        });
    })

    test('Form required fields need to be filled', async () => {
        const apiSubmit = jest.fn()
        const updateTimes = jest.fn()
        const initalTimes = [
            "18:00", "19:00", "20:00", "21:00"
        ];

        render(
            <BrowserRouter>
                <BookingForm availableTimes={initalTimes} getAvailableTimes={updateTimes} apiSubmit={apiSubmit} />
            </BrowserRouter>
        );

        act(() => {
            userEvent.click(screen.getByRole('button'))
        });

        await waitFor(() => {
            const errorMsgDate = screen.getByText("Reservation date is required");
            expect(errorMsgDate).toBeInTheDocument();
        });

        await waitFor(() => {
            const errorMsgTime = screen.getByText("Time is required");
            expect(errorMsgTime).toBeInTheDocument();
        });

        await waitFor(() => {
            const errorMsgName = screen.getByText("Name is required");
            expect(errorMsgName).toBeInTheDocument();
        });

        await waitFor(() => {
            const errorMsgEmail = screen.getByText("E-mail information is required");
            expect(errorMsgEmail).toBeInTheDocument();
        });

        await waitFor(() => {
            const errorMsgEmail = screen.getByText("Phone number is required");
            expect(errorMsgEmail).toBeInTheDocument();
        });
    })
})