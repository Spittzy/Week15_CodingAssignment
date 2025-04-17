type button = {
    text: string,
    onClick: () => void
}

export default function Button({ text, onClick }: button) {
    return (
        <div>
            <button className="btn btn-danger rounded-pill " onClick={onClick}>
                {text}
            </button>
        </div>
    )

}