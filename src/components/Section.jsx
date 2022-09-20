
function Section(props) {
    return (
        <section>
            <div>
                <h2>{props.title}</h2>
                <p>{props.subTitle}</p>
                <ul className={props.className}>{props.children}</ul>
            </div>
        </section>
    )
}

export default Section