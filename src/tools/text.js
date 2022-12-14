export function wrap_text (text, max_length) {
    // Truncate the number of characters in a text

    if (text.length > max_length) {
        return text.slice(0, max_length) + '...'
    } else {
        return text
    }
}