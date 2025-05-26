import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkComponent({ link, icon, color }) {
  return (
    <div style={{ "--color": color }}>
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className={`text-[#bbb] main-trans rounded-[50%]  p-[5px]  hover:text-[--color] cursor-pointer`}
          icon={icon}
          size="lg"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
}
