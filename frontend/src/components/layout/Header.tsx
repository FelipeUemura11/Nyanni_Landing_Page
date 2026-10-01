import { useEffect, useRef, useState } from 'react'
import { brand, contact, hero, navigation } from '../../content/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { cx } from '../../lib/cx'
import { buildWhatsAppLink } from '../../lib/whatsapp'
import { Icon } from '../icons/Icon'
import { Button } from '../ui/Button'
import styles from './Header.module.css'

const SECTION_IDS = ['inicio', ...navigation.map((item) => item.href.slice(1))]
const DESKTOP_QUERY = '(min-width: 961px)'
const whatsappHref = buildWhatsAppLink(contact.whatsappNumber, contact.greeting)

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const scrolled = useScrolled()
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onViewportChange)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onViewportChange)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const renderLinks = (linkClass: string, onClick?: () => void) =>
    navigation.map((item) => {
      const isActive = activeId !== null && item.href === `#${activeId}`
      return (
        <li key={item.label}>
          <a
            href={item.href}
            className={linkClass}
            aria-current={isActive ? 'true' : undefined}
            onClick={onClick}
          >
            {item.label}
          </a>
        </li>
      )
    })

  return (
    <header className={cx(styles.header, (scrolled || menuOpen) && styles.scrolled)}>
      <div className={cx('container', styles.bar)}>
        <a href="#inicio" className={styles.brand} aria-label={`${brand.fullName}, voltar ao início`}>
          {brand.name}
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navList}>{renderLinks(styles.navLink)}</ul>
        </nav>

        <div className={styles.actions}>
          <a className={styles.contactLink} href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Falar conosco
          </a>
          <Button size="sm" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      <div id="menu-mobile" className={styles.mobilePanel} hidden={!menuOpen}>
        <nav className="container" aria-label="Principal (celular)">
          <ul className={styles.mobileList}>{renderLinks(styles.mobileLink, closeMenu)}</ul>
          <div className={styles.mobileActions}>
            <Button href={hero.primaryCta.href} block onClick={closeMenu}>
              {hero.primaryCta.label}
            </Button>
            <Button
              variant="outline"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              block
            >
              Falar conosco
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
