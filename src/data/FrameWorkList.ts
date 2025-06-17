import type { IconType } from "react-icons";
import { FaReact, FaLaravel, FaAngular, FaSymfony } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSolid,
  SiNuxtdotjs,
  SiRubyonrails,
  SiReactrouter,
  SiPhoenixframework,
  SiMeteor,
  SiAdonisjs,
  SiEmberdotjs,
  SiAstro,
  SiQwik,
} from "react-icons/si";

interface FrameWorkListType {
  title: string;
  icon: IconType;
  description: string;
  link: string;
}

export const FrameWorkList: FrameWorkListType[] = [
  {
    title: "React JS",
    icon: FaReact,
    description:
      "A declarative, component-based JavaScript library for building user interfaces.",
    link: "https://reactjs.org",
  },
  {
    title: "Next JS",
    icon: SiNextdotjs,
    description:
      "Full-featured React framework with great developer experience.",
    link: "https://nextjs.org",
  },

  {
    title: "Angular",
    icon: FaAngular,
    description: "Platform for building mobile and desktop web applications.",
    link: "https://angular.io",
  },
  {
    title: "Nuxt",
    icon: SiNuxtdotjs,
    description: "Intuitive Vue framework for building universal applications.",
    link: "https://nuxt.com",
  },
  {
    title: "Laravel",
    icon: FaLaravel,
    description:
      "PHP web application framework with expressive, elegant syntax.",
    link: "https://laravel.com",
  },
  {
    title: "React Router",
    icon: SiReactrouter,
    description: "A standards‑focused router you can deploy anywhere.",
    link: "https://reactrouter.com",
  },
  {
    title: "Solid JS",
    icon: SiSolid,
    description:
      "A tool for building simple, performant, and reactive user interfaces.",
    link: "https://solidjs.com",
  },
  {
    title: "SvelteKit",
    icon: FaAngular,
    description: "The fastest way to build apps of all sizes with Svelte.js.",
    link: "https://kit.svelte.dev",
  },
  {
    title: "Ruby On Rails",
    icon: SiRubyonrails,
    description:
      "Full-stack framework with all the tools needed to build amazing web apps.",
    link: "https://rubyonrails.org",
  },

  {
    title: "Phoenix",
    icon: SiPhoenixframework,
    description:
      "A framework to build rich, interactive applications with Elixir.",
    link: "https://www.phoenixframework.org",
  },
  {
    title: "Parcel",
    icon: FaSymfony,
    description: "The zero-configuration build tool for the web.",
    link: "https://parceljs.org",
  },
  {
    title: "Symfony",
    icon: FaSymfony,
    description: "A PHP framework to create websites and web applications.",
    link: "https://symfony.com",
  },
  {
    title: "Meteor",
    icon: SiMeteor,
    description:
      "The full stack JavaScript framework for developing cross-platform apps.",
    link: "https://www.meteor.com",
  },
  {
    title: "Adonis JS",
    icon: SiAdonisjs,
    description: "A fully featured web framework for Node.js.",
    link: "https://adonisjs.com",
  },
  {
    title: "Ember JS",
    icon: SiEmberdotjs,
    description: "A JavaScript framework for ambitious web developers.",
    link: "https://emberjs.com",
  },
  {
    title: "Astro",
    icon: SiAstro,
    description: "The all-in-one web framework designed for speed.",
    link: "https://astro.build",
  },
  {
    title: "Qwik",
    icon: SiQwik,
    description: "Build instantly-interactive web apps without effort.",
    link: "https://qwik.builder.io",
  },
  {
    title: "Rspack",
    icon: SiQwik,
    description: "A fast Rust-based web bundler.",
    link: "https://www.rspack.dev",
  },
];
