export type HeaderLink = {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
};

export type HeaderLinksType = HeaderLink[];
