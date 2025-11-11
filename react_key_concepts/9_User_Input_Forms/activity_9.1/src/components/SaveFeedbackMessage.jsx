let feedbackMessages = [];

export async function SaveFeedbackMessage(message) {
    const newFeedbackMessage = {...message, id: new Date().getTime() };
    feedbackMessages = [...feedbackMessages, newFeedbackMessage];
    return feedbackMessages;
}

export function getFeedbackMessages() {
    return feedbackMessages;
}