const languages = {
    de: 'de-DE',
    us: 'en-US',
    us: 'en-GB',
};
function LanguageSelector({country}) {
    return <p>Selected Language: {languages[country]}</p>
}