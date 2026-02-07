document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.querySelector('#input')
    const outputText = document.querySelector('#output')
    const translateBtn = document.querySelector('#output')



    async function translateText() {
        const text = inputText.value.trim();
        const safeText = encodeURIComponent(text);
        const email = 'weblogika13@gmail.com'
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

        const response = await fetch(url);

        const data = await response.json();


        console.log(data);
        outputText.textContent = data.responseData.translateText

    }

translateBtn.addEventListener('click', translateText);


    
});