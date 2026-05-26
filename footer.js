const language = (document.documentElement.lang || 'fr').toLowerCase()
const footerFileByLanguage = {
  fr: 'footer.html',
  zh: 'footer-zh.html',
  en: 'footer-en.html',
}

const footerFile = footerFileByLanguage[language] || footerFileByLanguage.fr

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