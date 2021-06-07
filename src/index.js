import React from 'react'
import CustomInput from './form';


class YayaForm extends React.Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            success: null,
            error: null
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        //   data.get(fieldName)
        fetch(this.props.url, {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          
          this.setState({success: data});

        })
        .catch((error) => {
          console.error('Error:', error);

          this.setState({error: error});
        });
    }

    render() {
        return (
            <div style={{
                borderRadius: '5px',
                backgroundColor: '#f2f2f2',
                padding: '20px'
              }}>
                  {this.state.success !== null ? <p style={{color: 'green'}}>Posted</p> : '' }
                  {this.state.error === null ? "" : <p style={{color: 'red'}}>Error posting please check if api url is correct</p> }

            <form onSubmit={this.handleSubmit}>
                {this.props.fields.map((item, index) => (
                    <React.Fragment>
                        <CustomInput
                            key={index}
                            label={item.label}
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            placeholder={item.placeholder}
                            defaultValue={item.defaultValue}
                            inputClass={item.inputClass}
                            required={item.required}
                            labelClass={item.labelClass}
                      />
                      <br />
                    </React.Fragment>
                ))}

                <button type={this.props.buttonType}>{this.props.buttonText}</button>
            </form>
            </div>
        );
    }
}


export default YayaForm
