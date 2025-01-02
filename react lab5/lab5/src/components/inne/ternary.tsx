

function Ternary(){

    const a:boolean = true;
    const b:boolean = false;

    return (
        <div>
            {a ? <div>Warunek a jest prawdziwy</div> : <div>Warunek a jest fałszywy</div>}
            {b ? <div>Warunek b jest prawdziwy</div> : <div>Warunek b jest fałszywy</div>}
        </div>
    )


}

export default Ternary;