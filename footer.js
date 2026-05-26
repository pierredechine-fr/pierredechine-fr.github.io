const language = (document.documentElement.lang || 'en').toLowerCase()
const footerFileByLanguage = {
  fr: 'footer-fr.html',
  zh: 'footer-zh.html',
  en: 'footer.html',
}

const footerFile = footerFileByLanguage[language] || footerFileByLanguage.en

fetch(`./${footerFile}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load ${footerFile}: ${response.status}`)
    }
    return response.text()
  })
  .then((data) => {
    const footerTarget = document.getElementById('footer')
    if (footerTarget) {
      footerTarget.innerHTML = data
    }
  })
  .catch((error) => console.error('Error loading footer:', error))