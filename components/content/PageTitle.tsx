export function PageTitle(props: {
    title: string;
    subtitle?: string;
    className?: string;
}) {
    return (
        <div className={`${props.className || ''}`} style={{textAlign: "center", padding: "25px 25px 25px 25px"}}>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
