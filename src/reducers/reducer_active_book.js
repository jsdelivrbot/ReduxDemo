// State argument is not application state, only state
// application is responsible for
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state
}
