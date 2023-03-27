// @ts-check
import React from 'react';

// Components
import ButtonLink from './ButtonLink';

function Card({
  href = '',
  imgSrc = 'illustration-einstein.svg',
  title = 'texto de tarjeta',
}) {
  return (
    <article className="bg-stone-100 border-2 border-stone-800 relative group transition-all h-96">
      <figure className='min-h-max h-42'>
        <img src={'./images/' + imgSrc} alt="" />
      </figure>

      <section className="bg-stone-300/[.9] font-bold border-t-2 border-stone-800 absolute bottom-0 w-full p-2 flex flex-col gap-2">
        <h3 className="text-xl">
          {title}
        </h3>

        <div className="hidden group-hover:flex justify-center">
          <ButtonLink
            icon='👤'
            href={href}
            title='abrir perfil'
          >
            información
          </ButtonLink>
        </div>
      </section>
    </article>
  );
}

export default Card;
