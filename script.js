document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.querySelector('#input')
    const outputText = document.querySelector('#output')
    const translateBtn = document.querySelector('#translateBtn')



    async function translateText() {
        const text = inputText.value.trim();
         if (text == '' ){
            outputText.textContent = 'введіть текст для перекладу ';
            return;
         }


        const safeText = encodeURIComponent(text);
        const email = 'weblogika13@gmail.com'
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

        const response = await fetch(url);

        const data = await response.json();


        console.log(data);
        outputText.textContent = data.responseData.translatedText

    }

translateBtn.addEventListener('click', translateText);


    
});