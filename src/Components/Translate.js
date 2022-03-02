import React from 'react'

function Translate() {
    const loadGoogleTranslate = () => {
        var googleTranslateElement = document.createElement('div');
        googleTranslateElement.innerHTML = `<div id="google_translate_element"></div>`;
        document.getElementById('google_translate_element').appendChild(googleTranslateElement);
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }
          }

  return (
    <div id="google_translate_element ">

    </div>
  )
}

export default Translate