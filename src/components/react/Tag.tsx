const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  return (
    <div>
      <a aria-label={tag} href={`/tags/${encodeURIComponent(tag)}`}>
        <span
          className={`bg-slate-200 block font-semibold text-gray-700 dark:bg-indigo-900 dark:text-white dark:hover:bg-indigo-600 hover:bg-indigo-300 shadow text-sm w-fit px-2 py-1 md:px-5 md:py-2 rounded-full transform hover:-translate-y-1 hover:scale-110`}
        >
          {tag ? `#${tag}` : "Tag"}
        </span>
      </a>
    </div>
  );
};

export default Tag;