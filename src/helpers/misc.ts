export const cutText = (text: string, length = 40) => {
    return text && (text.length > length) ?
        `${text.substring(0, length)}...` :
        text
}
