interface IProps {
    value: any;
    label: string;
}

const CountDownItem: React.FunctionComponent<IProps> = (props) => {
    const { value, label } = props;

    return (
        <div className='timespan-display'>
            <span className='timespan-value'>{value.padStart(2, '0')}</span>
            <span className='timespan-label'>{label}</span>
        </div>
    );
}

export default CountDownItem;