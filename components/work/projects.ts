export type Project = {
  title: string;
  description: string;
  link?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "時間割サイト",
    description: "一番最初に開発した保存されない時間割サイト。",
    link: "https://timetable-rii.vercel.app/",
  },
  {
    title: "ポートフォリオサイト",
    description: "このページです。Next.jsとTailwind CSSを使用して作成。",
    link: "https://rii-3112.pages.dev/",
  },
  {
    title: "非常食管理アプリ",
    description: "技育キャラバンにでるために制作。非常食の管理を行うアプリ。",
    link: "https://emergencyfood.vercel.app/",
  },
];

export default projects;
