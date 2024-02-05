import "./style.css";

const Division = ({ title, extraContent, content, }) => (
<section className="division">
    <header className="divison__title">
      <b>{title}</b>
      {extraContent}
    </header>
    <div className="division__content">{content}</div>
    </section>
);

export default Division;