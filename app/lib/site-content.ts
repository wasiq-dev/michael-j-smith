export const SITE = {
  authorName: 'Michael J. Smith',
  book: {
    title: 'Between the 4 Lines',
    cover: '/images/book.png',
    aboutImage: '/images/book-other-position.png',
    author: 'Michael J. Smith',
    shortDescription:
      'An exploration of leadership, communication, and accountability from the unique perspective of a basketball official.',
    fullDescription:
      "Between the 4 Lines pulls back the curtain on youth and grassroots basketball from a vantage point almost no one else has held: the official's chair at center court. It explores the love, frustration and hope surrounding the game, and offers a clear call to return it to the young people who play it.",
    hook: 'A Game. A System. A Broken Path.',
    audience:
      'Written for coaches, parents, officials and administrators invested in the culture of youth basketball.',
  },
  hero: {
    subtitle: 'Author of Between the 4 Lines',
    description:
      'A basketball official and author offering an unfiltered perspective on youth basketball, leadership, and accountability.',
  },
  features: [
    {
      number: '01',
      title: 'Uncensored',
      description:
        'Real stories from inside the game, told without the usual filters.',
    },
    {
      number: '02',
      title: 'Eye-Opening',
      description:
        "A direct look at the system shaping young athletes' experience.",
    },
    {
      number: '03',
      title: 'Accountable',
      description:
        'A leadership lens on admission, entitlement and communication breakdowns.',
    },
    {
      number: '04',
      title: 'Action-Driven',
      description:
        'Practical direction for coaches, parents, officials and administrators.',
    },
  ],
  author: {
    heading: 'Meet Michael',
    name: 'Michael J. Smith',
    bio: [
      "Michael J. Smith has worked at the center of youth, high school and NCAA Division I women's basketball as an official — a vantage point almost no coach, parent or administrator ever gets to hold.",
      'That floor-level view became the foundation for Between the 4 Lines and for honest conversation about leadership, communication and accountability in the game.',
      'Michael writes and speaks from the perspective of someone who has seen the culture of youth basketball up close — not as a spectator, but from the official\'s chair at center court.',
    ],
    portrait: '/images/author1.png',
    aboutPortrait: '/images/author-hero.png',
  },
  cta: {
    heading: 'Ready to Change the Game?',
    subheading: 'Get Your Copy of Between the 4 Lines',
    description:
      'Be part of the conversation about bringing youth basketball culture back to what truly matters.',
  },
  contact: {
    heading: 'Get In Touch',
    description:
      "Have questions about the book? Want to request a signed copy or discuss bulk orders? Reach out and I'll get back to you as soon as possible.",
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/books', label: 'Books' },
    { href: '/#bookabout', label: 'Get Your Copy' },
  ],
  footer: {
    book: 'Between the 4 Lines',
  },
} as const;
