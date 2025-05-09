function Section({ title, children, ...props }) {
    // Observera hur Forwarded Props används här (...props )

    return (  
        <section {...props}>
            <h2> {title} </h2>
            {children}
        </section>
    );
}

export default Section;