export default function ShareButton() {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL)
        .then(() => {
            alert('URL скопирован в буфер обмена!');
        })
        .catch(err => {
            console.error('Ошибка при копировании URL:', err);
        });
}