import ButtonLink from './ButtonLink';

function Layout({
  children,
  className = '',
  href = '',
  linkText = '',
  linkTitle = '',
  linkIcon,
  title = 'titulo de pagina',
}) {
  return (
    <section className='bg-stone-100 border-2 border-stone-400 rounded-3xl p-4 flex flex-col gap-4'>
      <header className='border-b border-stone-800 pb-2 flex justify-between items-center'>
        <h3 className='text-3xl font-bold uppercase'>
          {title}
        </h3>

        {
          href && linkText &&
          <ButtonLink href={href} title={linkTitle} icon={linkIcon}>
            {linkText}
          </ButtonLink>
        }
      </header>

      <section className={className}>
        {children}
      </section>
    </section>
  );
}

export default Layout;
