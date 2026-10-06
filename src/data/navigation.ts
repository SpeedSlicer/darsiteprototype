export const navigationGroups = [
  {
    label: "Programs",
    links: [
      { href: "/programs", label: "All programs" },
      { href: "/fll", label: "FLL" },
      { href: "/ftc", label: "FTC" },
      { href: "/frc", label: "FRC Team 1640" },
      { href: "/calendar", label: "Event calendar" },
    ],
  },
  {
    label: "Get involved",
    links: [
      { href: "/join", label: "Join DAR" },
      { href: "/volunteer-opportunities", label: "Volunteer" },
      { href: "/support", label: "Support DAR" },
      { href: "/sponsor", label: "Sponsor DAR" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    label: "About DAR",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact-us", label: "Contact & location" },
      { href: "/news", label: "News" },
      { href: "/awards", label: "Awards" },
    ],
  },
]

export const footerLinks = navigationGroups.flatMap(group => group.links)
