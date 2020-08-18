import React, {Component} from "react";
import './style.css'

class Select extends Component{
    state = {
        show: false,
        value: null
    }

    onItemSelected = e => {
        const curEl = e.target;
        const {onChange} = this.props;

        if (!curEl.classList.contains('selected-list_item')) {
            return;
        }

        onChange(curEl.dataset.value);
    }

    toggleList = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        const { show } = this.state;
        const { data, onBlur } = this.props;
        const items = data.map(item => {
            return <li key={item.id} data-value={item.id} className='selected-list_item'>{item.title}</li>
        });

        let previewClass = 'select_preview';
        let listClass = 'select-list';

        if (show) {
            previewClass += 'select_preview--active';
            listClass += 'select-list--show';
        }

        return (
            <div className='select' tabIndex='0' onBlur={onBlur}>
                <div className={previewClass} onClick={this.toggleList}>Select item</div>
                <ul className={listClass} onClick={this.onItemSelected}>
                    {items}
                </ul>
            </div>
        )
    }
}

export default Select;