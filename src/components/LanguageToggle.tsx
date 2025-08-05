 
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(i18n.language)

  useEffect(() => {
    setLang(i18n.language)
  }, [i18n.language])

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
    setLang(newLang)
  }

  return (
    <div className="flex justify-end px-6 py-2">
      <Button variant="outline" onClick={toggleLanguage}>
        <span className="text-xl">{lang === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}</span>
      </Button>
    </div>
  )
}
