export function shouldFeur(message) {
    const content = message.trim().toLowerCase();
    return /(\w*quoi)[?!.\s]*$/i.test(content);
}