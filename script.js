/* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
   WADSON SILVA PORTFÃâLIO Ã¢â¬â script.js v2
   Ã¢â¬Â¢ Custom cursor com lerp
   Ã¢â¬Â¢ Mouse parallax no hero (glow + foto + nome + bg-text)
   Ã¢â¬Â¢ AnimaÃÂ§ÃÂ£o de saÃÂ­da/entrada do nome ao rolar
   Ã¢â¬Â¢ Contagem animada nos stats
   Ã¢â¬Â¢ Scroll reveal direcional
   Ã¢â¬Â¢ Canvas de partÃÂ­culas no hero
   Ã¢â¬Â¢ Nav ativa por seÃÂ§ÃÂ£o
   Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */

document.addEventListener('DOMContentLoaded', () => {
  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     1. CUSTOM CURSOR (com lerp + stretch)
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const cursor = document.getElementById('cursor')
  let mx = window.innerWidth / 2
  let my = window.innerHeight / 2
  let cx = mx,
    cy = my

  document.addEventListener('mousemove', e => {
    mx = e.clientX
    my = e.clientY
  })

  function lerpCursor() {
    cx += (mx - cx) * 0.15
    cy += (my - cy) * 0.15

    // Translada apenas sua posiÃÂ§ÃÂ£o tridimensional. MantÃÂ©m forma rÃÂ­gida (Radar/HUD).
    cursor.style.transform = `translate3d(calc(${cx}px - 50%), calc(${cy}px - 50%), 0)`

    requestAnimationFrame(lerpCursor)
  }
  lerpCursor()

  // Hover em elementos interativos
  document
    .querySelectorAll(
      'a, button, .toc-tag, .skill-chips span, .career-item, .clients-ticker span, .name-char, .interactive-card, .expo-close, .tool-badge, .grid-item'
    )
    .forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'))
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'))
    })

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     1.5. LOGICA DE SCROLL E CURSOR (FLUIDEZ)
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  const siteHeader = document.getElementById('site-header')

  function toggleScrollLock(lock) {
    if (lock) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden' // Trava o HTML tambÃÂ©m
      document.body.style.paddingRight = `${scrollbarWidth}px`
      if (siteHeader) siteHeader.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = '' // Libera o HTML
      document.body.style.paddingRight = ''
      if (siteHeader) siteHeader.style.paddingRight = ''
    }
  }

  // Ocultar cursor ao clicar na barra de rolagem (extrema direita)
  window.addEventListener('mousedown', e => {
    // Se clicar nos ÃÂºltimos 20px da tela (ÃÂ¡rea da scrollbar)
    if (e.clientX >= window.innerWidth - 20) {
      cursor.style.opacity = '0'
    }
  })

  window.addEventListener('mouseup', () => {
    cursor.style.opacity = '1'
  })

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     2. MOUSE PARALLAX NO RADAR E FOTO
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const heroSection = document.getElementById('sobre')
  const radarBg = document.getElementById('radar-bg')
  const heroPhotoWrap = document.getElementById('hero-photo-wrap')
  const heroNameWrap = document.getElementById('hero-name-wrap')

  heroSection.addEventListener('mousemove', e => {
    const rect = heroSection.getBoundingClientRect()
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = (e.clientX - rect.left - cx) / cx // -1 to 1
    const dy = (e.clientY - rect.top - cy) / cy // -1 to 1

    // Radar Ã¢â¬â movimento sutil ao fundo
    if (radarBg)
      radarBg.style.transform = `translate(calc(-50% + ${dx * 18}px), calc(-50% + ${dy * 8}px))`

    // Foto Ã¢â¬â paralaxe moderada
    if (heroPhotoWrap) heroPhotoWrap.style.transform = `translate(${dx * -10}px, ${dy * -6}px)`

    // Nome Ã¢â¬â movimento magnÃÂ©tico suave (Aplicado ao h1 interno para nÃÂ£o conflitar com a animaÃÂ§ÃÂ£o de scroll do wrap)
    const heroNameEl = document.getElementById('hero-name')
    if (heroNameEl) heroNameEl.style.transform = `translate(${dx * 16}px, ${dy * 6}px)`
  })

  heroSection.addEventListener('mouseleave', () => {
    if (radarBg) radarBg.style.transform = 'translate(-50%, -50%)'
    if (heroPhotoWrap) heroPhotoWrap.style.transform = ''
    const heroNameEl = document.getElementById('hero-name')
    if (heroNameEl) heroNameEl.style.transform = ''
  })

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     2.5. HUD PARALLAX (SOBRE MIM)
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const hudAboutWrap = document.getElementById('hud-about-wrap')
  const pLayers = document.querySelectorAll('.p-layer')

  if (hudAboutWrap) {
    hudAboutWrap.addEventListener('mousemove', e => {
      const rect = hudAboutWrap.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)

      pLayers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth || 0.1)
        const moveX = x * depth * 40
        const moveY = y * depth * 40
        const rotX = y * depth * -10
        const rotY = x * depth * 10
        
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 100px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
      })
    })

    hudAboutWrap.addEventListener('mouseleave', () => {
      pLayers.forEach(layer => {
        layer.style.transform = ''
      })
    })
  }


  /* Ã¢ââ¬Ã¢ââ¬ Controle de Visibilidade do Hero (OtimizaÃÂ§ÃÂ£o) Ã¢ââ¬Ã¢ââ¬ */
  let heroVisible = true
  const heroObs = new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting
  }, { threshold: 0.1 })
  if (heroSection) heroObs.observe(heroSection)


  /* ──────────────────────────────── 
     4. ANIMAÇÃO DE FADE + PARALLAX AO ROLAR 
  ────────────────────────────────  */
  const heroBgText = document.getElementById('hero-bg-text')

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY

      // Lógica de visibilidade Limpa (Apenas via Classe)
      const nameWrap = document.getElementById('hero-name-wrap')
      if (nameWrap) {
        if (y > 100) {
          nameWrap.classList.add('disappear')
        } else {
          nameWrap.classList.remove('disappear')
        }
      }

      if (heroBgText) {
        const greekLayer = document.querySelector('.bg-elements-layer')
        if (y > 80) {
          heroBgText.classList.add('disappear')
          if (greekLayer) greekLayer.classList.add('vibrant')
        } else {
          heroBgText.classList.remove('disappear')
          if (greekLayer) greekLayer.classList.remove('vibrant')
        }
      }
    },
    { passive: true }
  )

  // Expansão dos balões (tags) para empurrar a foto
  const tagWrapLeft = document.getElementById('tag-left')
  const tagWrapRight = document.getElementById('tag-right')
  const photoWrap = document.getElementById('hero-photo-wrap')

  if (tagWrapLeft && tagWrapRight && photoWrap) {
    const cardLeft = tagWrapLeft.querySelector('.interactive-card')
    const cardRight = tagWrapRight.querySelector('.interactive-card')

    cardLeft.addEventListener('mouseenter', () => {
      photoWrap.style.left = '60px'
      tagWrapRight.style.opacity = '0'
      tagWrapRight.style.pointerEvents = 'none'
      tagWrapLeft.style.zIndex = '10'
    })
    cardLeft.addEventListener('mouseleave', () => {
      photoWrap.style.left = '0'
      tagWrapRight.style.opacity = '1'
      tagWrapRight.style.pointerEvents = 'auto'
      tagWrapLeft.style.zIndex = '4'
    })

    cardRight.addEventListener('mouseenter', () => {
      photoWrap.style.left = '-60px'
      tagWrapLeft.style.opacity = '0'
      tagWrapLeft.style.pointerEvents = 'none'
      tagWrapRight.style.zIndex = '10'
    })
    cardRight.addEventListener('mouseleave', () => {
      photoWrap.style.left = '0'
      tagWrapLeft.style.opacity = '1'
      tagWrapLeft.style.pointerEvents = 'auto'
      tagWrapRight.style.zIndex = '4'
    })
  }

  /* ──────────────────────────────── 
     4.5. EXPO MODAL (PORTFÓLIO SCREEN)
  ────────────────────────────────  */

  const EXP_DATA = {

    mettalaw: {
      company: 'Metta Law',
      title: 'Coordenador de Marketing',
      brief:
        'Gestão de marca, design e estratégia para Metta Law, com foco em campanhas de alta performance e identidade corporativa.',
      time: '2023 - Presente',
      tools: ['Ps', 'Ai', 'Ae', 'Pr'],
      industry: 'Direito',
      mainImg: './assets/mettalaw/Cartão dia das mães - MettaLaw (1)_pages-to-jpg-0001.jpg',
      gallery: [
        './assets/mettalaw/Versão Nova.jpg',
        './assets/mettalaw/Versão alternativa.jpg',
        './assets/mettalaw/Versão tradicional.jpg',
        './assets/mettalaw/Cartão dia das mães - MettaLaw (1)_pages-to-jpg-0001.jpg'
      ],
      assets: [
        './assets/mettalaw/Versão Nova.jpg',
        './assets/mettalaw/Versão alternativa.jpg',
        './assets/mettalaw/Versão tradicional.jpg'
      ],
      pdfLinks: [
        { url: 'https://heyzine.com/flip-book/fe908b7b20.html', label: 'PDF Metta Law 1' },
        { url: 'https://heyzine.com/flip-book/cb18619cec.html', label: 'PDF Metta Law 2' }
      ]
    },
    zeepo: {
      company: 'Zeepo',
      title: 'Coordenador de Marketing',
      brief:
        'Gestão de marca e estratégias de social media para a Zeepo Motors, com foco em lançamento de produtos e engajamento.',
      time: '2022 - 2023',
      tools: ['Ps', 'Ai', 'Pr'],
      industry: 'Automobilístico',
      mainImg: './assets/zeepo/Post - EZ2.jpg',
      gallery: [
        './assets/zeepo/Post - EZ2.jpg',
        './assets/zeepo/1.jpg',
        './assets/zeepo/2.jpg',
        './assets/zeepo/3.jpg',
        './assets/zeepo/4.jpg',
        './assets/zeepo/5.jpg',
        './assets/zeepo/6.jpg',
        './assets/zeepo/12.jpg',
        './assets/zeepo/16.jpg',
        './assets/zeepo/18.jpg',
        './assets/zeepo/20.jpg',
        './assets/zeepo/21.jpg',
        './assets/zeepo/Banner 360 imprimir.jpg',
        './assets/zeepo/Criativo-Fabio.jpg'
      ],
      assets: [
        './assets/zeepo/20.jpg',
        './assets/zeepo/18.jpg',
        './assets/zeepo/12.jpg'
      ],
      pdfLinks: [
        { url: 'https://heyzine.com/flip-book/a002b3651f.html', label: 'Projeto Zeepo (PDF)' }
      ]
    },

    grupoaxis: {
      company: 'Grupo Axis',
      title: 'Diretor de Arte',
      brief:
        'Desenvolvimento de identidades visuais e campanhas publicitárias para diversos clientes do Grupo Axis.',
      time: '2021 - 2022',
      tools: ['Ai', 'Ps', 'Id'],
      industry: 'Publicidade',
      mainImg: './assets/social/social-3.jpg',
      gallery: [
        './assets/axis/1.jpg',
        './assets/axis/2.jpg',
        './assets/axis/3.jpg',
        './assets/axis/4.jpg',
        './assets/axis/5.jpg',
        './assets/axis/6.jpg',
        './assets/axis/7.jpg',
        './assets/axis/8.jpg'
      ],
      assets: [
        './assets/axis/3.jpg',
        './assets/axis/6.jpg',
        './assets/axis/1.jpg'
      ],
      pdfLinks: [
        { url: 'https://heyzine.com/flip-book/6c7977984a.html', label: 'Axis 1' },
        { url: 'https://heyzine.com/flip-book/4becaa6955.html', label: 'Axis 2' }
      ]
    },
    wjg: {
      company: 'WJG',
      title: 'Designer Gráfico Sênior',
      brief:
        'Criação de materiais gráficos complexos e suporte na direção criativa para projetos da WJG, com foco em identidades visuais corporativas, design para moda e materiais promocionais.',
      time: '2020 - 2021',
      tools: ['Ai', 'Ps'],
      industry: 'Design',
      mainImg: './assets/WJG/logo-wjg.jpg',
      gallery: [
        './assets/WJG/logo-wjg.jpg',
        './assets/WJG/flyer-1.png',
        './assets/WJG/flyer-2.png',
        './assets/WJG/post-wjg.jpg'
      ],
      assets: [
        './assets/WJG/flyer-1.png',
        './assets/WJG/flyer-2.png',
        './assets/WJG/post-wjg.jpg'
      ],
      featuredVideo: {
        url: 'https://www.instagram.com/reel/DXo9_mlFJiS/',
        cover: './assets/WJG/Captura de tela 2026-05-12 001017.png',
        title: 'Confira nossa primeira entrega!'
      }
    },
    sociallab: {
      company: 'Social Lab',
      title: 'Social Media Designer',
      brief:
        'Desenvolvimento de estratégias visuais e conteúdo criativo para redes sociais, focando em branding digital e engajamento de público.',
      time: '2019 - 2020',
      tools: ['Ps', 'Ae'],
      industry: 'Social Media',
      mainImg: './assets/social/social-2.jpg',
      gallery: [
        './assets/sociallab/estatico/1.jpg',
        './assets/sociallab/estatico/2.jpg',
        './assets/sociallab/estatico/3.jpg',
        './assets/sociallab/colemar/1.jpg',
        './assets/sociallab/colemar/2.jpg',
        './assets/sociallab/colemar/3.jpg',
        './assets/sociallab/colemar/4.jpg',
        './assets/sociallab/colemar/5.jpg',
        './assets/sociallab/colemar/6.jpg',
        './assets/sociallab/colemar/7.jpg',
        './assets/sociallab/colemar/8.jpg',
        './assets/sociallab/colemar/9.jpg'
      ],
      assets: [
        './assets/sociallab/estatico/1.jpg',
        './assets/sociallab/colemar/1.jpg',
        './assets/sociallab/estatico/2.jpg'
      ],
      pdfLinks: [
        { url: 'https://heyzine.com/flip-book/7af2522cd9.html', label: 'E-book Estático HMH' },
        { url: 'https://heyzine.com/flip-book/7af658e48f.html', label: 'Carrossel Colemar' }
      ]
    },
    esporadicos: {
      company: 'Esporádicos',
      title: 'Projetos Selecionados',
      brief:
        'Coleção de trabalhos independentes e projetos esporádicos desenvolvidos ao longo da carreira, abrangendo branding, audiovisual e design para streamers.',
      time: 'Diverso',
      tools: ['Ai', 'Ps', 'Ae', 'Pr'],
      industry: 'Multidisciplinar',
      mainImg: './assets/esporadicos/4.jpg',
      gallery: [
        './assets/esporadicos/1.jpg',
        './assets/esporadicos/2.jpg',
        './assets/esporadicos/3.jpg',
        './assets/esporadicos/4.jpg',
        './assets/esporadicos/leela/1.jpg',
        './assets/esporadicos/leela/2.jpg',
        './assets/esporadicos/leela/3.jpg',
        './assets/esporadicos/leela/4.jpg',
        './assets/esporadicos/leela/5.jpg',
        './assets/esporadicos/leela/6.jpg',
        './assets/esporadicos/leela/7.jpg',
        './assets/esporadicos/leela/8.jpg',
        './assets/esporadicos/leela/9.jpg',
        './assets/esporadicos/leela/10.jpg',
        './assets/esporadicos/leela/11.jpg',
        './assets/esporadicos/leela/12.jpg',
        './assets/esporadicos/leela/13.jpg',
        './assets/esporadicos/leela/14.jpg',
        './assets/esporadicos/post/1.jpg',
        './assets/esporadicos/post/2.jpg',
        './assets/esporadicos/post/3.jpg',
        './assets/esporadicos/post/4.jpg',
        './assets/esporadicos/post/5.jpg'
      ],
      assets: [
        './assets/esporadicos/leela/1.jpg',
        './assets/esporadicos/post/1.jpg',
        './assets/esporadicos/2.jpg'
      ],
      pdfLinks: [
        { url: 'https://heyzine.com/flip-book/ad4077f497.html', label: 'IDV - Meninas Futebol Clube 2025' }
      ]
    },
  }


  const careerItems = document.querySelectorAll('.career-item')
  const expoModal = document.getElementById('expo-modal')
  const expoClose = document.getElementById('expo-close')
  const expoRole = document.getElementById('expo-role')
  const expoCompany = document.getElementById('expo-company')
  const expoTitle = document.getElementById('expo-title-h2')
  const expoBrief = document.getElementById('expo-brief-p')
  const expoTime = document.getElementById('expo-time-val')
  const expoTools = document.getElementById('expo-tools-list')
  const expoHeroImg = document.getElementById('expo-main-image')
  const expoGrid = document.querySelector('.expo-grid')
  const expoPdfLinks = document.getElementById('expo-pdf-links')
  const expoFeaturedMedia = document.getElementById('expo-featured-media')

  const populateAndOpenModal = (type, skipPushState = false) => {
      const data = EXP_DATA[type]
      if (!expoModal || !data) return
      
      expoModal.setAttribute('data-current-modal', type)

    // Featured Video (ex: WJG Instagram Reel)
    if (expoFeaturedMedia) {
      expoFeaturedMedia.innerHTML = ''
      if (data.featuredVideo) {
        const videoCard = document.createElement('div')
        videoCard.className = 'featured-video-card'
        videoCard.innerHTML = `
          <div class="fvc-cover" style="background-image: url('${data.featuredVideo.cover}')">
            <div class="fvc-play-btn">▶</div>
            <div class="fvc-badge">INSTAGRAM REEL</div>
          </div>
          <div class="fvc-info">
            <span class="fvc-title">${data.featuredVideo.title}</span>
            <span class="fvc-action">Assistir no Instagram ↗</span>
          </div>
        `
        videoCard.addEventListener('click', () => {
          window.open(data.featuredVideo.url, '_blank')
        })
        expoFeaturedMedia.appendChild(videoCard)
      }
    }

    if (expoRole) expoRole.textContent = data.title
    if (expoCompany) {
      expoCompany.textContent = data.company
      expoCompany.setAttribute('data-text', data.company)
    }
    if (expoTitle) expoTitle.textContent = data.title

    if (expoBrief) expoBrief.innerHTML = `<strong>Brief:</strong><br>${data.brief}`
    if (expoTime) expoTime.textContent = data.time

    // Limpa e adiciona ferramentas
    if (expoTools) {
      expoTools.innerHTML = ''
      data.tools.forEach(tool => {
        const span = document.createElement('span')
        span.className = 'tool-badge'
        span.textContent = tool
        expoTools.appendChild(span)
      })
    }

    if (expoPdfLinks) {
      expoPdfLinks.innerHTML = ''
      if (data.pdfLinks && data.pdfLinks.length > 0) {
        data.pdfLinks.forEach(link => {
          const btn = document.createElement('a')
          btn.href = '#'
          btn.className = 'btn-read-pdf'
          btn.style.marginTop = '20px'
          btn.style.marginRight = '12px'
          btn.style.display = 'inline-block'
          btn.style.fontSize = '12px'
          btn.style.padding = '10px 16px'
          btn.innerHTML = `<span class="read-icon">📖</span> ${link.label}`
          btn.addEventListener('click', (e) => {
            e.preventDefault()
            openPdfModal(link.url, link.label)
          })
          expoPdfLinks.appendChild(btn)
        })
      }
    }

    // Imagem Principal
    if (expoHeroImg) expoHeroImg.src = data.mainImg

    // Galeria (Exploração Visual)
    if (expoGrid) {
      expoGrid.innerHTML = ''
      if (data.gallery && data.gallery.length > 0) {
        data.gallery.forEach((url, index) => {
          const isVideo = url.toLowerCase().endsWith('.mp4');
          const gridItem = document.createElement('div');
          gridItem.className = 'grid-item' + (isVideo ? ' is-video' : '');
          
          // Se for vídeo, usamos o logotipo do Pdrzeera como capa com preenchimento total
          let thumbUrl = isVideo ? './assets/esporadicos/gamer/logo-gamer.png' : url;
          let content = `<div class="img-ph" style="background-image: url('${thumbUrl}'); background-size: cover; background-position: center; ${isVideo ? 'filter: brightness(0.5) saturate(1.1);' : ''}"></div>`;
          
          if (isVideo) {
            content += `
              <div class="video-indicator">
                <span class="play-icon">▶</span>
                <span class="indicator-text">VIDEO</span>
              </div>
              <div class="video-glow-overlay"></div>
            `;
          }
          
          gridItem.innerHTML = content;
          
          // Clique para abrir o Lightbox adequado
          gridItem.addEventListener('click', (e) => {
            e.stopPropagation()
            if (isVideo) {
              const vModal = document.getElementById('videoModal');
              const vVideo = document.getElementById('modalVideo');
              if (vModal && vVideo) {
                vVideo.src = url;
                vModal.classList.add('show');
                vVideo.play().catch(err => console.log('Erro ao tocar vídeo:', err));
              }
            } else {
              // Filtra apenas imagens para manter a navegação da galeria consistente
              if (data.gallery) {
                const imageOnlyGallery = data.gallery.filter(u => !u.toLowerCase().endsWith('.mp4'));
                const imgIdx = imageOnlyGallery.indexOf(url);
                openImageGallery(imageOnlyGallery, imgIdx);
              }
            }
          })

          expoGrid.appendChild(gridItem)
        })
      }
    }


    // Cartões Flutuantes (Assets)
    const asset1 = expoModal.querySelector('.card-1')
    const asset2 = expoModal.querySelector('.card-2')
    const asset3 = expoModal.querySelector('.card-3')
    
    const secondaryImgs = data.assets || [data.mainImg, data.mainImg, data.mainImg]
    
    if (asset1) asset1.style.backgroundImage = `url("${secondaryImgs[0] || data.mainImg}")`
    if (asset2) asset2.style.backgroundImage = `url("${secondaryImgs[1] || data.mainImg}")`
    if (asset3) asset3.style.backgroundImage = `url("${secondaryImgs[2] || data.mainImg}")`


    // Abre o Modal com lock de scroll
    expoModal.classList.add('open')
    toggleScrollLock(true)

    // Adiciona ao histórico se não estivermos vindo de um popstate
    if (!skipPushState) {
      history.pushState({ modalOpen: true, modalType: type }, '')
    }

    /* ── INTERATIVIDADE 3D E ANIMAÇÕES ── */
    const expoHero = expoModal.querySelector('.expo-hero')
    const mockupWrap = expoModal.querySelector('.phone-mockup-wrap')
    const cards = [asset1, asset2, asset3]

    if (expoHero && mockupWrap) {
      mockupWrap.style.transform = ''
      cards.forEach(card => {
        if (card) {
          card.style.transform = ''
          card.classList.remove('is-playing', 'animate-in')
          void card.offsetWidth // force reflow
          // AnimaÃÂ§ÃÂ£o de entrada (usada no mobile)
          setTimeout(() => card.classList.add('animate-in'), 100)
        }
      })

      // Tilt no Desktop
      expoHero.onmousemove = (e) => {
        if (!expoModal.classList.contains('open')) return
        // Verifica se estÃÂ¡ no mobile para nÃÂ£o interferir na animaÃÂ§ÃÂ£o de entrada
        if (window.innerWidth <= 768) return

        const rect = expoHero.getBoundingClientRect()
        const cx = rect.width / 2
        const cy = rect.height / 2
        const dx = (e.clientX - rect.left - cx) / cx
        const dy = (e.clientY - rect.top - cy) / cy
        mockupWrap.style.transform = `rotateX(${dy * -12}deg) rotateY(${dx * 12}deg)`
        cards.forEach((card, i) => {
          if (card) {
            const depth = (i + 1) * 20
            card.style.marginLeft = `${dx * depth}px`
            card.style.marginTop = `${dy * depth}px`
          }
        })
      }

      expoHero.onmouseleave = () => {
        if (window.innerWidth <= 768) return
        mockupWrap.style.transform = ''
        cards.forEach(card => {
          if (card) {
            card.style.marginLeft = '0'
            card.style.marginTop = '0'
          }
        })
      }

      const modalScrollHint = document.getElementById('modal-scroll-hint')
      const observerOptions = { root: expoModal, threshold: 0.1 }
      const modalScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cards.forEach(card => card && card.classList.add('is-playing'))
            if (modalScrollHint) modalScrollHint.classList.remove('hidden')
          } else {
            if (entry.boundingClientRect.top < 0) {
              cards.forEach(card => card && card.classList.remove('is-playing'))
              if (modalScrollHint) modalScrollHint.classList.add('hidden')
            }
          }
        })
      }, observerOptions)

      modalScrollObserver.observe(expoHero)
      expoModal._observer = modalScrollObserver
    }
  }

  careerItems.forEach(item => {
    item.addEventListener('click', () => {
      populateAndOpenModal(item.dataset.modal)
    })
  })

  const closeExpoModal = () => {
    if (expoModal.classList.contains('open')) {
      expoModal.classList.remove('open')
      toggleScrollLock(false)
      if (expoModal._observer) expoModal._observer.disconnect()
      const allCards = expoModal.querySelectorAll('.floating-social-card')
      allCards.forEach(c => c.classList.remove('is-playing'))
    }
  }



  if (expoClose) {
    expoClose.addEventListener('click', () => {
      // Se abrimos o modal com pushState, voltamos no histÃÂ³rico
      if (history.state && history.state.modalOpen) {
        history.back()
      } else {
        closeExpoModal()
      }
    })
  }

  // Listener para o botÃÂ£o "Voltar" e "AvanÃÂ§ar" (popstate)
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.modalOpen) {
      // Se o estado tem modalOpen, abrimos o modal (Forward case)
      populateAndOpenModal(event.state.modalType, true)
    } else {
      // Se nÃÂ£o, fechamos (Back case)
      closeExpoModal()
    }
  })


  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     5. SCROLL REVEAL DIRECIONAL
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const revealEls = document.querySelectorAll('.scroll-reveal')

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0)
          setTimeout(() => entry.target.classList.add('visible'), delay)
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  )

  revealEls.forEach(el => revealObserver.observe(el))

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     6. HEADER SCROLL
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const header = document.getElementById('site-header')
  let lastY = 0

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY
      if (y > 60) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
      lastY = y
    },
    { passive: true }
  )

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     7. NAV LINK ATIVO POR SEÃâ¡ÃÆO
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.tab === id)
          })
        }
      })
    },
    { threshold: 0.4 }
  )
  sections.forEach(s => sectionObserver.observe(s))

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     8. CONTAGEM ANIMADA Ã¢â¬â STATS
     Usa setTimeout por inteiro com easing pow(0.4):
     cada nÃÂºmero aparece exatamente uma vez,
     sem travar no penÃÂºltimo nem saltar para o final.
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const countupTimers = new WeakMap()

  function countUp(el, target, suffix) {
    // Cancela qualquer animaÃÂ§ÃÂ£o anterior no mesmo elemento
    const prev = countupTimers.get(el)
    if (prev) prev.forEach(id => clearTimeout(id))

    const ids = []
    const duration = 1500

    for (let i = 1; i <= target; i++) {
      // pow(0.4) Ã¢â â comeÃÂ§a rÃÂ¡pido, desacelera suavemente, termina sem travar
      const delay = Math.pow(i / target, 0.4) * duration
      const id = setTimeout(() => {
        el.textContent = i + suffix
      }, delay)
      ids.push(id)
    }

    countupTimers.set(el, ids)
  }

  const statObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          const target = parseInt(el.dataset.target)
          const suffix = el.dataset.suffix || ''
          countUp(el, target, suffix)
        } else {
          // Cancela timers pendentes e reseta o display
          const prev = countupTimers.get(el)
          if (prev) {
            prev.forEach(id => clearTimeout(id))
            countupTimers.delete(el)
          }
          el.textContent = '0' + (el.dataset.suffix || '')
        }
      })
    },
    { threshold: 0.7 }
  )

  document.querySelectorAll('.stat-num[data-target]').forEach(el => statObserver.observe(el))

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     8.5. JORNADA CRIATIVA Ã¢â¬â AnimaÃÂ§ÃÂ£o de AtenÃÂ§ÃÂ£o
     Dispara anim-active apÃÂ³s o card entrar na tela,
     dando tempo para o scroll-reveal terminar primeiro.
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const journeyCard = document.querySelector('.journey-card')
  if (journeyCard) {
    const jObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          // Pequeno delay para o scroll-reveal do card terminar (800ms transition)
          setTimeout(() => journeyCard.classList.add('anim-active'), 500)
          jObserver.disconnect() // dispara sÃÂ³ uma vez
        }
      },
      { threshold: 0.3 }
    )
    jObserver.observe(journeyCard)
  }

  // Ã¢ââ¬Ã¢ââ¬ CENA 3D DA JORNADA (PARALLAX E INCLINAÃâ¡ÃÆO) Ã¢ââ¬Ã¢ââ¬
  const journeyScene = document.getElementById('journey-3d-scene')
  const sceneInner = journeyScene?.querySelector('.scene-inner')

  if (journeyScene && sceneInner) {
    const photo = journeyScene.querySelector('.journey-photo-3d')
    const hand = journeyScene.querySelector('.hand-cutout')

    journeyScene.addEventListener('mousemove', (e) => {
      const rect = journeyScene.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const moveX = (e.clientX - centerX) / (rect.width / 2)
      const moveY = (e.clientY - centerY) / (rect.height / 2)

      // RotaÃÂ§ÃÂ£o da cena (Reduzida para 6deg para realismo)
      sceneInner.style.transform = `rotateY(${moveX * 6}deg) rotateX(${moveY * -6}deg)`

      // RGB Split DinÃÂ¢mico (Limitado a 2px para profundidade sutil)
      if (photo) {
        const splitX = moveX * 2.5
        photo.style.filter = `contrast(1.15) brightness(1.05) saturate(0.92) drop-shadow(${splitX}px 0 2px rgba(255,0,0,0.15)) drop-shadow(${-splitX}px 0 2px rgba(0,255,255,0.15))`
      }
      if (hand) {
        const splitX = moveX * 2
        hand.style.filter = `contrast(1.1) brightness(1.1) saturate(0.92) drop-shadow(${splitX}px 0 1px rgba(255,0,0,0.1)) drop-shadow(${-splitX}px 0 1px rgba(0,255,255,0.1))`
      }

      // Parallax sutil entre camadas
      const layers = journeyScene.querySelectorAll('.scene-layer')
      layers.forEach((layer) => {
        const depth = layer.classList.contains('layer-fg') ? 12 :
          layer.classList.contains('layer-ui') ? 8 : 4
        const tx = moveX * depth
        const ty = moveY * depth
        const currentZ = layer.classList.contains('layer-fg') ? 280 :
          layer.classList.contains('layer-ui') ? 120 : -150
        layer.style.transform = `translate3d(${tx}px, ${ty}px, ${currentZ}px)`
      })
    })

    journeyScene.addEventListener('mouseleave', () => {
      sceneInner.style.transform = 'rotateY(0deg) rotateX(0deg)'
      if (photo) photo.style.filter = 'contrast(1.15) brightness(1.05) saturate(0.92)'
      if (hand) hand.style.filter = 'contrast(1.1) brightness(1.1) saturate(0.92)'

      const layers = journeyScene.querySelectorAll('.scene-layer')
      layers.forEach((layer) => {
        const currentZ = layer.classList.contains('layer-fg') ? 280 :
          layer.classList.contains('layer-ui') ? 120 : -150
        layer.style.transform = `translate3d(0, 0, ${currentZ}px)`
      })
    })
  }

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     9. PARALLAX LEVE NAS LETRAS (Desativado para garantir nitidez total do gradiente)
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  /* 
  const nameChars = document.querySelectorAll('.name-char')
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY
      nameChars.forEach((ch, i) => {
        const offset = Math.sin((i / nameChars.length) * Math.PI) * y * 0.01
        ch.style.transform = `translateY(${-offset}px)`
      })
    },
    { passive: true }
  )
  */

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     10. CARROSSEL 3D AUDIOVISUAL
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     10. CARROSSEL 3D AUDIOVISUAL (API YOUTUBE)
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const avItems = Array.from(document.querySelectorAll('.av-item'))
  const btnPrev = document.querySelector('.av-prev')
  const btnNext = document.querySelector('.av-next')
  const pagContainer = document.getElementById('av-pagination')
  
  let carouselPlayers = []
  let currentIndex = 1
  let carouselReady = false

  function updateCarousel() {
    if (!carouselReady) return
    
    const total = avItems.length
    avItems.forEach((item, index) => {
      let diff = index - currentIndex
      if (diff > total / 2) diff -= total
      if (diff < -total / 2) diff += total

      item.classList.remove('pos-0', 'pos-1', 'pos-n1', 'pos-2', 'pos-n2')
      const player = carouselPlayers[index]

      if (diff === 0) {
        item.classList.add('pos-0')
        if (player && player.playVideo) {
          player.playVideo()
          // Opcional: Desmutar o vÃÂ­deo central se o usuÃÂ¡rio jÃÂ¡ interagiu
          // player.unMute() 
        }
      } else if (Math.abs(diff) === 1) {
        item.classList.add(diff === 1 ? 'pos-1' : 'pos-n1')
        if (player && player.playVideo) {
          player.playVideo()
          player.mute() // VÃÂ­deos laterais sempre mudos
        }
      } else {
        item.classList.add(diff > 1 ? 'pos-2' : 'pos-n2')
        if (player && player.pauseVideo) player.pauseVideo()
      }
    })

    // Atualiza paginaÃÂ§ÃÂ£o numÃÂ©rica
    const nums = document.querySelectorAll('.pag-num')
    nums.forEach((n, i) => {
      n.classList.toggle('active', i === currentIndex)
    })
  }

  function initCarousel() {
    if (avItems.length === 0) return

    // Criar paginaÃÂ§ÃÂ£o
    if (pagContainer) {
      pagContainer.innerHTML = ''
      avItems.forEach((_, i) => {
        const span = document.createElement('span')
        span.className = 'pag-num' + (i === currentIndex ? ' active' : '')
        span.textContent = (i + 1)
        span.addEventListener('click', () => {
          currentIndex = i
          updateCarousel()
        })
        pagContainer.appendChild(span)
      })
    }

    // Inicializar Players do YouTube
    avItems.forEach((item, index) => {
      const ytId = item.dataset.ytId
      const ph = item.querySelector('.av-video-ph')
      if (!ph) return

      // Prepara container para o player
      let playerDiv = ph.querySelector('.carousel-yt-player')
      if (!playerDiv) {
        playerDiv = document.createElement('div')
        playerDiv.className = 'carousel-yt-player'
        ph.insertBefore(playerDiv, ph.firstChild)
      }

      // Remove o iframe estÃÂ¡tico se existir
      const staticIframe = ph.querySelector('iframe')
      if (staticIframe) staticIframe.remove()

      const player = new YT.Player(playerDiv, {
        videoId: ytId,
        playerVars: {
          autoplay: 1,
          controls: 1, // Modificado para 1 para testar o comportamento nativo limpo no topo
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          playsinline: 1,
          showinfo: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: ytId,
          mute: 1
        },
        events: {
          onReady: (e) => {
            carouselPlayers[index] = e.target
            if (carouselPlayers.filter(p => p).length === avItems.length) {
              carouselReady = true
              updateCarousel()
            }
          },
          onStateChange: (e) => {
            const iframe = e.target.getIframe()
            if (!iframe) return

            if (e.data === YT.PlayerState.PLAYING) {
              const ph = iframe.closest('.av-video-ph')
              if (ph) {
                const curtain = ph.querySelector('.yt-curtain')
                if (curtain && !curtain.classList.contains('is-loaded')) {
                  setTimeout(() => {
                    curtain.classList.add('is-loaded')
                  }, 3000)
                }
              }
            }
            
            if (e.data === YT.PlayerState.ENDED) {
              e.target.playVideo()
            }
          }
        }
      })
    })

    // Cliques nos itens
    avItems.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        if (index !== currentIndex) {
          e.preventDefault()
          e.stopPropagation()
          currentIndex = index
          updateCarousel()
        }
      })
    })

    // Setas
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + avItems.length) % avItems.length
        updateCarousel()
      })
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % avItems.length
        updateCarousel()
      })
    }
  }

    /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â Custom Video Player (YouTube IFrame API) Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
    const videoModal    = document.getElementById('videoModal')
    const customPlayer  = document.getElementById('customPlayer')
    const ytContainer   = document.getElementById('ytPlayerContainer')
    const playerOverlay = document.getElementById('playerOverlay')
    const playPauseBtn  = document.getElementById('playPauseBtn')
    const muteBtn       = document.getElementById('muteBtn')
    const progressFill  = document.getElementById('progressFill')
    const progressThumb = document.getElementById('progressThumb')
    const progressTrack = document.getElementById('progressTrack')
    const progressWrap  = document.getElementById('progressWrap')
    const playerTime    = document.getElementById('playerTime')
    const playerDuration = document.getElementById('playerDuration')
    const playerCloseBtn = document.getElementById('playerCloseBtn')

    let ytPlayer = null, ytReady = false, rafId = null

    // Carrega a YouTube IFrame API
    const ytScript = document.createElement('script')
    ytScript.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(ytScript)

    window.onYouTubeIframeAPIReady = function() { 
      ytReady = true
      if (typeof initCarousel === 'function') initCarousel()
    }

    function fmtTime(s) {
      const m = Math.floor(s / 60)
      return `${m}:${Math.floor(s % 60).toString().padStart(2,'0')}`
    }

    function startProgress() {
      if (rafId) cancelAnimationFrame(rafId)
      ;(function tick() {
        if (!ytPlayer?.getCurrentTime) return
        const cur = ytPlayer.getCurrentTime() || 0
        const dur = ytPlayer.getDuration() || 0
        if (dur > 0) {
          const p = (cur / dur) * 100
          progressFill.style.width = p + '%'
          progressThumb.style.left = p + '%'
        }
        playerTime.textContent = fmtTime(cur)
        if (dur > 0) playerDuration.textContent = fmtTime(dur)
        rafId = requestAnimationFrame(tick)
      })()
    }

    function stopProgress() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null }
    }

    function openPlayer(ytId, orient) {
      videoModal.dataset.orient = orient
      videoModal.classList.add('show')
      toggleScrollLock(true)
      customPlayer.classList.remove('is-paused')
      progressFill.style.width = '0%'
      progressThumb.style.left = '0%'
      playerTime.textContent = '0:00'
      playerDuration.textContent = '0:00'
      if (playPauseBtn) playPauseBtn.querySelector('.p-btn-icon').textContent = '||'

      ytContainer.innerHTML = ''
      const div = document.createElement('div')
      div.id = 'ytInner'
      ytContainer.appendChild(div)

      const tryCreate = () => {
        if (!ytReady || typeof YT === 'undefined') { setTimeout(tryCreate, 200); return }
        ytPlayer = new YT.Player('ytInner', {
          videoId: ytId,
          playerVars: { autoplay:1, controls:1, modestbranding:1, rel:0, iv_load_policy:3, playsinline:1, showinfo:0, fs:0 },
          events: {
            onReady: (e) => { e.target.playVideo(); startProgress() },
            onStateChange: (e) => {
              if (e.data === YT.PlayerState.PLAYING) {
                customPlayer.classList.add('video-playing')
                ytContainer.classList.add('is-ready')
                
                customPlayer.classList.remove('is-paused')
                playPauseBtn.querySelector('.p-btn-icon').textContent = '||'
                startProgress()
              } else if (e.data === YT.PlayerState.PAUSED) {
                customPlayer.classList.remove('video-playing')
                customPlayer.classList.add('is-paused')
                playPauseBtn.querySelector('.p-btn-icon').textContent = '▶'
                stopProgress()
              }
            }
          }
        })
      }
      tryCreate()
    }

    function closePlayer() {
      videoModal.classList.remove('show')
      ytContainer.classList.remove('is-ready') 
      customPlayer.classList.remove('video-playing') // Reseta o vÃÂ©u
      delete videoModal.dataset.orient
      stopProgress()
      if (ytPlayer) { ytPlayer.destroy(); ytPlayer = null }
      ytContainer.innerHTML = ''
      customPlayer.classList.remove('is-paused')
      toggleScrollLock(false)
    }

    // Overlay clique Ã¢â â play/pause
    if (playerOverlay) playerOverlay.addEventListener('click', () => {
      if (!ytPlayer) return
      ytPlayer.getPlayerState() === 1 ? ytPlayer.pauseVideo() : ytPlayer.playVideo()
    })

    // BotÃÂ£o play/pause
    if (playPauseBtn) playPauseBtn.addEventListener('click', e => {
      e.stopPropagation()
      if (!ytPlayer) return
      ytPlayer.getPlayerState() === 1 ? ytPlayer.pauseVideo() : ytPlayer.playVideo()
    })

    // BotÃÂ£o mute
    if (muteBtn) muteBtn.addEventListener('click', e => {
      e.stopPropagation()
      if (!ytPlayer) return
      if (ytPlayer.isMuted()) { ytPlayer.unMute(); muteBtn.querySelector('.p-btn-icon').textContent = 'Ã°Å¸âÅ ' }
      else { ytPlayer.mute(); muteBtn.querySelector('.p-btn-icon').textContent = 'Ã°Å¸ââ¡' }
    })

    // Progresso: seek ao clicar
    if (progressWrap) progressWrap.addEventListener('click', e => {
      e.stopPropagation()
      if (!ytPlayer) return
      const r = progressTrack.getBoundingClientRect()
      const pct = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))
      ytPlayer.seekTo(pct * (ytPlayer.getDuration() || 0), true)
    })

    // Fechar
    if (playerCloseBtn) playerCloseBtn.addEventListener('click', closePlayer)
    if (videoModal) videoModal.addEventListener('click', e => { if (e.target === videoModal) closePlayer() })

    // Conecta aos cards do carrossel
    avItems.forEach(item => {
      const clickTarget = item.querySelector('.av-video-ph')
      const ytId = item.dataset.ytId
      if (clickTarget && ytId) {
        clickTarget.addEventListener('click', e => {
          if (item.classList.contains('pos-0')) {
            e.stopPropagation()
            openPlayer(ytId, item.dataset.orient === 'vertical' ? 'vertical' : 'horizontal')
          }
        })
      }
    })

    // Dispara a lÃÂ³gica inicial
    updateCarousel()

    /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
       CARROSSEL INTERATIVO Ã¢â¬â SOCIAL
    Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
    const revealPhones = document.querySelectorAll('.reveal-phone')
    const phoneTimeouts = new Map()
    let socialCenterIndex = 2 // O terceiro celular (index 2) comeÃÂ§a no centro

    function updateSocialPositions(centerIdx) {
      const total = revealPhones.length
      revealPhones.forEach((phone) => {
        const dataIdx = parseInt(phone.getAttribute('data-index'))
        // Calcula a posiÃÂ§ÃÂ£o (0 a 4) baseada no centro selecionado
        const pos = (dataIdx - centerIdx + 2 + total) % total

        // MantÃÂ©m as classes base e re-adiciona active se necessÃÂ¡rio
        const wasActive = phone.classList.contains('active') || phone.dataset.shouldBeActive === 'true'
        phone.className = 'phone-item reveal-phone'
        if (wasActive) phone.classList.add('active')

        phone.classList.add(`pos-${pos}`)
      })
    }

    const phoneObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const phoneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target
        const style = el.getAttribute('style') || ''
        const match = style.match(/--i:(\d+)/)
        const index = match ? parseInt(match[1]) : 0

        if (phoneTimeouts.has(el)) {
          clearTimeout(phoneTimeouts.get(el))
          phoneTimeouts.delete(el)
        }

        if (entry.isIntersecting) {
          const timeoutId = setTimeout(() => {
            el.classList.add('active')
            el.dataset.shouldBeActive = 'true'
          }, index * 150)
          phoneTimeouts.set(el, timeoutId)
        } else {
          el.classList.remove('active')
          el.dataset.shouldBeActive = 'false'
        }
      })
    }, phoneObserverOptions)

    // Inicializa posiÃÂ§ÃÂµes e adiciona cliques
    updateSocialPositions(socialCenterIndex)

    // Ã¢ââ¬Ã¢ââ¬ Autoplay para Social Media Ã¢ââ¬Ã¢ââ¬
    let socialInterval = setInterval(() => {
      socialCenterIndex = (socialCenterIndex + 1) % revealPhones.length
      updateSocialPositions(socialCenterIndex)
    }, 5000)

    function resetSocialInterval() {
      clearInterval(socialInterval)
      socialInterval = setInterval(() => {
        socialCenterIndex = (socialCenterIndex + 1) % revealPhones.length
        updateSocialPositions(socialCenterIndex)
      }, 5000)
    }

    revealPhones.forEach(phone => {
      phoneObserver.observe(phone)

      phone.addEventListener('click', () => {
        const clickedIdx = parseInt(phone.getAttribute('data-index'))
        socialCenterIndex = clickedIdx
        updateSocialPositions(socialCenterIndex)
        resetSocialInterval()
      })
    })

    /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
       11. GREEK GODS PARALLAX (SIDES)
       MovimentaÃÂ§ÃÂ£o premium nas laterais
    Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
    /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
       11. GREEK GODS SCATTER SCROLL
       Efeito de espalhamento: ComeÃÂ§am na capa e se distribuem pelo site
    Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
    const zeus = document.querySelector('.bg-zeus');
    const athena = document.querySelector('.bg-athena');
    const hermes = document.querySelector('.bg-hermes');
    const poseidon = document.querySelector('.bg-poseidon');

    window.addEventListener('scroll', () => {
      const y = window.scrollY;

      // Multiplicadores "CinematogrÃÂ¡ficos":
      // Movimentos extremamente lentos para que os deuses acompanhem o usuÃÂ¡rio
      // por quase toda a experiÃÂªncia, sumindo de forma imperceptÃÂ­vel e sequencial.
      if (athena) athena.style.setProperty('--sy', `${y * -0.10}px`);
      if (zeus) zeus.style.setProperty('--sy', `${y * -0.08}px`);
      if (hermes) hermes.style.setProperty('--sy', `${y * -0.06}px`);
      if (poseidon) poseidon.style.setProperty('--sy', `${y * -0.04}px`);
    }, { passive: true });

    // Paralaxe ao mover o mouse (mantido para profundidade 3D)
    document.addEventListener('mousemove', (e) => {
      const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      const bgGods = [zeus, athena, hermes, poseidon];
      bgGods.forEach((god, i) => {
        if (!god) return;
        // Intensidades aumentadas para maior impacto visual (Paralaxe 3D)
        const intensity = 35 + (i * 35);
        god.style.setProperty('--mx', `${dx * intensity}px`);
        god.style.setProperty('--my', `${dy * intensity}px`);
      });
    });
    /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
       12. LIGHTBOX DE GALERIA DE IMAGENS
    Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
    const imageGalleryModal = document.getElementById('imageGalleryModal');
    const galleryFullImage = document.getElementById('galleryFullImage');
    const closeImageGallery = document.getElementById('closeImageGallery');
    const prevImageBtn = document.getElementById('prevImage');
    const nextImageBtn = document.getElementById('nextImage');
    const galleryCounter = document.getElementById('galleryCounter');

    let currentGallery = [];
    let currentImageIndex = 0;

    window.openImageGallery = function(images, index, skipPushState = false) {
      currentGallery = images;
      currentImageIndex = index;
      updateGalleryView();
      imageGalleryModal.classList.add('show');
      toggleScrollLock(true);

      if (!skipPushState) {
        // Preserva o tipo do modal atual no estado
        const currentType = history.state?.modalType;
        history.pushState({ modalOpen: true, modalType: currentType, lightboxOpen: true, imageIndex: index }, '');
      }
    };

    function updateGalleryView() {
      if (galleryFullImage && currentGallery[currentImageIndex]) {
        galleryFullImage.src = currentGallery[currentImageIndex];
        if (galleryCounter) {
          galleryCounter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
        }
      }
    }

    function closeGallery() {
      imageGalleryModal.classList.remove('show');
      // SÃÂ³ remove o lock se o modal principal tambÃÂ©m estiver fechado
      if (!expoModal.classList.contains('open')) {
        toggleScrollLock(false);
      }
    }

    if (closeImageGallery) {
      closeImageGallery.addEventListener('click', () => {
        if (history.state && history.state.lightboxOpen) {
          history.back();
        } else {
          closeGallery();
        }
      });
    }

    const navigateGallery = (direction) => {
      currentImageIndex = (currentImageIndex + direction + currentGallery.length) % currentGallery.length;
      updateGalleryView();
      // Atualiza o estado atual sem criar uma nova entrada (replaceState) para nÃÂ£o poluir o histÃÂ³rico
      history.replaceState({ ...history.state, imageIndex: currentImageIndex }, '');
    };

    if (prevImageBtn) {
      prevImageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateGallery(-1);
      });
    }

    if (nextImageBtn) {
      nextImageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateGallery(1);
      });
    }

    imageGalleryModal.addEventListener('click', (e) => {
      if (e.target === imageGalleryModal) {
        if (history.state && history.state.lightboxOpen) history.back();
        else closeGallery();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!imageGalleryModal.classList.contains('show')) return;
      if (e.key === 'Escape') {
        if (history.state && history.state.lightboxOpen) history.back();
        else closeGallery();
      }
      if (e.key === 'ArrowLeft') navigateGallery(-1);
      if (e.key === 'ArrowRight') navigateGallery(1);
    });

    // Listener de HistÃÂ³rico Aprimorado (Popstate)
    window.addEventListener('popstate', (event) => {
      const state = event.state;
      
      if (state && state.modalOpen) {
        // Se o modal principal deve estar aberto
        if (!expoModal.classList.contains('open')) {
          populateAndOpenModal(state.modalType, true);
        }

        // Se o lightbox deve estar aberto
        if (state.lightboxOpen) {
          const data = EXP_DATA[state.modalType];
          if (data && data.gallery) {
            window.openImageGallery(data.gallery, state.imageIndex, true);
          }
        } else {
          closeGallery();
        }
      } else {
        // Fecha tudo
        closeGallery();
        closeExpoModal();
      }
    });

    /* LÃÂ³gica de PaginaÃÂ§ÃÂ£o consolidada no bloco 10. */

    /* Ã¢ââ¬Ã¢ââ¬ Mobile Menu Toggle Ã¢ââ¬Ã¢ââ¬ */
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
      });
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          mainNav.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }

    /* Ã¢ââ¬Ã¢ââ¬ GLOBAL VIDEO LAZY PLAYBACK (OTIMIZAÃâ¡ÃÆO DE PERFORMANCE) Ã¢ââ¬Ã¢ââ¬ */
    const allVideos = document.querySelectorAll('video');
    if ('IntersectionObserver' in window) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const video = entry.target;
          // NÃÂ£o interfere com os vÃÂ­deos do carrossel que sÃÂ£o controlados pela funÃÂ§ÃÂ£o updateCarousel
          if (video.closest('.av-carousel')) return;
          
          if (entry.isIntersecting) {
            // Se estiver aparecendo na tela, dÃÂ¡ play (respeitando mute e loop)
            video.play().catch(e => console.log('Autoplay prevent:', e));
          } else {
            // Se saiu da tela, pausa! Salva muita memÃÂ³ria e GPU.
            video.pause();
          }
        });
      }, { rootMargin: '200px' });

      allVideos.forEach(v => videoObserver.observe(v));
    }

  /* Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â
     PDF MODAL LOGIC (HEY ZINE)
  Ã¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢ÂÃ¢â¢Â */
  const pdfModal = document.getElementById('pdf-modal');
  const pdfIframe = document.getElementById('pdf-iframe');
  const pdfModalClose = document.getElementById('pdf-modal-close');
  const pdfModalOverlay = document.querySelector('.pdf-modal-overlay');
  const pdfModalName = document.getElementById('pdf-modal-name');
  const pdfButtons = document.querySelectorAll('.btn-read-pdf');

  function openPdfModal(url, name) {
    if (!pdfModal || !pdfIframe) return;
    
    pdfModalName.textContent = name || 'DOCUMENT';
    pdfIframe.src = url;
    
    // Mostra o container fÃÂ­sico primeiro
    pdfModal.style.display = 'flex';
    
    // Pequeno delay para o navegador processar o display e permitir a animaÃÂ§ÃÂ£o de opacidade
    setTimeout(() => {
      pdfModal.classList.add('show');
    }, 10);
    
    toggleScrollLock(true);
    document.documentElement.classList.add('pdf-modal-active');
    
    if (history.state && history.state.pdfModalOpen) {
      history.replaceState({ pdfModalOpen: true }, '');
    } else {
      history.pushState({ pdfModalOpen: true }, '');
    }
  }

  function closePdfModal() {
    if (!pdfModal) return;
    
    // Inicia a animaÃÂ§ÃÂ£o de saÃÂ­da (fade out + scale)
    pdfModal.classList.remove('show');
    
    toggleScrollLock(false);
    document.documentElement.classList.remove('pdf-modal-active');
    
    // Espera a animaÃÂ§ÃÂ£o terminar antes de desligar o display e o iframe
    setTimeout(() => {
      if (!pdfModal.classList.contains('show')) {
        pdfModal.style.display = 'none';
        if (pdfIframe) pdfIframe.src = '';
      }
    }, 400); 
  }

  pdfButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('href');
      const card = btn.closest('.brand-card');
      const title = card ? card.querySelector('.brand-title').textContent : 'DOCUMENTO';
      openPdfModal(url, title);
    });
  });

  if (pdfModalClose) pdfModalClose.addEventListener('click', () => {
    closePdfModal();
    if (history.state && history.state.pdfModalOpen) {
      history.back();
    }
  });

  if (pdfModalOverlay) pdfModalOverlay.addEventListener('click', () => {
    closePdfModal();
    if (history.state && history.state.pdfModalOpen) {
      history.back();
    }
  });

  window.addEventListener('popstate', () => {
    if (pdfModal && pdfModal.classList.contains('show')) {
      closePdfModal();
    }
  });

  /* ââââââââââââââââââââââââââââââââ
     11. POPULAR GRID DE IMPRESSÃO DIGITAL
  ââââââââââââââââââââââââââââââââ */
  const printGrid = document.getElementById('print-grid');
  if (printGrid) {
    const printImages = [
      { url: 'assets/impressao/adeviso-1.webp', title: 'Adesivo Test Drive 01', type: 'tall' },
      { url: 'assets/impressao/adeviso-2.webp', title: 'Adesivo Test Drive 02', type: 'wide' },
      { url: 'assets/impressao/ebook-1.webp', title: 'E-book PistÃ©vo - Capa', type: 'big' },
      { url: 'assets/impressao/ebook-2.webp', title: 'E-book PistÃ©vo - Editorial', type: '' },
      { url: 'assets/impressao/ebook-3.webp', title: 'E-book PistÃ©vo - Design', type: 'tall' },
      { url: 'assets/impressao/ebook-4.webp', title: 'E-book PistÃ©vo - Layout', type: '' },
      { url: 'assets/impressao/ebook-5.webp', title: 'E-book PistÃ©vo - Tipografia', type: 'wide' },
      { url: 'assets/impressao/ebook-6.webp', title: 'E-book PistÃ©vo - Cores', type: '' },
      { url: 'assets/impressao/ebook-7.webp', title: 'E-book PistÃ©vo - Social', type: '' },
      { url: 'assets/impressao/ebook-8.webp', title: 'E-book PistÃ©vo - Final', type: '' },
      { url: 'assets/impressao/ppt-1.webp', title: 'ApresentaÃ§Ã£o AcadÃªmica 01', type: 'big' },
      { url: 'assets/impressao/ppt-2.webp', title: 'ApresentaÃ§Ã£o AcadÃªmica 02', type: '' },
      { url: 'assets/impressao/ppt-3.webp', title: 'ApresentaÃ§Ã£o AcadÃªmica 03', type: 'tall' },
      { url: 'assets/impressao/ppt-4.webp', title: 'ApresentaÃ§Ã£o AcadÃªmica 04', type: '' },
      { url: 'assets/impressao/ppt-5.webp', title: 'ApresentaÃ§Ã£o AcadÃªmica 05', type: 'wide' },
      { url: 'assets/impressao/ppt-6.webp', title: 'ApresentaÃ§Ã£o AcadÃªmica 06', type: '' },
      { url: 'assets/impressao/ppt-7.webp', title: 'ApresentaÃ§Ã£o AcadÃªmica 07', type: '' }
    ];

    printImages.forEach((img, idx) => {
      const card = document.createElement('div');
      card.className = `print-card ${img.type}`;
      card.innerHTML = `
        <img src="${img.url}" alt="${img.title}" loading="lazy">
        <div class="print-card-info">
          <span class="print-tag">Digital Print</span>
          <h4 class="print-title">${img.title}</h4>
        </div>
      `;

      card.addEventListener('click', () => {
        if (window.openImageGallery) {
          const allUrls = printImages.map(i => i.url);
          window.openImageGallery(allUrls, idx);
        }
      });

      printGrid.appendChild(card);
    });
  }

  // --- ANO DINÂMICO ---
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
