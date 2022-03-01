import './Content.css';

export default function Content(props) {
    return (
        <main className="content">
            <div className="content__container">
                {props.children}
            </div>
        </main>
    );
}