import {
  faPalette,
  faDesktop,
  faPenRuler,
  faPaintbrush,
  faChartArea,
  faBullhorn,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
  faGithub,
  faDribbble,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import gall1 from "./images/p1.webp";
import gall2 from "./images/p2.webp";
import gall3 from "./images/p3.webp";
import gall4 from "./images/p4.webp";
import gall5 from "./images/p5.webp";
import gall6 from "./images/p6.webp";
import gall7 from "./images/p7.webp";

import myVideo from "./v1.webm?react-optimized";
import client1 from "./images/t1.jpg";
import client2 from "./images/t2.jpg";
import client3 from "./images/t3.jpg";
import client4 from "./images/t4.jpg";

export const services = [
  {
    icon: faPalette,
    title: "Graphic Design",
    subtitle:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: faDesktop,
    title: "Web Design",
    subtitle:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: faPenRuler,
    title: "UI/UX Design",
    subtitle:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: faPaintbrush,
    title: "App Design & Develop",
    subtitle:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: faChartArea,
    title: "Business Analysis",
    subtitle:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    icon: faBullhorn,
    title: "SEO Marketing",
    subtitle:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
];

export const resume = {
  education: [
    {
      duration: "2000 - 2004",
      course: "Computer Science",
      source: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      duration: "2005 - 2008",
      course: "Bachelor Degree",
      source: "University of California",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      duration: "2009 - 2012",
      course: "Master Degree",
      source: "Harvard University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ],
  experience: [
    {
      duration: "2012 - 2013",
      job: "Jr. UI UX Designer",
      company: "Themeforest",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      duration: "2014 - 2018",
      job: "Jr. Product Designer",
      company: "Dribbble",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      duration: "2017 - 2019",
      job: "Product Designer",
      company: "Adobe",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ],
};

export const skills = [
  { skill: "Web Design", per: 75 },
  { skill: "HTML/CSS", per: 95 },
  { skill: "JavaScript", per: 96 },
  { skill: "React JS", per: 88 },
  { skill: "Tailwind", per: 99 },
  { skill: "Bootstrap", per: 95 },
];

export const gallery = [
  {
    id: 1,
    src: gall1,
    type: "",
    category: "Design",
    title: "Design Project 1",
    desc: "Modern UI Design",
    height: 200,
    Details: [
      { id: "Client", value: "Luvi Oboroy" },
      { id: "Industry", value: "eCommerce" },
      {
        id: "Technologies",
        value: "Angular9, HTML5, CSS3, PHP, jQuery",
      },
      { id: "Date", value: "Jun 05, 2019" },
      { id: "Url", value: "www.example.com" },
    ],
    Share: [
      {
        social: faFacebook,
        socialLink: "https://www.facebook.com",
        color: "lightblue",
      },
      {
        social: faTwitter,
        socialLink: "https://www.twitter.com",
        color: "cyan",
      },
      {
        social: faGoogle,
        socialLink: "https://www.google.com",
        color: "orangered",
      },
      {
        social: faInstagram,
        socialLink: "https://www.instagram.com",
        color: "lightpink",
      },
      {
        social: faEnvelope,
        socialLink: "mailto:moelsayed524@gmail.com?subject=Contact",
        color: "darkgray",
      },
    ],
  },
  {
    id: 2,
    src: gall4,
    vi: "video",
    video: myVideo,
    category: "Brand",
    title: "Brand Identity",
    desc: "Corporate branding",
    height: 200,
  },
  {
    id: 3,
    src: gall3,
    type: "",
    category: "Photo",
    title: "Photography 1",
    desc: "Nature photography",
    height: 300,
  },
  {
    id: 4,
    src: gall5,
    category: "Design",
    type: "",
    title: "Design Project 2",
    desc: "Mobile app design",
    height: 300,
    Details: [
      { id: "Client", value: "Luvi Oboroy" },
      { id: "Industry", value: "eCommerce" },
      {
        id: "Technologies",
        value: "Angular9, HTML5, CSS3, PHP, jQuery",
      },
      { id: "Date", value: "Jun 05, 2019" },
      { id: "Url", value: "www.example.com" },
    ],
    Share: [
      {
        social: faFacebook,
        socialLink: "https://www.facebook.com",
        color: "lightblue",
      },
      {
        social: faTwitter,
        socialLink: "https://www.twitter.com",
        color: "cyan",
      },
      {
        social: faGoogle,
        socialLink: "https://www.google.com",
        color: "orangered",
      },
      {
        social: faInstagram,
        socialLink: "https://www.instagram.com",
        color: "lightpink",
      },
      {
        social: faEnvelope,
        socialLink: "mailto:moelsayed524@gmail.com?subject=Contact",
        color: "darkgray",
      },
    ],
  },
  {
    id: 5,
    src: gall7,
    type: "",
    category: "Brand",
    title: "Logo Design",
    desc: "Minimal logo concept",
    height: 300,
  },
  {
    id: 6,
    src: gall6,
    category: "Photo",
    type: "",
    title: "Photography 2",
    desc: "Urban landscape",
    height: 300,
  },
  {
    id: 7,
    src: gall2,
    category: "Design",
    type: "",
    title: "UI/UX Design",
    desc: "User experience design",
    height: 400,
    Details: [
      { id: "Client", value: "Luvi Oboroy" },
      { id: "Industry", value: "eCommerce" },
      {
        id: "Technologies",
        value: "Angular9, HTML5, CSS3, PHP, jQuery",
      },
      { id: "Date", value: "Jun 05, 2019" },
      { id: "Url", value: "www.example.com" },
    ],
    Share: [
      {
        social: faFacebook,
        socialLink: "https://www.facebook.com",
        color: "lightblue",
      },
      {
        social: faTwitter,
        socialLink: "https://www.twitter.com",
        color: "cyan",
      },
      {
        social: faGoogle,
        socialLink: "https://www.google.com",
        color: "orangered",
      },
      {
        social: faInstagram,
        socialLink: "https://www.instagram.com",
        color: "lightpink",
      },
      {
        social: faEnvelope,
        socialLink: "mailto:moelsayed524@gmail.com?subject=Contact",
        color: "darkgray",
      },
    ],
  },
  {
    id: 8,
    src: gall6,
    vi: "video",
    video: myVideo,
    category: "Photo",
    title: "Photography 3",
    desc: "Amazing Landscape",
    height: 200,
  },
  {
    id: 9,
    src: gall5,
    type: "",
    category: "Design",
    title: "Web Design",
    desc: "Amazing Design",
    height: 300,
    Details: [
      { id: "Client", value: "Luvi Oboroy" },
      { id: "Industry", value: "eCommerce" },
      {
        id: "Technologies",
        value: "Angular9, HTML5, CSS3, PHP, jQuery",
      },
      { id: "Date", value: "Jun 05, 2019" },
      { id: "Url", value: "www.example.com" },
    ],
    Share: [
      {
        social: faFacebook,
        socialLink: "https://www.facebook.com",
        color: "lightblue",
      },
      {
        social: faTwitter,
        socialLink: "https://www.twitter.com",
        color: "cyan",
      },
      {
        social: faGoogle,
        socialLink: "https://www.google.com",
        color: "orangered",
      },
      {
        social: faInstagram,
        socialLink: "https://www.instagram.com",
        color: "lightpink",
      },
      {
        social: faEnvelope,
        socialLink: "mailto:moelsayed524@gmail.com?subject=Contact",
        color: "darkgray",
      },
    ],
  },
];

export const clients = [
  {
    id: "c1",
    src: client1,
    name: "Jay Shah",
    title: "Founder at Icomatic Pvt Ltd",
    review:
      "“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”",
    rate: 5,
  },
  {
    id: "c2",
    src: client2,
    name: "Patrick Cary",
    title: "Freelancer from USA",
    review:
      "“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure interesset.”",
    rate: 5,
  },
  {
    id: "c3",
    src: client3,
    name: "Chris Tom",
    title: "User from UK",
    review:
      "“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset.”",
    rate: 5,
  },
  {
    id: "c4",
    src: client4,
    name: "Dennis Jacques",
    title: "User from USA",
    review:
      "“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”",
    rate: 4,
  },
];

export const contact = [
  { icon: faPhone, value: "(+20) 1033 866 796" },
  { icon: faEnvelope, value: "moelsayed524@gmail.com" },
];

export const follow = [
  {
    icon: faFacebook,
    link: "http://www.facebook.com",
    color: "#0866FF",
    name: "Facebook",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/mohamed-elsayed-327b77244",
    color: "#0A66C2",
    name: "LinkedIn",
  },
  {
    icon: faGoogle,
    link: "http://www.google.com",
    color: "orangered",
    name: "Google",
  },
  {
    icon: faDribbble,
    link: "http://www.dribble.com",
    color: "darkred",
    name: "Dribbble",
  },
  {
    icon: faGithub,
    link: "https://github.com/MohamedEzz524",
    color: "darkgray",
    name: "Github",
  },
];
