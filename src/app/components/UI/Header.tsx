'use client'
import { siteConfig } from '@/app/config/site.config'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UserAvatar from './UserAvatar'

export default function Header() {
  const pathname = usePathname()

  const getNavItems = () => {
    return siteConfig.navItems.map(item => {
      const isActive = pathname === item.href
      return (
        <NavbarItem className='justify-center' key={item.href}>
          <Link
            color='foreground'
            href={item.href}
            className={`px-3 py-1 ${isActive ? 'text-blue-500' : 'text-foreground'
              } font-bold`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      )
    })
  }


  return (
    <>
      <Navbar maxWidth='2xl' isBordered>
        <NavbarBrand>
          <p className="justify-start font-bold text-md text-blue-600">Форма о фактах происшествий</p>
        </NavbarBrand>
        {pathname === '/mainPage' &&
          <NavbarContent justify='center' className='hidden sm:flex gap-4'>
            {getNavItems()}
          </NavbarContent>
        }
        <NavbarContent justify='end'>
          <NavbarItem>
            {pathname === '/mainPage' ? <UserAvatar /> : null}
          </NavbarItem> 
          <NavbarItem>
            {pathname === '/' ? <Button as={Link} color='primary' href='/auth'>
              Войти
            </Button> : pathname === '/mainPage' ?
                <Button as={Link} color='default' href='/auth'>
                  Выйти
              </Button>
              : null}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}