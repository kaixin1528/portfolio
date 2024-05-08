import { headerIcons, headerTabs } from "../constants/general";

const Header = () => {
  const path = window.location.pathname;

  return (
    <aside className="sticky top-0 flex items-center justify-between gap-10 px-7 py-6 w-full text-2xl tracking-widest font-bold bg-white">
      <span>KAIXIN</span>
      <article className="flex items-center gap-20">
        {headerTabs.map((tab) => {
          return (
            <a
              key={tab.name}
              href={tab.link}
              className={`uppercase ${
                path === tab.link ||
                (path.includes("projects") && tab.link.includes("projects"))
                  ? ""
                  : "text-gray-500 opacity-40"
              }`}
            >
              {tab.name}
            </a>
          );
        })}
      </article>
      <article className="flex items-center gap-5">
        {headerIcons.map((icon) => {
          return (
            <a
              key={icon.name}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/general/${icon.name}.png`}
                alt={icon.name}
                className="w-10 h-10"
              />
            </a>
          );
        })}
      </article>
    </aside>
  );
};

export default Header;
