export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob',
  }
};

export type Action =
    | { type: 'changed_selection', contactId: number }
    | { type: 'edited_message', message: string, contactId: number}

export type DispatchType = (action: Action) => void;

interface MessengerState {
    selectedId: number,
    messages: { [contactId: number]: string }
}


export function messengerReducer(
    state: MessengerState,
    action: Action
): MessengerState {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.contactId]: action.message
        }
      };
    }
    default: {
      throw Error('Unknown action: ' + action);
    }
  }
}
